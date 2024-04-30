import React, { useState, useRef, useEffect } from 'react';
import { Card, Button, message } from 'antd';
import { Statistic } from 'antd';
import { data } from './images/data';
import 'antd/dist/antd.css';
const { Countdown } = Statistic;

export const Test2 = () => {
    const handleAnswerSelect = (value) => {
        if (selectedAnswer.includes(value)) {
            setSelectedAnswer(selectedAnswer.filter(item => item !== value));
        } else {
            setSelectedAnswer([...selectedAnswer, value]);
        }
    };
    // jawab
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    // timer
    const [countdownStarted, setCountdownStarted] = useState(false);
    const [countdownFinished, setCountdownFinished] = useState(false);
    // question
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    // audio
    const audio = useRef(new Audio(data[currentQuestion].audio));

    useEffect(() => {
        const handleAudioEnd = () => {
            setCountdownStarted(true);
            setCountdownFinished(false);
            audio.current.pause();
        };
        audio.current.addEventListener('ended', handleAudioEnd);
        return () => {
            audio.current.removeEventListener('ended', handleAudioEnd);
        };
    }, [currentQuestion]);

    const checkAnswer = () => {
        const correctAnswer = data[currentQuestion].correct.split('').map(item => parseInt(item));
        const sortedSelectedAnswer = [...selectedAnswer].sort();

        if (!arraysEqual(sortedSelectedAnswer, correctAnswer)) {
            setWrongAnswers([...wrongAnswers, data[currentQuestion].id]);
            data[currentQuestion].wrong_answer = sortedSelectedAnswer.join('');
            console.log(data);
        }

        if (arraysEqual(sortedSelectedAnswer, correctAnswer)) {
            message.success('Correct Answer!');
        } else {
            message.error('Wrong Answer!');
        }
    };

    const arraysEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    const onChange = (val) => {
        if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    };
    const nxt = () => {
        checkAnswer()
        setSelectedAnswer([]);
        setCountdownStarted(false);
        setCountdownFinished(true);
        setCurrentQuestion(currentQuestion + 1);
        audio.current.src = data[currentQuestion + 1].audio;
        audio.current.play();
    }

    const onFinish = () => {
        nxt()
    };

    const nextQuestion = () => {
        nxt()
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div>
            <Card
                hoverable
                style={{ display: 'flex' }}
                cover={<img style={{ width: 800 }} alt="example" src={data[currentQuestion].image} />}
            >
                <div style={{ flex: 1 }}>
                    <div style={{ marginTop: 20 }}>
                        <div style={{ marginBottom: 10, marginTop: 10, backgroundColor: '#f0f0f0', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', width: '100%', height: '30px', textAlign: 'center' }}>
                            {selectedAnswer && selectedAnswer.length > 0 &&
                                selectedAnswer.join('| ')
                            }
                        </div>
                    </div>
                    {wrongAnswers.includes(currentQuestion) && (
                        <div style={{ marginTop: 10 }}>
                            <span>Wrong Answer!</span>
                        </div>
                    )}
                </div>
                {data[currentQuestion].id}
                <div style={{ width: "200px" }}>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center', border: selectedAnswer.includes(1) ? '2px solid #1890ff' : '2px solid #d9d9d9', borderRadius: '5px' }}
                        onClick={() => handleAnswerSelect(1)}
                    >
                        1
                    </Button>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center', border: selectedAnswer.includes(2) ? '2px solid #1890ff' : '2px solid #d9d9d9', borderRadius: '5px' }}
                        onClick={() => handleAnswerSelect(2)}
                    >
                        2
                    </Button>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center', border: selectedAnswer.includes(3) ? '2px solid #1890ff' : '2px solid #d9d9d9', borderRadius: '5px' }}
                        onClick={() => handleAnswerSelect(3)}
                    >
                        3
                    </Button>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center', border: selectedAnswer.includes(4) ? '2px solid #1890ff' : '2px solid #d9d9d9', borderRadius: '5px' }}
                        onClick={() => handleAnswerSelect(4)}
                    >
                        4
                    </Button>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center' }}
                        onClick={() => setCountdownStarted(!countdownStarted)}
                    >
                        Start
                    </Button>
                    <Button
                        style={{ marginBottom: 20, paddingBottom: "10px", width: '100%', textAlign: 'center' }}
                        onClick={nextQuestion}
                    >
                        Valider
                    </Button>
                </div>
                {countdownStarted && !countdownFinished && <Countdown value={Date.now() + 5 * 1000} onFinish={onFinish} onChange={onChange} />}
            </Card>
        </div>
    </div>
    )};