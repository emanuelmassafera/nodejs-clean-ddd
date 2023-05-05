import AnswerQuestionUseCase from './answer-question'
import AnswersRepository from '../repositories/answers-repository'
import Answer from '@/domain/forum/enterprise/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer): Promise<void> => {},
}

it('should create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New content',
  })

  expect(answer.content).toEqual('New content')
})