import {Module} from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'
import {RedisModule} from './redis/redis.module';
import {MongoModule} from './mongo/mongo.module';
import {UserModule} from './user/user.module';
import {AppGateway} from './app.gateway';

@Module({
	imports: [ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'client/dist')
	}), RedisModule, MongoModule, UserModule],
	providers: [AppGateway],
})
export class AppModule {
}
