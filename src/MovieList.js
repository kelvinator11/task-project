import React from "react";
import "./App.css";



export const MovieList = ({movies}) => {
  return (
    <>
      
      <div className="stock-container">



        {movies.map((movie, key) => {
          return (
            <div key={key}>
              <table>
        <tbody>
          <tr>
            <td>
              <h5>{movie.Name}</h5>
            </td>
            <td>
              <h5>{movie.Rating}</h5>
            </td>
            <td>
              <h4>{movie.Duration}</h4>
            </td>
          </tr>
        </tbody>
      </table>
            </div>
          );
        })}
      </div>
    </>
  );
};




  

