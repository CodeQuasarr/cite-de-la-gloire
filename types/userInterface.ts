interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    role: string;
}

interface ILoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface ILoginResponse {
    user: IUser;
    accessToken: string;
}
