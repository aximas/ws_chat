export type RequestBody = {
    email: 'string';
    password: 'string';
    rememberMe: boolean;
    captcha?: boolean;
}