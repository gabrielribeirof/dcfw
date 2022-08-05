import { Listener } from '../../decorators/listener.decorator';
import { On } from '../../decorators/on.decorator';

@Listener()
export class MessageListener {
  private main = 'oi';

  @On('messageCreate')
  message() {
    console.log(`${this.main} message created`);
  }
}
