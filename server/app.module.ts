import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { HelloWorldController } from './src/hello-world/hello-world.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './src/todo/todo.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017'), TodoModule
  ],
  controllers: [HelloWorldController]
})
export class ApplicationModule {}
