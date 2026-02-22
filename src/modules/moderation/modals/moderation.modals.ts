import { Injectable, Logger } from "@nestjs/common";
import { ActionRowBuilder, LabelBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { Modal } from "necord";

@Injectable()
export class ModerationModals {
	public readonly reportModal = new ModalBuilder()
		.setTitle('Reportar usuário')
		.setCustomId('report-user')
		.setLabelComponents([
			new LabelBuilder()
				.setLabel('Razão do reporte')
				.setDescription('Descreva o motivo do reporte')
				.setTextInputComponent(new TextInputBuilder()
					.setCustomId('report-reason')
					.setStyle(TextInputStyle.Paragraph)
					.setRequired(true)
				)
		])

}
