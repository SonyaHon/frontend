import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {EVENTS} from '../shared'
import {Server} from "socket.io";

@WebSocketGateway()
export class AppGateway {

	@WebSocketServer() server: Server;

	@SubscribeMessage(EVENTS.MESSAGE)
	async onMessage(client: any, payload: any): Promise<string> {
		setTimeout(() => {
			console.log('Emiting to client');
			client.emit(EVENTS.CL_TEST, {
				x: 10
			});
		}, 1000);
		return 'Hello world!'
	}
}
