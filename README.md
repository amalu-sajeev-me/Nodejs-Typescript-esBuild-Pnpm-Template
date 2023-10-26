# Nodejs-Typescript-esBuild-Pnpm-Template

> This template uses ts-node (-- SWC) for transpiling in dev and uses nodemon to watch
>

## Prerequisites
If you don't use the standalone script or @pnpm/exe to install pnpm, then you need to have Node.js (at least v16.14) to be installed on your system.

``npm install -g pnpm``

## usage

```bash
git clone https://github.com/amalu-sajeev-me/Nodejs-Typescript-esBuild-Pnpm-Template.git "your project name"
cd "your project name"
pnpm install
```


## features added

1. has built-in environment variables validation using zod schema. you can extend the process.env by adding fields to the ``env.schema.ts``
  ```typescript
     import { z } from 'zod';
     export const envSchema = z.object({
          PORT: z.string(),
          LOG_LEVEL: z.enum(['debug', 'info', 'error'])
      });
      export type IEnvVariables = z.infer<typeof envSchema>;
  ```
  > should use ``import '@bin/config';`` in your entry file for env schema validation.

2. has a logger configured to be injected. can be imported from ``@adapters/logger.adapter'``
   ```typescript
     import { LoggerAdapter } from '@adapters/logger.adapter';
     import { container } from 'tsyringe';
     // you can inject the logger to other services as well..
     const scream = container.resolve(LoggerAdapter);
     scream.info('hello world');
   ```

