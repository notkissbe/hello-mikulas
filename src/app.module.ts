import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GyerekModule } from './gyerek/gyerek.module';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [GyerekModule, ToysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
