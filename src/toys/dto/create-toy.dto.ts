import { IsAlphanumeric, IsIn, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateToyDto {
    @IsNotEmpty()
    @IsString()
    megnevezes: string;

    @IsNotEmpty()
    @IsIn(["wood","metal","plastic","other"])
    anyag: string;

    @IsNotEmpty()
    @IsPositive()
    suly: number;
}
