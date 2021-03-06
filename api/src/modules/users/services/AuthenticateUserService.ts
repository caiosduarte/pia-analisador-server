import { compare } from "bcrypt";

import AppError from "../../../errors/AppError";
import ICreateTokenDTO from "../dtos/ICreateTokenDTO";
import { ITokenResponseDTO } from "../dtos/ITokenResponseDTO";
import UserMap from "../../../mappers";

import IDateProvider from "../providers/IDateProvider";
import ITokensRepository from "../repositories/ITokensRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { createRefreshToken, createToken } from "../utils/createJwt";
import { hasRefreshTokenValid } from "../utils/token";


interface ICredentials {
    email?: string;
    document?: string;
    cellphone?: string;
    password?: string;
}

type IIDs = Omit<ICredentials, "password">;



class AuthenticateUserService {
    constructor(
        private usersRepository: IUsersRepository,
        private tokensRepository: ITokensRepository,
        private dateProvider: IDateProvider
    ) {}

    public async execute({
        email,
        cellphone,
        document,
        password,
        remember,
    }: ICredentials & { remember: boolean }): Promise<ITokenResponseDTO> {
        const user = await this.usersRepository.findByIds({
            email,
            cellphone,
            document,
        });

        if (!user) {
            throw new AppError("Email/password don't match.", 404);
        }

        if(!user.validatedAt) {
            throw new AppError("User has not validated yet.", 403);
        }

        if(!user.confirmedAt) {
            throw new AppError("User have to confirm the registration.", 403);
        }

        if (password) {
            const passwordValid = await compare(password, user.password);

            if (!passwordValid) {
                throw new AppError("Email/password don't match.", 401);
            }
        } else if (
            !hasRefreshTokenValid({ email, cellphone, document }, user.tokens)
        ) {
            throw new AppError("Last session is too long or not found.", 401);
        }

        const token = createToken(user);

        const refreshTokenDays = remember ? 30 : 10;

        const refreshToken = createRefreshToken(user, refreshTokenDays);

        this.tokensRepository.create({
            userId: user.id,
            token: refreshToken,
            expiresAt: this.dateProvider.addDays(refreshTokenDays),
        } as ICreateTokenDTO);

        return {
            user: UserMap.toDTO(user),
            token,
            refreshToken,
        };
    }
}

export default AuthenticateUserService;
