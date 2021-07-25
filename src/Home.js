import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }
    // ])

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect ( () => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch')
                }   
                return res.json()             
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, []) 


    return (    
        <div className = "home">
            { error && <div>{ error } </div> }

           {/* may blogs && kasi habang di pa nagloload hindi mag eerror */}
           { isPending && <div> Loading ....... </div> } {/* pang Loading */}
           { blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
        </div>
      );
}
 
 export default Home;       