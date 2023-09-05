import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidationObjectSchema } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationObjectSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
