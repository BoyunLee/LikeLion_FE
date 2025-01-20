export interface MenuDto {
    id: number;
    korName: string;
    engName: string;
    price: number;
    regDate: Date;
    categoryId: number;
    regMemberId: number;

    // 대표 이미지
    img: string;
    likeCount: number;
}