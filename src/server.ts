import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";


connectDB();

app.listen(env.port, () => {
  console.log(`🚀 Smart Workflow Server running on port ${env.port}`);
});
