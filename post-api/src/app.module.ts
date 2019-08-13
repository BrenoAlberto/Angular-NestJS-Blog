import { Module } from '@nestjs/common';
import { BlogModule } from './blog/BlogModule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', //blog-user
      password: '', //password
      database: 'blog-app',
      entities: [__dirname + '/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
