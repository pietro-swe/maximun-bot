import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, type SlashCommandContext } from 'necord';

@Injectable()
export class CommandsService {
	@SlashCommand({
		name: 'ping',
		description: 'Ping command!'
	})
	public onPing(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({ content: 'Pong!' });
	}
}
