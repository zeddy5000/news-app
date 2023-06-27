import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

const NewsCardItem = ({article,onClick}) => {
  return (
    <div  className='card-box-container'> 
   
      <div className='card-contents' >
    <img className='card-item-image' src={article["urlToImage"]}></img>
    <h1 className='news-title'>{article["title"]}</h1>
    <p onClick={onClick}><Link to={article["url"]} className='card-web-link'>{article["description"]}</Link></p>
      </div>
    </div>
       
    
  )
}

export default NewsCardItem