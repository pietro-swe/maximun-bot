import { env } from '@modules/config';
import { CommandsService } from '@modules/discord/commands/slash-commands.service';
import { ModerationModule } from '@modules/moderation/moderation.module';
import { Module } from '@nestjs/common';
import { IntentsBitField } from 'discord.js';
import { NecordModule } from 'necord';
import { AppUpdate } from './app.update';

@Module({
	imports: [
		NecordModule.forRoot({
			token: env.DISCORD_TOKEN,
			intents: [
				IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
			],
			development: [env.DISCORD_DEVELOPMENT_GUILD_ID],
		}),
		ModerationModule,
	],
	controllers: [],
	providers: [AppUpdate, CommandsService],
})
export class AppModule {}
