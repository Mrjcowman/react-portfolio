import React from 'react'

export default function Contact() {
    return (
        <div className="container text-light">
            <div className="row">
                <main className="col-md-8 bg-smokey rounded-lg m-2 p-5 mb-5">
                    <h2 className="display-4">Contact</h2>
                    <hr className="border-light" />
                    <form action="mailto:jacobjhcowan@gmail.com" method="post" enctype="text/plain">
                        <div className="form-group">
                            <label for="inputName">Name</label>
                            <input type="text" className="form-control bg-dark text-light" id="inputName" name="name" />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Email Address</label>
                            <input type="email" className="form-control bg-dark text-light" id="inputEmail" name="mail" />
                        </div>
                        <div className="form-group">
                            <label for="inputMessage">Message</label>
                            <textarea className="form-control bg-dark text-light" id="inputMessage" rows="5" name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-light">Submit</button>
                    </form>
                </main>
            </div>
        </div>
    )
}
