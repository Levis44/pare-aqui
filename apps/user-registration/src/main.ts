import { NestFactory } from '@nestjs/core';
import { UserModule } from './app.module';

const PORT = 3000;
async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}
bootstrap();
