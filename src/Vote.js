import React, { Component } from 'react';
import Question from './Question.js';
import firebase from './firebase.js';


class Vote extends Component {
	constructor() {

		super();
		this.state = {
			count: 0
		}
	}
	handleClick = (event) => {
		event.preventDefault();
		const count = this.state.count;
		count++;
	}
	componentDidMount() {


		this.setState({ count: '' })

	}

	render() {
		const { count } = this.state
		return (
			<div>
				<i class="far fa-plus-square" onClick={() => this.setState({ count: count + 1 })}>Vote:{count}</i>
			</div>
		)
	}
}
export default Vote;