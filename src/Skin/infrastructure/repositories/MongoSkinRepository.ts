import { Skin } from "../../domain/entities/Skin";
import { SkinRepository } from "../../domain/repository/SkinRepository";
import fs from "node:fs/promises";

export class MongoSkinRepository implements SkinRepository {
    async getAvailableSkin(): Promise<Skin[]> {
        const skinsAvailable = await fs.readFile("../../../availableSkins.json", "utf-8");
        const skinsAvailableParsed = JSON.parse(skinsAvailable);
        return skinsAvailableParsed;
    }
    async async buySkin(id: Skin): Promise<Skin[]> {
        const boughtSkin = await 
    }
}