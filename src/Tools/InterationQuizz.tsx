import frameworks from "../../public/quizz/CSStools.json";
import questions from "../../public/quizz/questions.json";
import { Framework, Question } from "../Types/QuizzType.ts";

export function getFramework(): Framework[] {
  return frameworks;
}

export function getFrameworkById(id: number): Framework {
  return frameworks[id];
}

export function getQuestions(): Question[] {
  return questions;
}
