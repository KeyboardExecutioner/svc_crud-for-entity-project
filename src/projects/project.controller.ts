import { Body, Controller, HttpException, HttpStatus, Post,Get, Param, ParseIntPipe, Delete, Put } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectDTO } from "./model/project.dto";
import { ProjectEntity } from "./project.entity";

@Controller('project')
export class ProjectController{
    constructor(private readonly projectService: ProjectService){}
    @Post()
    async create(@Body() projectDTO:ProjectDTO):Promise<ProjectEntity>{
        // try{
            return this.projectService.create(projectDTO);
        // } catch (error){
        //     throw new HttpException(
        //         'Operation failed',
        //         HttpStatus.NOT_ACCEPTABLE,{cause: 'Key information missing'}, );}
                
    }
    @Get()
    async findAll():Promise<ProjectEntity[]>{
        return this.projectService.findAll()
    }
    @Get(":id")
    async findOne(@Param('id',ParseIntPipe)id:number):Promise<ProjectEntity>{
        return this.projectService.findOne(id)
    }
    @Delete(":id")
    async remove(@Param('id',ParseIntPipe)id:number):Promise<ProjectEntity[]>{
        return this.projectService.remove(id)
    }
    @Put(":id")
    async update(@Param('id',ParseIntPipe)id:number,@Body() projectDTO:ProjectDTO):Promise<ProjectEntity>{
        return this.projectService.update(id,projectDTO)
    }
}