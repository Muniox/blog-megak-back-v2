import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidationObjectSchema } from './configs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationObjectSchema,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
