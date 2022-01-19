import { useParams , useHistory , Link } from "react-router-dom"

import useFetch from "./useFetch";

const BlogDetail = () =>{
    const  { id } =useParams();
    const { data : blog, isPending , error  , setData} = useFetch('http://localhost:8000/blogs/'+id)
    const history=useHistory();
    const deleteButton = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }
    return (

        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>Couldnt fetch the data cause of error !</div>}
            { blog && 
            <article>
                <h2>{blog.title}</h2>
                <p> Written by : {blog.author}</p>
                <div>
                    {blog.description}
                </div>
                <button onClick={deleteButton}>Delete</button>
                <button style={{marginLeft:'10px'}}>
                     <Link to={`/edit/${id}`}
                     style={{color:'#fff',textDecoration:'none'}}> Edit Blog </Link>
                </button>
            </article>
            }
        </div>
    )
} 


export default BlogDetail