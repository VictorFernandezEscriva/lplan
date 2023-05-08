import { Request, Response, response } from "express";
import { registerNewUser, loginUser, loginFrontend } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  
  const responseUser = await loginUser(body);

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
    console.log(res.status);
  } else if (responseUser === "USER_NOT_ADMIN") {
    res.status(406);
    res.send(responseUser);
  } else if (responseUser === "NOT_FOUND_USER") {
    res.status(404);
    res.send(responseUser);
    console.log("not found user " + res.status);
  } else {
    res.send(responseUser);
  }
  
};

const loginFrontendCtrl = async ({ body }: Request, res: Response) => {
  
  const responseUser = await loginFrontend(body);

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
    console.log(res.status);
  } else if (responseUser === "NOT_FOUND_USER") {
    res.status(404);
    res.send(responseUser);
    console.log("not found user " + res.status);
  } else {
    res.send(responseUser);
  }
  
};

export { loginCtrl, registerCtrl, loginFrontendCtrl };