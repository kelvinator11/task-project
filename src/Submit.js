import React, { useState } from 'react'

function Submit({ movies, setMovies, handleChange }) {
    

    const [Name, setName] = useState('')
    const [Rating, setRating] = useState(null);
    const [Duration, setDuration] = useState(null);
    
    
    function handleSubmit(e) {
        e.preventDefault();
        
         const newList = movies.concat({ Name, Rating, Duration });

        setMovies(newList);
        
        


  
    }

    function handleChangeName(e) {
        setName(e.target.value)
       
    }
      function handleChangeRating(e) {
      
        setRating(e.target.value);
        
    }
      function handleChangeDuration(e) {
       
        setDuration(e.target.value);
      }

    return (
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column",width:'20%' }}
        >
          MovieName ={" "}
          <input type="text" value={Name} onChange={handleChangeName} />
          Rating={" "}
          <input type="number" value={Rating} onChange={handleChangeRating} />
          Duration={" "}
          <input
            type="text "
            value={Duration}
            onChange={handleChangeDuration}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Submit
