import {Module} from '@nestjs/common';
import {TestGateway} from './test.gateway';
import {TestService} from './test.service';

@Module({
	providers: [TestGateway, TestService]
})
export class TestModule {
}
