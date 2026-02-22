import { Injectable, Logger } from '@nestjs/common';
import { Context, type ContextOf, On, Once } from 'necord';

@Injectable()
export class AppUpdate {
	private readonly logger = new Logger(this.constructor.name);

	@Once('clientReady')
	public onReady(@Context() [client]: ContextOf<'clientReady'>) {
		this.logger.log(`Bot logged in as ${client.user.username}`);
	}

	@On('warn')
	public onWarn(@Context() [message]: ContextOf<'warn'>) {
		this.logger.warn(message);
	}
}
