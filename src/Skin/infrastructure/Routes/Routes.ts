import { Router } from "express";
import { getAvailableController } from "./getAvailableController";
export const appRouter = Router();

appRouter.get('/available', getAvailableController);