import {Module} from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'
import {AppGateway} from './app.gateway';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AppService} from './app.service';
import {AppController} from './app.controller';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'USER_SERVICE',
				transport: Transport.TCP,
				options: {
					port: 9093
				}
			}
		]),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client/dist')
		}),
	],
	providers: [AppGateway, AppService],
	controllers: [AppController],
})
export class AppModule {
}
