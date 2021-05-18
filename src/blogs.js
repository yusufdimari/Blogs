import {useState} from 'react';
import BlogList from './bloglist';

const Blogs = () => {
    const [Blogs, addBlog]= useState([
        {title:'Python by Yusuf', author:"Yusuf Muhammad Dimari", body: "vhjcvdebchbecbdejbjecbe", id:1},
        {title:'React by Mana', author:"Yusuf Muhammad Dimari", body: "vhjcvdebchbecbdejbjecbe", id:2},
        {title:'Javascript by Jafar', author:"Jafar Idris Abbas", body: "vhjcvdebchbecbdejbjecbe", id:3},
    ])

    const yusufblog= Blogs.filter(blog => blog.author==="Yusuf Muhammad Dimari");
    const handleDelete= (id)=>{ 
        const newBlogs=Blogs.filter((blog)=> blog.id != id)
        addBlog(newBlogs)
    }

    return (  
        <div className="blogs">
            <BlogList blogs={Blogs} title="My Blogs" handleDelete={handleDelete} />
            <BlogList blogs={yusufblog} title="Yusuf's Blogs" handleDelete={handleDelete}/>

        </div>
 );
}

export default Blogs;