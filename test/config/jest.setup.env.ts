import * as dotenv from "dotenv";
import { Registry } from "../../src/config/di/DI";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// Registry.getInstance().provide(
//   "exampleRepository",
//   ExampleRepository.getInstance()
// );
