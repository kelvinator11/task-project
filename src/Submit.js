import React, { useState } from 'react'

function Submit({ movies, setMovies }) {
    

    const [Name, setName] = useState('')
    const [Rating, setRating] = useState("");
    const [Duration, setDuration] = useState("");
    
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (Name === "") {
            return
        }else{
            
            const list = [{Name, Rating, Duration}]

          const newList = 
            list.concat(movies)
          ;

          setMovies(newList);

          setName("");
          setDuration("");
          setRating("");
        }

  
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
          style={{ display: "flex", flexDirection: "column", width: "20%" }}
        >
          <label htmlFor="movie__name">Movie Name</label>
          <input
            id="movie__name"
            type="text"
            value={Name}
            placeholder="Enter Name of Movie"
            onChange={handleChangeName}
            required
          />
          <label htmlFor="movie__Rating">Ratings</label>

          <input
            id="movie__Rating"
            type="number"
            value={Rating}
            placeholder="Enter Movie's Rating"
            onChange={handleChangeRating}
            required
          />

          <label htmlFor="movie__Duration">Duration</label>

          <input
            id="movie__Duration"
            type="time"
            min="00:01"
            value={Duration}
            placeholder="Enter Duration(Time) of Movie"
            onChange={handleChangeDuration}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Submit
