import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidationObjectSchema } from './configs';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationObjectSchema,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
