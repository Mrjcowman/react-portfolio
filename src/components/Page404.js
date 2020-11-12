import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <div className="container text-light">
            <div className="row">
                <main className="col-md-8 bg-smokey rounded-lg m-2 p-5 mb-5">
                    <h2 className="display-4">Error 404: Page Not Found</h2>
                    <hr className="border-light" />
                    <p>I'm sorry, I can't find the page you're looking for!</p>
                    <p>Try <Link to="/">going back home</Link> to find what you were trying to get.</p>
                </main>
            </div>
        </div>
    )
}
