import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';

@Injectable()
export class GyerekService {
  create(createGyerekDto: CreateGyerekDto) {
    return 'This action adds a new gyerek';
  }

  findAll() {
    return `This action returns all gyerek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gyerek`;
  }

  update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return `This action updates a #${id} gyerek`;
  }

  remove(id: number) {
    return `This action removes a #${id} gyerek`;
  }
}
