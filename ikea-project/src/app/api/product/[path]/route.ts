import { items } from "@/features/data/data";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { path: string } }
) {
  const { path } = params;

  const item = items.find((item) => item.name === path);

  if (!item) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
