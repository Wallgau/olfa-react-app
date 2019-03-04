import React, { Component } from 'react';
import firebase from './firebase.js';
import Vote from './Vote';

class Contributions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAnswers: [],
		}
	}
	componentDidMount() {
		//we get the props questionId from Question Component
		const { questionId } = this.props;
		const dbRef = firebase.database().ref(`${questionId}/userAnswers`);
		dbRef.on('value', (userAnswer) => {
			const newState = []
			const data = userAnswer.val();
			for (let key in data) {
				//and pushes that object to the newState array
				newState.push({ [key]: data[key] });
			}
			this.setState({
				userAnswers: newState
			})
		})
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.userAnswers.map((answer, index) => {
						// Need to get the key of the object for each question
						let answerId = Object.keys(answer);
						// Should only have one keys
						answerId = answerId[0];
						// Need to update the correct question with the answer in firebase
						// I have to pass the userAnswersId here because I don't know it in <Contributions>
						return (
							<li key={`question.userAnswers-${index}`} className="sectionAnswers">
								<p>{answer[answerId].userAnswer}</p>

								<Vote questionId={this.props.questionId} answerId={answerId} count={answer[answerId].count} />

							</li>
						)
					})}
				</ul>
			</div >
		)
	}
}
export default Contributions;