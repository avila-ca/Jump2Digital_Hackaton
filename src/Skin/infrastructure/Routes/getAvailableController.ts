import { Request, Response } from "express";


export const getAvailableController = async (req:Request, res:Response) => {
    const skinAvailable = await skinAvailableCase.get();
    res.status(200).json({ skinAvailable});
}