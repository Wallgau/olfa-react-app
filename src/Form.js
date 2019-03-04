import React, { Component } from 'react';
import Question from './Question.js';
import firebase from './firebase.js';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAnswer: ''
		}
	}
	renderButton = (props) => {
		if (this.props.canSubmitAnswer) {
			return (
				<button
					type="submit"
					name="submitButton"
					onClick={this.handleSubmit}
					placefolder="Contribute">
					Contribute
					</button>
			)
		} else {
			return (
				<p className="userAlert">
					This question had too much success, we do not accept any answer anymore
				</p>
			)
		}
	}

	handleChange = (event) => {
		//this argument pass to the function is the event (a change in the input)
		//we set state using that input's name and value
		//(this makes the function reusable)
		this.setState({
			userAnswer: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		//Want to prevent empty response
		if (this.state.userAnswer.length > 0) {
			// I am making sure the object I pass is always the same format
			const answerData = {
				userAnswer: this.state.userAnswer
			};

			// I need the questionId from Question to know where to put the answer
			// I want all the answer to be in the same object in firebase
			// I am passing a path to make sure they are at the same place
			const firebaseRef = firebase.database().ref(`${this.props.questionId}/userAnswers`);
			firebaseRef.push(answerData);
			// Need to reset the value to nothing when the answer has been submitted
			this.setState({ userAnswer: '' })
		}
		else {
			alert('You need to fill up your answer before submitting it');
		}
	}

	render() {
		return (
			<form>
				<textarea
					rows='10'
					columns='50'
					name="userAnswer"
					onChange={this.handleChange}
					placefolder="contribute to the community by answering here!"
					// need the value to be the state so I can reset it to nothing.
					// if not, the input kept the value on submit
					value={this.state.userAnswer} />
				<label htmlFor="userAnswer"></label>
				{this.renderButton()}
			</form>
		)
	}
}

export default Form;