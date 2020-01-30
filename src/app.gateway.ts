import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {EVENTS} from '../shared'
import {Server, Socket} from "socket.io";
import * as parser from 'socket.io-msgpack-parser'

@WebSocketGateway({
	parser
})
export class AppGateway {

	@WebSocketServer() server: Server;

	@SubscribeMessage(EVENTS.MESSAGE)
	async onMessage(client: Socket, payload: any): Promise<string> {
		console.log('Cookie:', client.handshake.headers);
		return 'Hello world!'
	}
}
