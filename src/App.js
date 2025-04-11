import logo from './logo.svg';
import './App.css';
import Game from './Game';
import { useState } from 'react';

const questions = [
  {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
  },
  {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
  },
  {
      title: 'Что такое JSX?',
      variants: [
          'Это простой HTML',
          'Это функция',
          'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  
  return (
    <div className="App">
      <Game
        questions={questions}
        correct={correct}
        setCorrect={setCorrect}
        step={step}
        setStep={setStep}
      />
    </div>
  );
}

export default App;
