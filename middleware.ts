import { oak } from "./deps.ts";
import type { CorsOptions } from "./types.ts";

const DEFAULT_OPTIONS: CorsOptions = {
    credentials: "true",
    headers: "*",
    methods: "*",
    optionsSuccessCode: 204,
    origin: "*",
};

/** Simple CORS middleware for oak. Provides bare minimum functionality (for now).
 *
 * ```ts
 * import { Application } from "https://deno.land/x/oak/mod.ts";
 * import { simplecors } from "mod.ts";
 *
 * const app  new Application();
 * app.use(simplecors());
 *
 * await app.listen(":80");
 * ```
 */
export function simplecors(
    opts?: CorsOptions,
) {
    return (async (
        { request, response }: oak.Context,
        next: oak.Next,
    ) => {
        opts = { ...DEFAULT_OPTIONS, ...opts };

        if (request.method.toUpperCase() === "OPTIONS") {
            response.status = opts.optionsSuccessCode as oak.Status
        }

        response.headers.set("Access-Control-Allow-Origin", opts.origin!);
        response.headers.set("Access-Control-Allow-Credentials", opts.credentials!);
        response.headers.set("Access-Control-Allow-Methods", opts.methods!);
        response.headers.set("Access-Control-Allow-Headers", opts.headers!)

        await next();
    });
}
