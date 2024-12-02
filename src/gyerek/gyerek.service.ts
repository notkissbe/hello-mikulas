import { Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GyerekService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createGyerekDto: CreateGyerekDto) {
    return this.db.gyerek.create({
      data: createGyerekDto
    });
  }

  findAll() {
    return this.db.gyerek.findMany();
  } 

  findOne(id: number) {
    return this.db.gyerek.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return this.db.gyerek.update({
      where: {
        id: id
      },
      data: updateGyerekDto
    });
  }

  remove(id: number) {
    return this.db.gyerek.delete({
      where: {
        id: id
      }
    });
  }
}
