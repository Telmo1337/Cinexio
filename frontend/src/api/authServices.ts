import {request} from './http';


interface LoginPayload {
    identifier: string;
    password: string;
}

export async function loginRequest(data: LoginPayload) {
    return request("auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}
