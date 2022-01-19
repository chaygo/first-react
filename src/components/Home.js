import React from 'react'
import Blogs from './Blogs'
import {useState} from 'react'
import useFetch from './useFetch'

 
const Home = () =>{
    const { data : blogs, isPending , error , setData } =useFetch('http://localhost:8000/blogs');

    //const deleteButton = (id)=>{
    //    const newData= blogs.filter((blog) => blog.id !== id );
    //    setData(newData);
    //}
    /*const addButton = () =>{
        let lenblogs=blogs.length;
        let newBlog={
        "id":lenblogs+1,
        "title":"blog1",
        "description":"Blog Description Generator · Write unique description for each page",
        "author":"chaygo" , }
        let newblogs=blogs.concat(newBlog);
        setData(newblogs);
    }
    const [name,setName] = useState ("Aygozel")
    const function1 = ()=>{
        if (name === "Chaygo")
        {
            setName("Aygozel")

        }
        else{
            setName("Chaygo")
        }
    }*/

   
    return(
       <div className="home">
           { error && <div>{error}</div>}
           { isPending  && <div> Loading... </div> }
         { blogs &&
         <Blogs title={"All Blogs"} blogs={blogs} />  }
           
       </div>

       
    )
}

export default Home