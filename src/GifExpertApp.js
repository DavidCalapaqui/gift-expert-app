import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = ()=>{

    
    const [categories, setCategories] = useState(['doge' ]);

    //const handleAdd = ()=>{
    //    //setCategories(['X-Men' ,...categories ]);
    //    setCategories(cats => [...cats, 'Cat Man']);
    //
    //}
    
    return(

        <>
         <h2>APP DE GIFS :V</h2>
         <AddCategory setCategories={setCategories}/>
         <hr />

         
        <ol>
           {
               categories.map((category)=>(
                   <GifGrid 
                    
                   key={category}
                   category={ category }
                    
                   />
               ))
           }
        </ol>
         
        </>
    )
   
}

export default GifExpertApp;