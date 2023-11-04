import { TypeSkin, ColourSkin } from "./types";
import { User } from "./User";

export interface Skin extends User{
    id:number,
    name:string,
    typeSkin: TypeSkin,
    price:number,
    colour: ColourSkin
}