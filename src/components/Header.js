import React from 'react'

export default function Header() {
    return (
        <header className="jumbotron jumbotron-fluid">
            <h1 className="display-4 text-center"><span className='bigJ'>J</span>acob Cowan</h1>
            <p className="lead text-center">A Jake of All Trades</p>
            <hr className="my-4" />
            <div className="d-flex justify-content-center">
                <a className="btn btn-primary btn-lg mx-2" href="https://github.com/mrjcowman" target="_blank" rel="noreferrer" role="button"><i className="fab fa-github"></i> GitHub</a>
                <a className="btn btn-primary btn-lg mx-2" href="https://linkedin.com/in/jacob-cowan" target="_blank" rel="noreferrer" role="button"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a className="btn btn-primary btn-lg mx-2" href="/assets/resume.pdf" target="_blank" role="button"><i className="fas fa-file-pdf"></i> Resume</a>
            </div>

        </header>
    )
}
