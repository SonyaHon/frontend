import {Injectable} from '@nestjs/common';

@Injectable()
export class TestService {
	async test(): Promise<string> {
		return 'Hello world!'
	}
}
