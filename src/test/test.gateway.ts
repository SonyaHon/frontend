import {SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {TestService} from "./test.service";

@WebSocketGateway()
export class TestGateway {
	constructor(private readonly testService: TestService) {
	}

	@SubscribeMessage('message')
	async handleMessage(client: any, payload: any): Promise<string> {
		return this.testService.test();
	}
}
