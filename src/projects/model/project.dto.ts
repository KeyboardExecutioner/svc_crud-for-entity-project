import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { ProjectEntity } from "../project.entity";

export class ProjectDTO implements ProjectEntity{
    @IsEmpty()
    id:number;
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @IsString()
    status: string;
    @IsNotEmpty()
    @IsString()
    team_name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
}
