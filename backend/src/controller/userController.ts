import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const userController = {
  async getAllUser(req: Request, res: Response) {
    const userData = await fetch("https://dummyjson.com/users");
    console.log(userData);
    res.status(StatusCodes.OK).send(await userData.json());
  },
};
