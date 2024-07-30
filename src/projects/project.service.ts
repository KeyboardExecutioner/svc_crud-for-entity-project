import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';
import { Repository } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ProjectDTO } from './model/project.dto';
@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity)
        private readonly projectRepository: Repository<ProjectEntity>,
    ){}
  async create(body:ProjectDTO):Promise<ProjectEntity>{
    const project :ProjectEntity = await this.projectRepository.save({
        ...body,
      });
      return project;
  }
  async findAll():Promise<ProjectEntity[]>{
    const projectList :ProjectEntity[] = await this.projectRepository.find()
    return projectList;
  }
  async findOne(id:number):Promise<ProjectEntity>{
    return this.projectRepository.findOneBy({id})
  }
  async remove(id:number):Promise<ProjectEntity[]>{
    await this.projectRepository.delete(id);
    return this.projectRepository.find()
  }
  async update(ID:number,body:ProjectDTO):Promise<ProjectEntity>{
    const project :ProjectEntity = await this.projectRepository.save({
      id:ID,
      ...body,
    });
    return project;
  }
}
