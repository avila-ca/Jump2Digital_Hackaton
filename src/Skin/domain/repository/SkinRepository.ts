import { Skin } from "../entities/Skin"
import { User } from "../entities/User";


export interface SkinRepository {
    getAvailableSkin(): Promise<Skin[]>;
    buySkin(skin: Skin): Promise<Skin[]>;
    getUserSkin(idUser:User, id:Skin): Promise<Skin[]>;
    updateUserSkin(idUser: User, id:Skin): Promise<Skin[]>;
    deleteUserSkin(idUser: User, id: Skin): Promise<Skin[]>;
    getSkin(id:Skin): Promise<Skin[]>;
}