import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Schema()
export class Question {
  @Prop({ required: true })
  skillId: number;

  @Prop({ required: true, enum: Difficulty })
  difficulty_level: Difficulty;

  @Prop({ required: true })
  question: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
