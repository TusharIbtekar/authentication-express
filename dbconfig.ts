import { Sequelize } from "sequelize";
import { z } from "zod";
import env from "dotenv";
env.config();

const envSchema = z.object({
  DATABASE: z.string().nonempty(),
  USER: z.string().nonempty(),
  PASSWORD: z.string().nonempty(),
});

const envVars = envSchema.parse(process.env);

const sequelize = new Sequelize(
  envVars.DATABASE,
  envVars.USER,
  envVars.PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
  }
);

function init() {
  sequelize
    .sync()
    .then((res) => {
      console.log("db connected");
    })
    .catch((err) => console.log("error", err));
}

export default sequelize;
