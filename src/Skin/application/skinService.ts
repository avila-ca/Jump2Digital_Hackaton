import { SkinRepository } from "../domain/repository/SkinRepository";
import { Skin } from "../domain/entities/Skin";

export class SkinService{
    constructor(private readonly skinRepository:SkinRepository){}
    async getAvailSkin(): Promise<Skin[]>{
        const skins = await this.skinRepository.getAvailableSkin();
        return skins;
    }
    async createSkin(skin:Skin):Promise<Skin[]>{
        const skinBuy = await this.skinRepository.buySkin(skin);
        return skinBuy;
    }
}