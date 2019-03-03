import React, { Component } from 'react';
import firebase from './firebase.js';


class Contributions extends Component {
	constructor() {
		super();
		this.state = {
			userAnswer: [],
		}
	}

	componentDidMount() {
		const dbRef = firebase.database().ref(`${this.props.questionId}/userAnswer`);

		const newState = []
		dbRef.on('value', (userAnswer) => {
			const data = userAnswer.val();
			for (let key in data) {
				//and pushes that object to the newState array
				newState.push(data[key])
			}
			console.log(newState)

			this.setState({
				userAnswer: newState
			})
		})
	}

	render() {
		return (
			<div>


				<ul>
					{this.state.userAnswer.map((item, index) => {
						// Need to update the correct question with the answer in firebase
						// I have to pass the userAnswersId here because I don't know it in <Contributions>
						const userAnswerId = `question.userAnswers${index + 1}`;

						return (
							<section key={`question.userAnswers-${index}`} className="sectionAnswers">
								<div className="wrapper">
									<li>
										<p key={`index`}>{item.userAnswers}</p>
									</li>
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

export default Contributions;
