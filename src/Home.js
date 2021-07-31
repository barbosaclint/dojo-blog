import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

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