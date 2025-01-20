import { MenuImage } from "@/domain/entities/MenuImage";
import { MenuImageRepository } from "@/domain/repositories/MenuImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbMenuImageRepository implements MenuImageRepository {
    
    async findAllByMenuId(menuId: number): Promise<MenuImage[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
                .from("menu_image")
                .select("*")
                .eq("menu_id", menuId);

        if(error) {
            console.error(error);
        }   
        return data || [];
    }


    async findDefaultImageByMenuId(menuId: number): Promise<MenuImage[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
                .from("menu_image")
                .select("*")
                .eq("menu_id", menuId)
                .eq("is_default", true)
                .single(); // 단일 데이터를 가져옴

        if(error) {
            console.error(error);
        }
        return data || [];
    }
}