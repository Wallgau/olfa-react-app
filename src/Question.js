import React, { Component } from 'react';
import firebase from './firebase.js';
import Form from './Form.js';
import Contributions from './Contributions.js';
import Vote from './Vote.js';

class Question extends Component {
	constructor() {
		super();
		this.state = {
			question: [],
		}
	}
	componentDidMount() {
		const dbRef = firebase.database().ref();

		dbRef.on('value', (question) => {
			const newState = [];
			const data = question.val();
			for (let key in data) {
				//and pushes that object to the newState arrayn
				newState.push(data[key])
			}
			this.setState({
				question: newState
			})
		})
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.question.map((item, index) => {
						// Need to update the correct question with the answer in firebase
						// I have to pass the questionId here because I don't know it in <Form>
						const questionId = `question${index + 1}`;
						const userAnswers = item.userAnswers;
						let numberOfAnswers = 0;
						if (userAnswers) {
							numberOfAnswers = Object.keys(userAnswers).length;
						}
						//to limit the number of answer for each question, the user can answer to the question who had been answered less than 10 times.
						const canSubmitAnswer = numberOfAnswers < 10;
						return (
							<section key={`question-${index}`} className="sectionQuestion">
								<div className="wrapper">
									<li key={`index`}>
										<p class="displayedQuestion">{item.question}</p>
									</li>
									{/* Need to pass the questionId = props */}
									<Form questionId={questionId} canSubmitAnswer={canSubmitAnswer} />
									<Contributions questionId={questionId} />
								</div>
							</section>
						)
					})
					}
				</ul>
			</div >
		)
	}
}
export default Question;