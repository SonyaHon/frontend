import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {EVENTS} from '../shared'
import {Server, Socket} from "socket.io";
import * as parser from 'socket.io-msgpack-parser'
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@WebSocketGateway({
	parser
})
export class AppGateway {

	constructor(private readonly appService: AppService) {
	}

	@WebSocketServer() server: Server;


	@SubscribeMessage(EVENTS.AUTH_GET)
	onAuthGet(client: Socket, payload: any): Observable<boolean> {
		return this.appService.getAuth(client.handshake.headers.cookie || {});
	}

}
