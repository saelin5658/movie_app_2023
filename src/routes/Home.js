import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Movie from '../components/Movie';
import'../styles/home.css';


//최상위 컴포먼트를 가져와서 사용한다.
function Home(){
  // state = {
    // isLoading : true,
    // movies:[],
  // }
  const[isLoading,setIsLoading] = useState(true);//setstate에 해당되는 함수를 만들어서 사용
  //속성 속성을변경할때(setstate)사용할이름 = 초기값
  const[movies,setMovies] = useState([]);

  // componentDidMount(){
  //   //주소를 불러오는 시점(영화 api)
  //   // setTimeout(()=>{
  //   //   this.setState({isLoading:false});//6초 뒤에 이즈로딩을 false로 바꿈
  //   // },6000)
  //   this.getMovies();//함수호출
  // }

  useEffect(()=>{
    getMovies();
  },[]);//주소가 불러와지는 시점
  //[]값이 바뀔때마다 실행하는것이 업데이트값(둘다 지원)


  const getMovies = async () => {//async 비동기식
    const {//구조분해할당으로 배열의 안에 movies만 가져오게
      data : {
        data : {
          movies
        
        }
      }
    } =
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //json파일 뒤에 ?를 붙이면 옵션을 붙일수 있음 genre=animation&sort_by=like 장르=옵션,조건(정렬)=좋아요순  사이트에서 정해져 있음
    // console.log(movies);
    // this.setState({
    //   isLoading : false,
    //   movies,//movies : movies, 속성과 속성값이 같으면 하나만 써도
    // })
    setIsLoading(false);//this.setState
    setMovies(movies);
  }


    // const{isLoading,movies} = this.state;//구조분해할당
    return (
      <section className='container'>
        {isLoading ? //삼항연산자 사용
        <div className='loader'>
          <span className='loader_txt'>'Loading....'</span>
        </div>
        :
        <div className='movies'>
          {movies.map((movie,index)=><Movie
          key ={index}
          id ={movie.id}
          year ={movie.year}
          title ={movie.title}
          summary ={movie.summary}
          poster ={movie.medium_cover_image}
          genres ={movie.genres}
          />
          )}
        </div>
        }
      </section>
    )
  
}

export default Home
