import { useParams , useHistory } from "react-router-dom";
import { useState , useEffect } from 'react'
import {api} from './api'

const EditBlog = () => {
    const {id} =useParams();
    const [wait,setWait]=useState(false);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [blogData, setBlogData] = useState({
        title: "",
        author: "",
        description: "",
    })
    const history=useHistory(); 

    useEffect(() => {
        api.get(`blogs/${id}`).then(res => {
            setBlogData({
                title: res.data.title,
                description: res.data.description,
                author: res.data.author,
            })
            setLoading(false)
            setError(false)
        }).catch(e => {
            setError(true)
            console.log(e)
        })
    }, [])

const handleChange = (event) => {
    setBlogData({...blogData, [event.target.name]: event.target.value})
}

    const submitFunction = (e) => {
        e.preventDefault();
        setWait(true);
        api.post(`blogs/${id}`, {blogData}).then(()=>{
            setWait(false);
            history.go(-1);
        })

    }
    
    return (
        <div>
          
            { error && <div>Error occured </div>}
            { loading && <div>Loading...</div>}
            { !loading && 
             <div className="create">
             <form onSubmit={submitFunction}
             onChange={handleChange}
             >
                
                 <label>Blog title:</label>
                 <input 
                     type="text"
                     name="title"
                     value={blogData.title}
                     required />
                 <label>Blog description:</label>
                 <textarea required 
                 value={blogData.description}
                 name="description"
                 ></textarea>
                 <label>Blog author :</label>
                 <select value={blogData.author}
                 name="author"
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