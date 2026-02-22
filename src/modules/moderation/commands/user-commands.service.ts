/** biome-ignore-all lint/style/useImportType: Constructor imports are not types */
import { Injectable } from '@nestjs/common';
import type { User } from 'discord.js';
import {
	Context,
	TargetUser,
	UserCommand,
	type UserCommandContext,
} from 'necord';
import { ModerationModals } from '../modals/moderation.modals';

@Injectable()
export class UserCommandsService {

	public constructor(
		private readonly moderationModals: ModerationModals,
	) {}

	@UserCommand({ name: 'Reportar' })
	public report(
		@Context() [interaction]: UserCommandContext,
		@TargetUser() user: User,
	) {
		return interaction.showModal(this.moderationModals.reportModal);
	}
}
