import React, { Component } from 'react'

class Movies extends Component {
	render() {
      	return (
          <div>
          {this.props.movies.map(
          	(movie) => movie.id 
          )}	
          </div>
		)
    }
}

export default Movies