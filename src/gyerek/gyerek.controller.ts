import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';

@Controller('children')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  @Post()
  create(@Body() createGyerekDto: CreateGyerekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Get(':id/toys')
  getToysOfChild(@Param('id') id: string) {
    return this.gyerekService.getToysOfChild(+id);
  }

  @Get()
  findAll() {
    return this.gyerekService.findAll();
  }

  @Put(':id/toys/:toyId')
  async addToy(@Param('id') id: string, @Param('toyId') toyId: string) {
    return this.gyerekService.addToy(+id, +toyId);
  }

  @Delete(':id/toys/:toyId')
  DeleteToy(@Param('id') id: string, @Param('toyId') toyId: string) {
    return this.gyerekService.addToy(+id, +toyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyerekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto) {
    return this.gyerekService.update(+id, updateGyerekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gyerekService.remove(+id);
  }
}
