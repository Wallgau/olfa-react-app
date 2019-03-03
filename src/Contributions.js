import React, { Component } from 'react';
import firebase from './firebase.js';


class Contributions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAnswers: [],
		}
	}

	/* componentDidMount() {
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
	} */
	componentDidMount() {
		//destructed way to write. 
		const { questionId } = this.props;
		const dbRef = firebase.database().ref(`${questionId}/userAnswers`);

		const newState = []
		dbRef.on('value', (userAnswer) => {
			const data = userAnswer.val();
			for (let key in data) {
				//and pushes that object to the newState array
				newState.push(data[key])
			}

			this.setState({
				userAnswers: newState
			})
			console.log(this.state)
		})
	}

	render() {
		return (
			<div>


				<ul>
					{this.state.userAnswers.map((answer, index) => {
						console.log(answer)

						return (
							<div key={`question.userAnswers-${index}`} className="sectionAnswers">
								<div className="wrapper">
									<li>
										<p key={`index`}>{answer.userAnswer}</p>
									</li>
								</div>
							</div>
						)
					})
					}

				</ul>
			</div >
		)
	}
}

export default Contributions;