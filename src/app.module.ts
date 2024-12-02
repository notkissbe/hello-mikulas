import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GyerekModule } from './gyerek/gyerek.module';

@Module({
  imports: [GyerekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
