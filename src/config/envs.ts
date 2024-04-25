import 'dotenv/config';
import * as joi from 'joi';

interface EnvValues {
  PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required().default(3000),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envsValues = value as EnvValues;

export const envs = {
  port: envsValues.PORT,
};
