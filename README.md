# SimpleCORS

A simple CORS middleware for Oak.

# Usage

```ts
import { Application } from "oak";
import { simplecors } from "mod.ts";

const app = new Application();
app.use(simplecors());
```
