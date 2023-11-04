import { Request, Response } from "express";


export const getAvailableSkinController = async (req:Request, res:Response) => {
    const skinAvailable = await skinUserService.get();
    res.status(200).json({ skinAvailable});
}