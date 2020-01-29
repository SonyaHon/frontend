import {Module} from '@nestjs/common';
import {TestModule} from './test/test.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'

@Module({
	imports: [TestModule, ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'client/dist')
	})],
})
export class AppModule {
}
