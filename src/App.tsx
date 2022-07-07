import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './api';

// types
import { QuestionsState, Difficulty } from './api';

//styles
import { GlobalStyle, Wrapper } from './App.style';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 15;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  console.log(questions);
  

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions)
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // user answer
      const answer = e.currentTarget.value;
      // check answer against correct value
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore(prev => prev +1);
      // Save answer in the array for userAnswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number +1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper className="App">
      <h1>QUIZ TIME</h1>
      { gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
      <button className="start" onClick={startQuiz}>Start Quiz</button>
        ) :null }
      { !gameOver ? <p className='score'>Score: {score}</p> :null }
      { loading ? <p>Loading questions...</p> :null }
      { !loading && !gameOver && (
         <QuestionCard
         questionNumber={ number + 1 }
         totalQuestions={TOTAL_QUESTIONS}
         question={questions[number].question}
         answers={questions[number].answers}
         userAnswer={userAnswers ? userAnswers[number] : undefined}
         callback={checkAnswer}
       />
      )}
      { !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) :null }
    </Wrapper>
    </>
  );
}

export default App;
