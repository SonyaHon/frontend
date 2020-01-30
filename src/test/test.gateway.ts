import {SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {TestService} from "./test.service";
import {EVENTS} from '../../shared'

@WebSocketGateway()
export class TestGateway {
	constructor(private readonly testService: TestService) {
	}

	@SubscribeMessage(EVENTS.MESSAGE)
	async handleMessage(client: any, payload: any): Promise<string> {
		return this.testService.test();
	}
}
