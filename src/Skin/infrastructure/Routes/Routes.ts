import { Router } from "express";
import { getAvailableController } from "./getAvailableSkinController";
export const appRouter = Router();

appRouter.get('/available', getAvailableController);
appRouter.post('/skins/buy', buySkinController);