"use strict";
let React = require('react');


module.exports = React.createClass({
	 
	
	getInitialState(){
		return  {mode: 'commits', commits: [], forks: [], pulls: []};
	},
	
	selectMode(mode) {
		this.setState({ mode });
	},
    render(){
        return (
            <section>
				<h4>Dane z urzedu</h4>
				<button onClick={this.selectMode.bind(this, 'forks')} ref="forks">
        Show Forks
    </button>
			</section>
        )
    }
})