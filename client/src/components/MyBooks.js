import React from 'react'
import axios from 'axios'

function MyBooks() {

    const handleGetMyBooks = () => {

        axios.get('http://localhost:3001/api/my-books')
        .then(response => {
            console.log(response)
        })
    }

    return(
        <div>
            <button onClick={() => handleGetMyBooks()}>Get My Books</button>
        </div>
    )
}

export default MyBooks