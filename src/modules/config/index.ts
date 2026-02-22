import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
	PORT: z.coerce.number().default(3000),
	DISCORD_TOKEN: z.string(),
	DISCORD_DEVELOPMENT_GUILD_ID: z.string(),
	DISCORD_REPORTS_CHANNEL_ID: z.string(),
})

const result = envSchema.safeParse(process.env);

if (!result.success) {
	console.error('Invalid environment variables:', z.treeifyError(result.error));
	process.exit(1);
}

export const env = result.data;
