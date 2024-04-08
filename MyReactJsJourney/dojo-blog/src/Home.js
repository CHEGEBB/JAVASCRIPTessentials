import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });
    
    return ( 
        <div className="home">
        <div className="blog-preview">
       <BlogList blogs={blogs}  title="All Blogs." handleDelete={handleDelete}/>
       <BlogList blogs={blogs.filter((blog) => blog.author ==='mario') }  title="Mario's Blogs."/>
        </div>

        </div>
     );
}
 
export default Home;