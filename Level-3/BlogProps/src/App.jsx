import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import BlogPost from "./BlogPost"
import Footer from "./Footer"
import data from "./data"




export default function App() {

  const main = data.map((item) => {
    return <BlogPost key={item.title} {...item} />;
  });
    

  return (
    <div>
      <Header />
      <BlogList />
        {main}
      <Footer />
    </div>
    
  )
}

