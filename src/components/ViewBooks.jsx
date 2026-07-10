import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewBooks = () => {
    const [libdata, changeData] = useState(
        [

            { "title": "The Alchemist", "author": "Paulo Coelho", "price": "Rs. 399", "avatar": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg?utm_source=chatgpt.com" },
            { "title": "Atomic Habit", "author": "James Clear", "price": "Rs. 599", "avatar": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg?utm_source=chatgpt.com" },
            { "title": "Rich Dad Poor Dad", "author": "Robert T. Kiyosaki", "price": "Rs. 450", "avatar": "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg?utm_source=chatgpt.com" },
            { "title": "Harry Potter and the Philosopher's Stone", "author": "J. K. Rowling", "price": "Rs. 699", "avatar": "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg?utm_source=chatgpt.com" },
            { "title": "The Psychology of Money", "author": "Morgan Housel", "price": "Rs. 549", "avatar": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg?utm_source=chatgpt.com" }

        ]

    )

    return (
        <div>

            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {libdata.map(
                                (value, index) => (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                        <div class="card">
                                            <img src= {value.avatar} height="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">Title: {value.title}</h6>
                                                <h6 class="card-title">Author: {value.author}</h6>
                                                <h6 class="card-title">Price: {value.price}</h6>
                                                <a href="#" class="btn btn-success">Add to cart</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            )}



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewBooks