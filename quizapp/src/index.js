import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css'
import './constants'
import constants from './constants';
import QuestionBox from './components/questionbox'
import Result from './components/result';

class QuizApp extends Component{

    state = {
        listOfQuestions : [],
        score : 0,
        responses : 0
    };

    getQuestions = () => {
        constants().then(questions => {
            this.setState({
                listOfQuestions : questions
            });
        });
    }

    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score:this.state.score+1
            })
        }
        this.setState({
            //only 5 questions
            responses:this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score:0,
            responses: 0
        });
    }

    render(){
        return (
            <div className='app-container'>
                <div className="title"> Quiz </div>
                {
                    this.state.listOfQuestions.length > 0 && 
                    this.state.responses < 5 && 
                    this.state.listOfQuestions.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer,correct)} />
                        )
                    
                    )
                }

                { this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}
            </div>
        );
    }
}

ReactDom.render(<QuizApp />,document.getElementById('root'));