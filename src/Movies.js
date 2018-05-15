import React, { Component } from 'react'

class Movies extends Component {
	render() {
      	const movies = this.props.movies
      	const movieIds = Object.keys(movies)
        const profiles = this.props.profiles
        const profileIds = Object.keys(profiles)
        const favoriteMovieIDs = profiles.map(
        	(profile) => profile.favoriteMovieID
        )
        const users = this.props.users
        const userIds = Object.keys(users)
        
        					//{profiles.filter((profile) => profile.favoriteMovieID === {movieId})}
//(profileId) => <div key={profileId}>{profiles[`${profileId}`].favoriteMovieID}</div>
        
        console.log(favoriteMovieIDs)
        //console.log(profileIds.filter((profileId) => profileId > 1))
      	
        return (
          	<div>
          		{movieIds.map((movieId) => <div key={movieId}>
          			<h1> {movies[`${movieId}`].name}</h1>
					<h2>{profileIds.filter((profileId) => profiles[profileId].favoriteMovieID === movieId).length === 0 ? "No one liked this movie!" : "Liked By:"}</h2>
					{profileIds.filter((profileId) => profiles[profileId].favoriteMovieID === movieId).map(
						(filteredProfileId) => userIds.filter((userId) => userId === profiles[filteredProfileId].userID).map((userId) => <div key={userId}>{users[`${userId}`].name}</div>)
					)} 
          		</div>)}
          	</div>
		)
    }
}

export default Movies