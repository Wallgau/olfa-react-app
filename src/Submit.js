/* import React, { Component } from 'react';
import Question from './Question.js';
import firebase from './firebase.js';

import Form from './Form.js'
import { format } from 'util';

class Submit extends Component {
	constructor(props) {
		super();
		this.state = ({
			userAnswers: ''
		})

	}
	// this event is fired everutime the form is submitted
	handleSubmit = (event) => {
		console.log('event', event)
		//the argument is the event (submission the form)
		//default behavior is to refresh the page but we don't want that
		event.preventDefault();
		//push whatever the user typed in the input to firebase
		//create a reference to the root node of the database
		const dbRef = firebase.database().ref()
		console.log(dbRef)
		dbRef[this.props.question].push(
			{ userAnswers: this.state.userAnswers }


		)

		this.setState({
			userAnswer: "" //pour cleaner à chaque fois sinon la valeur de l'userInput resterait
		})
	}

	render() {
		return (

			<button name="submitButton" onClick={this.handleSubmit} placefolder="Contribute">Contribute</button>


		)
	}
}

export default Submit;  */