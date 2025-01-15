import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        [ 
            { id: 1, name: "Menu 1" },
            { id: 2, name: "Menu 2" }
        ]
    );
}