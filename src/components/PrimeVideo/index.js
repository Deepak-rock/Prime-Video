// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const categoryComedy = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  const categoryAction = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  return (
    <div className="prime-video-app-container">
      <img
        className="banner-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movie-category">Action Movies</h1>
        <MoviesSlider moviesList={categoryAction} />
        <h1 className="movie-category">Comedy Movies</h1>
        <MoviesSlider moviesList={categoryComedy} />
      </div>
    </div>
  )
}
export default PrimeVideo
