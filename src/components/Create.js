import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [author,setAuthor]=useState('chaygo');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    
    const submitFunction = (e) =>{
        e.preventDefault();
        const newBlog={title,description,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{
            
            setIsPending(false);
            setAuthor('chaygo');
            setDescription('');
            setTitle('');
            history.push('/');
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }

    return (
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
                onChange={(e)=>setDescription(e.target.value)}></textarea>
                <label>Blog author :</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="chaygo">Chaygo</option>
                    <option value="morena">Morena</option>
                </select>
               { !isPending && <button >Add blog</button> }
               { isPending && <button >Adding blog ...</button> }
            </form>
           
        </div>
    )
}

export default Create;