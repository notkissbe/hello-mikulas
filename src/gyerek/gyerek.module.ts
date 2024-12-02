import { Module } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { GyerekController } from './gyerek.controller';

@Module({
  controllers: [GyerekController],
  providers: [GyerekService],
})
export class GyerekModule {}
