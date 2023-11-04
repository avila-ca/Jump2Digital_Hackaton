import { SkinRepository } from "../domain/repository/SkinRepository";
import { Skin } from "../domain/entities/Skin";

export class skinService{
    constructor(private readonly skinRepository:SkinRepository){}
    async getAvailSkin(): Promise<Skin[]>{
        const skins = await this.skinRepository.getAvailableSkin();
        return skins;
    }
    
}