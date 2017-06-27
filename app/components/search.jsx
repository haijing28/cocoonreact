
/*SEARCH & LOGIN*/


require('./search.css');
import React from 'react'; 

let Search = React.createClass({
	getInitialState: function() {
		return {
			bg: "transparent",
		}
	},

	
	componentDidMount: function() {
		
		window.onscroll = (event) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.9 * (realHeight/142);
			if(optatic <= 0.6 ) {
				this.setState({
					bg: `rgba(255, 255, 255, ${optatic})`,
				})
			}
		}
	},
	render: function() {
		let bColor = this.state.bg ? this.state.bg : 'transprent';
		return (

				// <div id="logo" className="logotm"></div>
			<div id="search" className="pf"  style={{ background: bColor }}>
				<div className="search pr">
					<div className="sl pa">
						<i></i>
					</div>
					<div className="frc pr">
						<span className="searchicon pa"></span>
						<form>
							<input placeholder=" Find more creative projects " type="text"/>
						</form>
					</div>
					
				</div>

				<div className="sub pa">
				<span> Login </span>
				</div>

			</div>
		);
	}
})

module.exports = Search;