import { useState } from "react";

import Navbar from "../Components/Navbar";
import MetaHead from "../Components/MetaHead";
import Footer from "../Components/Footer";
import { Framework } from "../Types/QuizzType.ts";
import { getFramework, getQuestions } from "../Tools/InterationQuizz.tsx";

const questions = getQuestions();

const frameworks = getFramework();

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [result, setResult] = useState<Framework | null>(null);

  const handleAnswer = (optionIndex: number) => {
    // Enregistrer la réponse
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
      setIsCompleted(true);
    }
  };

  const calculateResult = (answers: number[]) => {
    const scores: number[] = frameworks.map(() => 0);

    answers.forEach((answerIndex, questionIndex) => {
      const mappings = questions[questionIndex].mappings;
      mappings[answerIndex].forEach((frameworkIndex) => {
        scores[frameworkIndex] += 1;
      });
    });

    const maxScore = Math.max(...scores);
    const bestMatchIndex = scores.findIndex((score) => score === maxScore);

    setResult(frameworks[bestMatchIndex]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MetaHead
        title="Quiz CSSéducteur : Trouvez votre framework CSS"
        url="https://csseducteur.love/quizz"
        metaDescription="Découvrez le framework CSS qui correspond le mieux à votre style de développement avec notre quiz CSSéducteur."
        metaKeywords="quiz CSS, framework CSS, CSSéducteur, test développement web"
        metaImage="og-quiz.webp"
      />
      <Navbar type="blank" />

      <div className="flex flex-grow flex-col items-center bg-gradient-to-b from-blue-50 to-pink-50 p-6">
        {isCompleted ? (
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-800">
              Votre Résultat
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Vous correspondez le mieux au framework suivant :
            </p>
            <h2 className="text-2xl font-bold text-blue-500">{result?.name}</h2>
            <p className="mt-4 text-gray-700">{result?.description}</p>
            <button
              className="mt-6 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-600"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setIsCompleted(false);
                setResult(null);
              }}
            >
              Recommencer le Quiz
            </button>
          </div>
        ) : (
          <div className="w-full max-w-2xl">
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} sur {questions.length}
              </p>
              <div className="mt-2 h-2 w-full rounded-lg bg-gray-200">
                <div
                  className="h-2 rounded-lg bg-blue-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              {questions[currentQuestion].question}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-md transition-transform hover:scale-105 hover:border-blue-500 hover:bg-blue-50"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          className="mt-8 text-sm text-gray-500 hover:text-gray-800"
          onClick={() => window.history.back()}
        >
          &larr; Retour
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default QuizPage;
