import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SvjsIoAdapter} from "./app.gateway.adapter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(9092);
}

bootstrap();
