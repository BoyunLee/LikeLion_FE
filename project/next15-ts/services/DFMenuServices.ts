import { Menu } from "@/domain/entities/Menu";
import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/infrastrucrute/repositories/SbMenuRepository";

export class DfMenuService {
    private repository: SbMenuRepository = new SbMenuRepository();

//   private repository: SbMenuRepository;

//   constructor() {
//       this.repository = new SbMenuRepository();
//   }

  async getList(): Promise<MenuListModel[]> {
    const menus: Menu[] = await this.repository.findAll();

    return menus.map((menu) => {
      const model: MenuListModel = {
        ...menu,
        img: "default.svg",
      };
      return model;
    });
  }
}