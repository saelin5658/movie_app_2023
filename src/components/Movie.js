import React from 'react';
import PropTypes from 'prop-types';
import'../styles/Movie.css'
import { Link } from 'react-router-dom';
function Movie({genres,id,poster,summary,title,year}) {
  //const{genres,id,poster,summary,title,year}=props;
  //state={{genres,id,poster,summary,title,year}}링크를 state객체를 그대로 전달(주소창을 통해서 전달)
  return (
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
      <img src={poster} title={title} alt={title} />
      <div className='movie_data'>
        <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
          {genres.map((genre,index)=>{
            return(
              <li className='movie_genre' key={index}>{genre}</li>
            )
          })}
        </ul>
        <p className='movie_summary'>{summary.slice(0,180)}...</p>
      </div>
      </Link>
    </div>
  )
}
//npm install prop-types
Movie.propTypes={
  genres:PropTypes.arrayOf(PropTypes.string.isRequired),//문자열을 원소로 가지고 있는 배열
  id:PropTypes.number.isRequired,
  poster:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
}

export default Movie