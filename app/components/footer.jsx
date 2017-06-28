
require('./footer.css');
let jsonp = require('../util/jsonp.js');

import React from 'react'; 

let footer = React.createClass({
	getInitialState: function() {
        return {
        	footers: [],
        };
 	},

 	componentDidMount: function() {
 		jsonp(this.props.source, "", "callback", (data) => {
 			if(data.status) {
 				if(this.isMounted()) {
 					this.setState({
 						footers: data.data,
 					})
 				}
 			}else {
 				alert(data.msg);
 			}
 		});
 	},
 	
	render: function() {
		let countId = 0;
		return (
			<div className="footer">
				<ul>
					{
						this.state.footers.map((footer) => {
							return <li key={ "footer" + countId++ }>
										<a href={ footer.url }>
											<div className="footer_icon">
												<img src={ footer.icon } alt=""/>
											</div>
											<span>{ footer.title } ©Cocoonsprout 2017</span>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
})

module.exports = footer;