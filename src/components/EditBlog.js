import { useParams , useHistory } from "react-router-dom";
import { useState , useEffect } from 'react'
import useFetch  from "./useFetch";
const EditBlog = () => {
    const {id} =useParams();
    const { data : blog, isPending , error , setData} = useFetch('http://localhost:8000/blogs/'+id)
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [author,setAuthor]=useState('');
    const [wait,setWait]=useState(false);
    const [blogData, setBlogData] = useState({
        title: "",
        author: "",
        description: "",
        isLoading: true
    })
    const history=useHistory(); 


    const submitFunction = (e) => {
        e.preventDefault();
        const newBlog ={ title, description,author};
        setWait(true);
        fetch('http://localhost:8000/blogs/'+id,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(newBlog),
        }).then(()=>{
            setWait(false);
            history.go(-1);
        })

    }
    useEffect(()=>{
        if (!isPending)
        {
            setTitle(blog.title);
            setDescription(blog.description);
            setAuthor(blog.author);
        }
       
    })
    return (
        <div>
          
            { error && <div>Error occured </div>}
            { isPending && <div>Loading...</div>}
            { blog && 
             <div className="create">
             <form onSubmit={submitFunction}>
                 <label>Blog title:</label>
                 <input 
                     type="text"
                     value={title}
                     onChange={(e)=>setTitle(e.target.value)}
                     required />
                 <label>Blog description:</label>
                 <textarea required 
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 ></textarea>
                 <label>Blog author :</label>
                 <select value={author}
                 onChange={(e)=>setAuthor(e.target.value)}
                 >
                     <option value="chaygo">Chaygo</option>
                     <option value="morena">Morena</option>
                 </select>
                { !wait && <button >Edit blog</button> }
                { wait && <button >Editing blog ...</button> }
             </form>
            
         </div>
            }
        </div>
    )
}
export default EditBlog;