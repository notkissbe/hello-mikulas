import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  create(createToyDto: CreateToyDto) {
    return this.db.jatek.create({
      data: createToyDto,
    });
  }

  findAll() {
    return this.db.jatek.findMany();
  }

  async findOne(id: number) {
    const eredmeny = await this.db.jatek.findUnique({
      where: {
        id: id,
      },
    });

    if (!eredmeny) {
      throw new NotFoundException('No toy with ID ' + id);
    } else {
      return eredmeny;
    }
  }

  update(id: number, updateToyDto: UpdateToyDto) {
    return this.db.jatek.update({
      where: {
        id: id,
      },
      data: updateToyDto,
    });
  }

  async remove(id: number) {
    try {
      await this.db.jatek.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
