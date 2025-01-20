import { DfMenuListUsecase } from "@/application/usecases/menuLookup/DfMenuListUsecase";
import { MenuListDto } from "@/application/usecases/menuLookup/dto/MenuListDto";
import { MenuRepository } from "@/domain/repositories/MenuRepository";
import { SbMenuRepository } from "@/infrastrucrute/repositories/SbMenuRepository";
import { NextResponse } from "next/server";

// /api/menus -> UI가 사용하는 호출
export async function GET() {
    // 업로로직을 호출해서 그 결과를 UI 에게 반환
    const menuRepository: MenuRepository = new SbMenuRepository();
    const menuListUsecase: DfMenuListUsecase = new DfMenuListUsecase(menuRepository);
    const MenuListDto: MenuListDto = await menuListUsecase.excute(); 

    // 업로로직을 호출해서 그 결과를 UI 에게 반환
    return NextResponse.json(MenuListDto);
}