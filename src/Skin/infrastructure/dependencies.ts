import { MongoSkinRepository } from "./repositories/MongoSkinRepository";
import { SkinService } from "../application/skinService";

const mongoSkinRepository = new MongoSkinRepository();
export const skinUserService = new SkinService(mongoSkinRepository);