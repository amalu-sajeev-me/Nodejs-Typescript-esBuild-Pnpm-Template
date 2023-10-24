import { z } from 'zod';

export const envSchema = z.object({
    PORT: z.string(),
    LOG_LEVEL: z.enum(['debug', 'info', 'error'])
});

export type IEnvVariables = z.infer<typeof envSchema>;
