import {IoAdapter} from "@nestjs/platform-socket.io";

export class SvjsIoAdapter extends IoAdapter {

	createIOServer(port: number, options?: any): any {
		console.log(options);
		const server = super.createIOServer(port, options);
		return server;
	}
}