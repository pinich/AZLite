import { IQuestion } from "./IQuestion";

export interface IQuestionsResponse {
  testQuestions: IQuestion[],
  productionQuestions: IQuestion[],
  customProdQuestions: IQuestion[]
}
