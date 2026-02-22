import { Module } from '@nestjs/common';
import { UserCommandsService } from './commands/user-commands.service';
import { ModerationModals } from './modals/moderation.modals';
import { ModerationModalsInteractions } from './modals/moderation-modals.interactions';

@Module({
	imports: [],
	providers: [ModerationModals, UserCommandsService, ModerationModalsInteractions],
	exports: [UserCommandsService, ModerationModalsInteractions],
})
export class ModerationModule {}
