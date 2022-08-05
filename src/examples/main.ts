import 'reflect-metadata';
import { GatewayIntentBits, Partials } from 'discord.js';

import { AppModule } from './app.module';
import { DCFWFactory } from '../dcfw-factory';

async function bootstrap() {
  DCFWFactory.create(AppModule, {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.DirectMessages,
    ],
    partials: [Partials.Channel],
  });

  // await client.login('ODUxNTUzMzQ4NzgzNzAyMDY5.Ge39lM.jjupk8XSORXOpSl-aBgxUWlBrqrz1V3W74NTog');
}

bootstrap();
