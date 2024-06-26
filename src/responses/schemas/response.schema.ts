import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResponseDocument = Response & Document;

@Schema()
export class Response {
  @Prop({ required: true })
  questionId: number;

  @Prop({ required: true })
  candidateId: number;

  @Prop({ required: true })
  response: string;

  @Prop({ required: false })
  rating: number;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);

