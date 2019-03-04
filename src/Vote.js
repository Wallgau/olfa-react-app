import React, { Component } from 'react';
import Question from './Question.js';
import firebase from './firebase.js';

class Vote extends Component {
	constructor(props) {

		super(props);
		this.state = {
			count: 0
		}
	}
	componentDidMount() {
		// if count is not defined, I don't want to update the state with undefined and want to keep 0
		if (this.props.count > 0) {
			// the state = the value of count in firebase from Contributions
			this.setState({ count: this.props.count })
		}
	}
	handleClick = (event) => {
		event.preventDefault();
		const { count } = this.state;
		this.setState({ count: count + 1 })
		const firebaseRef = firebase.database().ref(`${this.props.questionId}/userAnswers`);
		firebaseRef.child(this.props.answerId).update({ count: count + 1 })
	}
	render() {
		const { count } = this.state
		return (
			<div>
				<i className="far fa-plus-square" aria-hidden="true" onClick={this.handleClick}> <span>Upvote Answer: {count}</span></i>
			</div>
		)
	}
}
export default Vote;