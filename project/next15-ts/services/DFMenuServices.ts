import { Menu } from "@/entities/Menu";
import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/repositories/SbMenuRepository";

export class DfMenuService {
    private repository: SbMenuRepository = new SbMenuRepository();

//   private repository: SbMenuRepository;

//   constructor() {
//       this.repository = new SbMenuRepository();
//   }

  async getList(): Promise<MenuListModel[]> {
    const menus: Menu[] = await this.repository.fetchAll();

    return menus.map((menu) => {
      const model: MenuListModel = {
        ...menu,
        img: "default.svg",
      };
      return model;
    });
  }
}