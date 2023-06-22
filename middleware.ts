import { oak } from "./deps.ts";

export async function simplecors(
    context: oak.Context,
    next: oak.Next,
) {
    const { request } = context;
    request.headers.set("Access-Control-Allow-Origin", "*");
    await next();
}
