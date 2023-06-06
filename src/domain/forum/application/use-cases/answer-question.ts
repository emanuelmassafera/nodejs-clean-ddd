import { UniqueEntityID } from '@/core/entities/value-objects/unique-entity-id'
import { Either, right } from '@/core/either'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

type AnswerQuestionUseCaseResponse = Either<
  null,
  {
    answer: Answer
  }
>

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      questionId: new UniqueEntityID(questionId),
      authorId: new UniqueEntityID(instructorId),
    })

    await this.answersRepository.create(answer)

    return right({ answer })
  }
}
