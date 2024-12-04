import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
      data: createGyerekDto,
    });
  }

  findAll() {
    return this.db.gyerek.findMany();
  }

  findOne(id: number) {
    return this.db.gyerek.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return this.db.gyerek.update({
      where: {
        id: id,
      },
      data: updateGyerekDto,
    });
  }

  remove(id: number) {
    return this.db.gyerek.delete({
      where: {
        id: id,
      },
    });
  }

  async addToy(id: number, toyId: number) {
    try {
      const gyerekExists = await this.db.gyerek.findUnique({
        where: {
          id: id,
        },
      });
      const jatekExists = await this.db.jatek.findUnique({
        where: {
          id: toyId,
        },
      });
      if (!gyerekExists) {
        return new NotFoundException('Gyerek not found with id: ' + id + '.');
      }
      if (!jatekExists) {
        return new NotFoundException('Jatek not found with id: ' + toyId + '.');
      }
      if (!(gyerekExists.joE)) {
        throw new ConflictException('Nem jo a gyerek!');
      }
      return await this.db.keres.create({
        data: {
          keroId: id,
          jatekId: toyId,
        },
      });
    } catch (e) {
      if(e instanceof ConflictException){
        throw e;
      }
      console.log(e)
    }
  }

  async removeToy(id: number, toyId: number) {
    try {
      const gyerekExists = await this.db.gyerek.findUnique({
        where: {
          id: id,
        },
      });
      const jatekExists = await this.db.jatek.findUnique({
        where: {
          id: toyId,
        },
      });
      if (!gyerekExists) {
        return new NotFoundException('Gyerek not found with id: ' + id + '.');
      }
      if (!jatekExists) {
        return new NotFoundException('Jatek not found with id: ' + toyId + '.');
      }
      return await this.db.keres.delete({
        where: {
          keroId_jatekId: {
            keroId: id,
            jatekId: toyId,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getToysOfChild(id: number) {
    try {
      const gyerekExists = await this.db.gyerek.findUnique({
        where: {
          id: id,
        },
      });
      if (!gyerekExists) {
        throw new NotFoundException('Gyerek not found with id: ' + id + '.');
      }
      return await this.db.keres.findMany({
        where: {
          keroId: id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
