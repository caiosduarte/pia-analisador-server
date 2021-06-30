import { sign, TokenExpiredError, verify } from "jsonwebtoken";
import AppError from "../../../errors/AppError";
import auth from "../config/auth";
import ITokensRepository from "../repositories/ITokensRepository";
import createJsonWebTokenEncoded from "../utils/createJsonWebTokenEncoded";

interface ITokenResponse {
    token: string;
    userId: string;
    refreshToken: string;
}

interface ITokenPayload {
    sub: string;
    email: string;
    exp?: string;
}

export default class RefreshTokenService {
    constructor(private repository: ITokensRepository) {}

    async execute(token: string): Promise<ITokenResponse> {
        const {
            tokenSecret,
            tokenExpiresIn,
            refreshTokenSecret,
            refreshTokenExpiresIn,
        } = auth.jwt;

        try {
            var jwt = verify(token, refreshTokenSecret) as ITokenPayload;

            if (jwt.exp === undefined || jwt.exp === null) {
                throw new AppError(`JWT expired: ${jwt.exp}`, 401);
            }
        } catch (err) {
            if (err instanceof TokenExpiredError) {
                throw new AppError(`JWT expired at ${err.expiredAt}`, 401);
            } else {
                throw new AppError("JWT invalid.", 401);
            }
        }

        const { sub: userId } = jwt;

        const oldToken = await this.repository.findByEncodedAndUserId(
            token,
            userId
        );

        if (!oldToken) {
            throw new AppError("Refresh Token does not exists!");
        }

        // apaga o token antigo
        this.repository.deleteById(oldToken.id);

        // obtém o usuário atualizado
        const emailAtualizado = oldToken.user?.email;

        const refreshToken = sign({ emailAtualizado }, refreshTokenSecret, {
            subject: userId,
            expiresIn: "10d",
        });

        // TODO: Fazer a implementação VanilaDateProvider com este método e outras funções em javascript puro
        const addDays = function addDays(days: number, date = new Date()) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        };

        const newRefreshToken = this.repository.create({
            userId,
            token: refreshToken,
            // TODO: Está fixo, mas deveria implementar a lógica com refreshTokenExpiresIn
            expiresAt: addDays(10),
        });

        const newToken = createJsonWebTokenEncoded({
            secret: tokenSecret,
            subject: userId,
            expiresIn: tokenExpiresIn,
        });

        return {
            token: newToken,
            userId,
            refreshToken,
        };
    }
}
