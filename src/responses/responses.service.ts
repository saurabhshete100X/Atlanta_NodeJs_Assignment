import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, ResponseDocument } from './schemas/response.schema';
import { Question, QuestionDocument } from '../questions/schemas/question.schema';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(Response.name) private responseModel: Model<ResponseDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async create(response: Response): Promise<Response> {
    const createdResponse = new this.responseModel(response);
    return createdResponse.save();
  }

  async findAll(): Promise<Response[]> {
    return this.responseModel.find().exec();
  }

  async findOne(id: string): Promise<Response> {
    return this.responseModel.findById(id).exec();
  }

  async findByCandidate(candidateId: number): Promise<Response[]> {
    return this.responseModel.find({ candidateId }).exec();
  }

  // async remove(id: string): Promise<void> {
  //   await this.responseModel.findByIdAndRemove(id).exec();
  // }

  async updateRating(id: string, rating: number): Promise<Response> {
    const response = await this.responseModel.findById(id).exec();
    if (response) {
      response.rating = rating;
      return response.save();
    }
    return null;
  }

  async getAggregateSkills(candidateId: number) {
    const responses = await this.findByCandidate(candidateId);
    const skillRatings = {};

    for (const response of responses) {
      const { questionId, rating } = response;
      const question = await this.questionModel.findById(questionId).exec();
      const { skillId, difficulty_level } = question;

      if (!skillRatings[skillId]) {
        skillRatings[skillId] = {
          easy: { count: 0, total: 0 },
          medium: { count: 0, total: 0 },
          hard: { count: 0, total: 0 },
        };
      }

      if (difficulty_level === 'easy') {
        skillRatings[skillId].easy.count += 1;
        skillRatings[skillId].easy.total += rating;
      } else if (difficulty_level === 'medium') {
        skillRatings[skillId].medium.count += 1;
        skillRatings[skillId].medium.total += rating;
      } else if (difficulty_level === 'hard') {
        skillRatings[skillId].hard.count += 1;
        skillRatings[skillId].hard.total += rating;
      }
    }

    const aggregatedSkills = [];
    for (const skillId in skillRatings) {
      const { easy, medium, hard } = skillRatings[skillId];
      const totalWeight = (1 * easy.count) + (2 * medium.count) + (3 * hard.count);
      const totalScore = (1 * easy.total) + (2 * medium.total) + (3 * hard.total);

      const rating = totalScore / totalWeight;
      aggregatedSkills.push({ skillId: parseInt(skillId, 10), rating });
    }

    return aggregatedSkills;
  }
}
