import { Menu } from '@/domain/entities/Menu';
import { MenuRepository } from '@/domain/repositories/MenuRepository';
import { createClient } from '@/utils/supabase/server';

export class SbMenuRepository implements MenuRepository {
    async count():Promise<number> {
        const supabase = await createClient();
        const { count, error } = await supabase
                .from("menu")
                .select("*", {count : "exact", head : false});

            if(error) {
                throw new Error(error.message);
            }
            return count || 0;
    }
    
    async findAll(keyword : string, from : number, to:number): Promise<Menu[]> {
        const supabase = await createClient();
        const { data: menus } = await supabase
                .from("menu")
                .select("*", {count : "exact", head : false})
                .like("kor_name", `%${keyword}%`)
                .order("reg_dte", { ascending: false })
                .range(from, to);

        // supabase : 클라이언트로 데이터를 조작하는 함수목록을 정리해줘
        // 목록을 반환
        // 단일 엔티티 변환
        // 필터링
        // 정렬
        // 집계 : 단일 값(Scalar) 변환

        return {list: menus, count: count ?? 0}

        //return menus || [];
    }
}