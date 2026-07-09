import React from 'react'
import NavigationBar from './NavigationBar'

const ViewBooks = () => {
    return (
        <div>

            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src="https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg?utm_source=chatgpt.com" height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">Title: The Alchemist</h6>
                                        <h6 class="card-title">Author: Paulo Coelho</h6>
                                        <h6 class="card-title">Price: 399</h6>
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src="https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg?utm_source=chatgpt.com" height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">Title: Atomic Habits</h6>
                                        <h6 class="card-title">Author: James Clear</h6>
                                        <h6 class="card-title">Price: 599</h6>
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src="https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg?utm_source=chatgpt.com" height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">Title: Rich Dad Poor Dad</h6>
                                        <h6 class="card-title">Author: Robert T. Kiyosaki</h6>
                                        <h6 class="card-title">Price: 450</h6>
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src="https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg?utm_source=chatgpt.com" height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">Title: Harry Potter and the Philosopher's Stone</h6>
                                        <h6 class="card-title">Author: J. K. Rowling</h6>
                                        <h6 class="card-title">Price: 699</h6>
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src="https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg?utm_source=chatgpt.com" height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">Title: The Psychology of Money</h6>
                                        <h6 class="card-title">Author: Morgan Housel</h6>
                                        <h6 class="card-title">Price: 549</h6>
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewBooks