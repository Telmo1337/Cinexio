import {request} from './http';


interface LoginPayload {
    identifier: string;
    password: string;
}

interface RegisterPayload {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
}

export async function loginRequest(data: LoginPayload) {
    return request("auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}


export async function registerRequest(data: RegisterPayload) {
  return request("auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}