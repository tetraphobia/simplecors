# tetraCORS

A simple CORS middleware for Oak.

# Usage

```ts
import { Application } from "oak";
import { tetracors } from "mod.ts";

const app = new Application();
app.use(tetracors());
```
