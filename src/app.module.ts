import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './projects/project.entity';
import { ProjectModule } from './projects/project.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"Anh2003#",
    database:"svc_crud",
    entities:[ProjectEntity],
    synchronize:true,
  }),
  ProjectModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
