import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'//로케이션객체 저장하는 속성 객체처럼 사용
import '../styles/Detail.css'


function Detail() {
  const location = useLocation();
  console.log(location);

  //주소창이 
  const navigate = useNavigate();//
  if(location.state === undefined){//state에 값이 없을 경우(주소창에 임의로 글자만 넣어서 주소를 찾을수 없을 때(전달받은 state가 없다))
    navigate('/');//홈으로 이동 즉 리다이렉트 기능이다(홈컴포넌트로 이동)
  }

  const {genres,id,poster,summary,title,year} = location.state;
  return (
    <div className='detail'>
    <img src={poster} title={title} alt={title} />
    <div className='detail_data'>
      <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
      <h4 className='detail_year'>{year}</h4>
      <ul className='detail_genres'>
        {genres.map((genre,index)=>{
          return(
            <li className='detail_genre' key={index}>{genre}</li>
          )
        })}
      </ul>
      <p className='detail_summary'>{summary.slice(0,180)}...</p>
    </div>
  </div>
  )
}

export default Detail