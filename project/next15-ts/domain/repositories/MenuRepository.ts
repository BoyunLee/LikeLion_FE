import { Menu } from "../entities/Menu";

export interface MenuRepository {


    findAll(keyword : string, from : number, to:number): Promise<Menu[]>;
}