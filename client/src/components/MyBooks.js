import React from 'react'
import axios from 'axios'

function MyBooks() {

    const handleGetMyBooks = () => {

        axios.get('http://localhost:3001/api/my-books')
        .then(response => {
        })
    }

    return(
        <div>
            <button>Get My Books</button>
        </div>
    )
}