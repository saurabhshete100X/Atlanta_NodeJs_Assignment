import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './schemas/question.schema';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Question> {
    return this.questionsService.findOne(id);
  }

  @Post()
  create(@Body() question: Question): Promise<Question> {
    return this.questionsService.create(question);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.questionsService.remove(id);
  // }
}
