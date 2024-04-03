import { Hono } from "hono";

const app = new Hono();

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("Unauthorized", 401);
  }
}

app.get("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);

  return c.text("Hello Hono!");
});

export default app;
