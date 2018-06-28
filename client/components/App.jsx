import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Posts from './Posts.jsx'
import Other from './Other.jsx'
import Recent from './Recent.jsx'

const headerData = require('../../data/header')
const footerData = require('../../data/footer')
const postsData = require('../../data/posts')
const otherBlogs = require('../../data/other-blogs')
const recentEntries = require('../../data/recent-entries')

const App = () => {
  return (
    <div className="container">
      <Header title={headerData.title} link={headerData.link}/>
      <section className="content">
        <div className="columns">
          <div className="other">
            <Other other={otherBlogs}/>
          </div>
          <div className="posts">
            <Posts posts={postsData}/>
          </div>
          <div className="recent">
            <Recent entries={recentEntries}/>
          </div>
        </div>
      </section>
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App
