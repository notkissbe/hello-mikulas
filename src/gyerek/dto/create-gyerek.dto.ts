import { IsNotEmpty } from 'class-validator';

export class CreateGyerekDto {
  @IsNotEmpty()
  nev: string;
  @IsNotEmpty()
  cim: string;
  @IsNotEmpty()
  joE: boolean;
}
