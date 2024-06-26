import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { Response, ResponseSchema } from './schemas/response.schema';
import { Question, QuestionSchema } from '../questions/schemas/question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Response.name, schema: ResponseSchema },
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  controllers: [ResponsesController],
  providers: [ResponsesService],
  exports: [ResponsesService],
})
export class ResponsesModule {}
