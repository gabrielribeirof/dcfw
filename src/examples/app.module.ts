import { Module } from '../decorators/module.decorator';
import { MessageListener } from './listeners/message.listener';

@Module({
  listeners: [
    MessageListener,
  ],
})
export class AppModule {}
