import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

namespace NodeJS {
  interface ProcessEnv {
    DATABASE_TYPE: PostgresConnectionOptions;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
  }
}
