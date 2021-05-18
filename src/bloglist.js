const  BlogList= ({blogs, title, handleDelete}) => {
    
    return ( 
        <div className='Blog-List'>
            <h2 className='blogtitle'>{title}</h2>
            {blogs.map((blog)=>(
                <div>
                <div className="blogPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>this blog was written by {blog.author}</p>
                </div>
                    <div className='Button'><button onClick={()=>handleDelete(blog.id) }>Delete</button></div>
                    </div>
                )

            )}
        </div>
     );
}
 
export default BlogList;
