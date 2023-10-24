import './ioc.register.ts';
import type { IEnvVariables } from "./env.schema.ts";
import { envProxy } from './EnvValidator.ts';

declare global {
/* eslint-disable @typescript-eslint/no-namespace */
    namespace NodeJS {
        interface ProcessEnv extends IEnvVariables { }
    }
/* eslint-enable @typescript-eslint/no-namespace */
}

(function validateEnvironmentVariables() {
    envProxy.validate();
})();