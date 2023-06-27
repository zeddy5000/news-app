import React from 'react'
import NewsCardItem from './NewsCardItem'
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../App.css'



const NewsCardBox = () => {
  const [articles,setArticles] = useState([])
  const [query,setQuery] = useState("")
  const url = `https://newsapi.org/v2/everything?q=${query}from=2023-05-25&pageSize=30&language=en&sortBy=publishedAt&apiKey=9d7663d53aac4459b71eb94be5650264`

  const getNews = async() =>{
    var result = await axios.get(url)
    setArticles(result.data.articles);
  }

  useEffect(()=>{
    getNews(); 
  },[])

  const onSubmit=(e)=>{
    console.log('search')
   e.preventDefault();
    getNews();
  }

  return (
    <div className='body-container'>
      <div>
        <form className='form-items'  onSubmit={onSubmit}>
          <input className='search-bar-input' placeholder='Search' type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
          <input type='submit' value='Search' className='search-btn'></input>
        </form>
      </div>
      <div className='card-item-container'>
      {articles.map((article)=>(<NewsCardItem key={article.id} article={article} />))}
    </div>
    </div>
    
  )
}

export default NewsCardBox