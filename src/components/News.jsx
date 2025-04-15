import React, { useState, useEffect } from 'react'
import noImg from '../assets/images/no-img.png'
import axios from 'axios'

import './News.css'

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology', 'world', 'nation']

const News = () => {
  const [headline, setHeadline] = useState(null)
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('general')

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
      const response = await axios.get(url)
      
      const fetchedNews = response.data.articles

      setHeadline(fetchedNews[0])
      setNews(fetchedNews.slice(1, 7))
    }

    fetchNews()
  }, [category])

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setCategory(category)
  }

  return (
    <div className='news-app'>
      <div className="news-header">
        <hi className="logo">News App</hi>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <hi className="nav-heading">Categories</hi>
          <div className="categories">
            {categories.map((category) => (
              <a href='' onClick={(e)=>handleCategoryClick(e, category)} className='nav-link' key={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          {headline && ( 
            <div className="headline">
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">
                {headline.title}
              </h2>
            </div>
          )}
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved.
            By Choccy
          </p>
      </footer>
    </div>
  )
}

export default News