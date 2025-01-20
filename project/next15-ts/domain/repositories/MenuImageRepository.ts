import { MenuImage } from "../entities/MenuImage";

export interface MenuImageRepository {

    findAllMenuId(menuId:number): Promise<MenuImage[]>;
    findDefaultImageByMenuId(menuId:number): Promise<MenuImage[]>;
}