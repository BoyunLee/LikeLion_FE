import { MenuDto } from "./MenuDto";

export interface MenuListDto {
    menus: MenuDto[];

    // pager을 위한 데이터
    totalCount: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    pages: number[];
}