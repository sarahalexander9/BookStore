import React from 'react'
import axios from 'axios';


function Books(props) {
  return (
    <div>
      <div>
          <form>
          <label style={{color: "white"}}>Title</label>
          <input type='text' id='title1'></input>
          <label style={{color: "white"}}>Description</label>
          <input type='text' id="descrip1"></input>
          <button className="addBook" onClick={() => {
          if(document.getElementById("title1").value === "") {
            alert("Make sure you at least enter a title!");
            return
          }
           var body = {
            title: document.getElementById("title1").value,
            description: document.getElementById("descrip1").value
           }
           axios.post("http://localhost:3000/api/v1/books/", body)
            }}>Add Book</button>
          </form>
        </div>
        <table style={{
          display: 'grid',
          alignContent:'center',
          justifyContent: 'center'
        }}>
        <div>
          {props.books.map((book) => {
            return( 
              <>
            <div key={book.id}>
            <tr>
             
            <th style={{
               color: "#bd8c7d",
               paddingRight: "60px"
            }}>Title</th>
            <td style={{
              color:"white",
            }}>{book.title}</td>
            </tr>
            <tr>
            <th th style={{
               color: "#bd8c7d",
               paddingRight: "60px"
            }}>Description</th>
            <td style={{
              color:"white",
            }}>{book.description}</td>
              </tr>
              <p style={{color: "#49494b"}}>Added on {book.created_at.substring(5,10)} </p>
            <button className='deleteButton' onClick={()=> {
              axios.delete("http://localhost:3000/api/v1/books/".concat(book.id));
              window.location.reload();
              }}
              >delete</button><br></br><br></br>
            </div>
            </>);
        })}
        </div>
        </table>
        <br></br><br></br>
    </div>
  )
}

export default Books;