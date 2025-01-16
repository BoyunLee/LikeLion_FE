import { NextResponse } from "next/server";

export async function GET() {
    // 업로로직을 호출해서 그 결과를 UI 에게 반환
    return NextResponse.json(
        [
            { id: 1, name: "Menu 1" },
            { id: 2, name: "Menu 2" },
        ]
    );
}