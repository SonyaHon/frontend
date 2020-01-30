import {SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {EVENTS} from '../shared'

@WebSocketGateway()
export class AppGateway {
	@SubscribeMessage(EVENTS.MESSAGE)
	async onMessage(client: any, payload: any): Promise<string> {
		return 'Hello world!'
	}
}
