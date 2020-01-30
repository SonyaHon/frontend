import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SvjsIoAdapter} from "./app.gateway.adapter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useWebSocketAdapter(new SvjsIoAdapter(app));
	app.setGlobalPrefix('/api');
	await app.listen(9092);
}

bootstrap();
