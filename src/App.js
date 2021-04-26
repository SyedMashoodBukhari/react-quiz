import { useState } from 'react'

const App = () => {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerId: 1, answerText: 'New York', isCorrect: false },
                { answerId: 2, answerText: 'London', isCorrect: false },
                { answerId: 3, answerText: 'Paris', isCorrect: true },
                { answerId: 4, answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerId: 1, answerText: 'Jeff Bezos', isCorrect: false },
                { answerId: 2, answerText: 'Elon Musk', isCorrect: true },
                { answerId: 3, answerText: 'Bill Gates', isCorrect: false },
                { answerId: 4, answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerId: 1, answerText: 'Apple', isCorrect: true },
                { answerId: 2, answerText: 'Intel', isCorrect: false },
                { answerId: 3, answerText: 'Amazon', isCorrect: false },
                { answerId: 4, answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerId: 1, answerText: '1', isCorrect: false },
                { answerId: 2, answerText: '4', isCorrect: false },
                { answerId: 3, answerText: '6', isCorrect: false },
                { answerId: 4, answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    // Increments user score if answer is correct and loads next question or score page
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    // Simple function to reset states and restart quiz
    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    }

    return (
        <div className='quiz'>
            {/* Wraps output in a ternary to check if showScore is true or false based on user progress through the quiz */}
            {showScore ? (
                <div className='score-section'>
                    <p>You scored {score} out of {questions.length}</p>
                    <div className='restart-quiz'>
                        <button onClick={() => handleRestartQuiz()}>Restart Quiz</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            { /* Question {currentQuestion + 1}/{questions.length} */ }
                            Question {currentQuestion + 1}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <div key={answerOption.answerId} className='answer-option' onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default App