import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { MenuListDto } from "./dto/MenuListDto";
import { MenuDto } from "./dto/MenuDto";
import { Menu } from "@/domain/entities/Menu";
import { MenuImage } from "@/domain/entities/MenuImage";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";

export class DfMenuListUsecase {
    constructor(
        private repository: MenuRepository,
        private menuImageRepository: MenuImageRepository,
    ) {}

    async execute(page: number = 1, keyword: string = ""): Promise<MenuListDto> {
        const from = (page - 1) * 8;
        const to = page * 8 - 1;

        // 메뉴 데이터를 가져옵니다.
        const menus: Menu[] = await this.repository.findAll(keyword, from, to);

        // 메뉴 데이터를 MenuDto로 변환합니다.
        const menuDtos: MenuDto[] = await Promise.all(
            menus.map(async (menu: Menu) => {
                const image: MenuImage | null = await this.menuImageRepository.findDefaultImageByMenuId(menu.id);

                return {
                    ...menu, // Menu의 기존 데이터를 포함합니다.
                    img: image ? image.src : "default.svg", // 이미지 경로를 설정합니다.
                };
            })
        );

        // 전체 메뉴 개수를 가져옵니다.
        const totalCount: number = await this.repository.count();

        // MenuListDto 객체를 반환합니다.
        return {
            menus: menuDtos,
            totalCount,
            totalPages: Math.ceil(totalCount / 8),
            hasPrevPage: page > 1,
            hasNextPage: page < Math.ceil(totalCount / 8),
            pages: Array.from({ length: Math.ceil(totalCount / 8) }, (_, i) => i + 1),
        };
    }
}
