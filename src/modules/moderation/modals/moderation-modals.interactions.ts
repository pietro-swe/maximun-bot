/** biome-ignore-all lint/style/useImportType: Constructor import for Client */
import { env } from '@modules/config';
import { Injectable, Logger } from '@nestjs/common';
import { Client, MessageFlags, TextChannel } from 'discord.js';
import { Ctx, Modal, type ModalContext } from 'necord';

@Injectable()
export class ModerationModalsInteractions {
	private readonly logger = new Logger(this.constructor.name);

	public constructor(
		private readonly client: Client,
	) {}

	@Modal('report-user')
	public async onReport(@Ctx() [interaction]: ModalContext) {
		const channel = this.client.channels.cache.get(env.DISCORD_REPORTS_CHANNEL_ID);

		if (!channel) {
			this.logger.error('Reports channel not found');
			return interaction.reply({ content: 'Canal de reportes não encontrado.', flags: [MessageFlags.Ephemeral] });
		}

		if (!channel.isTextBased()) {
			this.logger.error('Reports channel is not text-based');
			return interaction.reply({ content: 'Canal de reportes não é um canal de texto.', flags: [MessageFlags.Ephemeral] });
		}

		const reportsChannel = channel as TextChannel;

		const reason = interaction.fields.getTextInputValue('report-reason');

		await reportsChannel.send(`Novo reporte recebido:\n- Usuário: <@${interaction.user.id}>\n- Razão: ${reason}`);

		await interaction.reply({ content: 'Obrigado por seu reporte! Nossa equipe irá analisar a situação.', flags: [MessageFlags.Ephemeral] });
	}
}
