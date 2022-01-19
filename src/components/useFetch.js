import { useState , useEffect } from 'react' ;


const useFetch = (url) => {
    const [error,setError] = useState(null)
    const [data,setData]=useState(null)
    const [isPending,setisPending]=useState(true)
    useEffect(() => {
            const abortCont= new AbortController();
            fetch(url, {signal:abortCont.signal})
            .then(res => { 
               
                if (!res.ok)
                {
                    throw Error("Couldnt fetch the data!  ");
                }
                return res.json();})
            .then(data => {
               
                setData(data);
                setisPending(false);
                setError(null)
            })
            .catch((error)=>{
                if (error.name === 'AbortError')
                {
                    console.log('fetch error');
                }
                else {
                    setError(error.message);
                    setisPending(false);
                }
            })
    
     return () => abortCont.abort();
    } ,[url] );
return { data , isPending , error  , setData}
}

export default useFetch;