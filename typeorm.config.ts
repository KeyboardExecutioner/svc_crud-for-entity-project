import 'dotenv/config';
import { ProjectEntity } from 'src/projects/project.entity';

import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: "root",
  password: "Anh2003#",
  database: "svc_crud",
  synchronize: true,
  entities: [ProjectEntity],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  migrationsRun: true,
  
});
