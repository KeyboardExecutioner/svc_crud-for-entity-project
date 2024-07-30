import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('projects')
export class ProjectEntity{
    @PrimaryGeneratedColumn({type:'integer',name:'id'})
    id:number
    @Column({type:'varchar',name:'project_name',nullable:false})
    name:string
    @Column({type:'varchar',name:'status',nullable:false})
    status:string
    @Column({type:'varchar',name:'team_name',nullable:false})
    team_name:string
    @Column({type:'text',name:'description',nullable:false})
    description:string
    // @Column({type:'text',name:'migration_test',nullable:false})
    // migration_test:string
    // @Column({type:'uuid',name:'created_date',nullable:false})
    // created_date:string
}
