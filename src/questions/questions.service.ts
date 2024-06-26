import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) {}

  async create(question: Question): Promise<Question> {
    const createdQuestion = new this.questionModel(question);
    return createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async findOne(id: string): Promise<Question> {
    return this.questionModel.findById(id).exec();
  }

  // async remove(id: string): Promise<void> {
  //   await this.questionModel.findByIdAndRemove(id).exec();
  // }
  
}
