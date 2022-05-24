import { IsInt, IsPositive, IsString, Max, Min } from "class-validator"

export class CreateUserDto {
    readonly id: string

    @IsString()
    readonly firstName: string

    @IsString()
    readonly lastName: string

    @IsPositive()
    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    readonly yearOfBirth: number

    @IsString({ each: true })
    readonly favouriteColors: Array<string>
}
