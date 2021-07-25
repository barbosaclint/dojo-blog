import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }
    // ])

    const [blogs, setBlogs] = useState(null);

    useEffect ( () => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setBlogs(data)
        })
    }, []) 


    return (    
        <div className = "home">
            {/* may blogs && kasi habang di pa nagloload hindi mag eerror */}
           { blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
        </div>
      );
}
 
 export default Home;       