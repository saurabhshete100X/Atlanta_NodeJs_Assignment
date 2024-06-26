import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { Response } from './schemas/response.schema';

@Controller('responses')
export class ResponsesController {
  constructor(private responsesService: ResponsesService) {}

  @Get()
  findAll(): Promise<Response[]> {
    return this.responsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Response> {
    return this.responsesService.findOne(id);
  }

  @Get('candidate/:candidateId')
  findByCandidate(@Param('candidateId') candidateId: number): Promise<Response[]> {
    return this.responsesService.findByCandidate(candidateId);
  }

  @Post()
  create(@Body() response: Response): Promise<Response> {
    return this.responsesService.create(response);
  }

  @Patch(':id/rate')
  updateRating(@Param('id') id: string, @Body('rating') rating: number): Promise<Response> {
    return this.responsesService.updateRating(id, rating);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.responsesService.remove(id);
  // }

  @Get('candidate/:candidateId/skills')
  getAggregateSkills(@Param('candidateId') candidateId: number) {
    return this.responsesService.getAggregateSkills(candidateId);
  }
}
