export type RequestBody = {
    email: 'string';
    password: 'string';
    rememberMe: boolean;
    captcha?: boolean;
}

export type GetResponse = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}