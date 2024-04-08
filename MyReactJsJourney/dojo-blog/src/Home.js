import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    });
    
    return ( 
        <div className="home">
        <div className="blog-preview">
       {blogs && <BlogList blogs={blogs}  title="All Blogs." />}
        </div>

        </div>
     );
}
 
export default Home;