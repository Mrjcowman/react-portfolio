import React from 'react'

export default function About() {
    return (<>
        <header className="jumbotron jumbotron-fluid">
            <h1 className="display-4 text-center">Jacob Cowan</h1>
            <p className="lead text-center">A Jake of All Trades</p>
            <hr className="my-4" />
            <div className="d-flex justify-content-center">
                <a className="btn btn-primary btn-lg mx-2" href="https://github.com/mrjcowman" target="_blank" role="button"><i className="fab fa-github"></i> GitHub</a>
                <a className="btn btn-primary btn-lg mx-2" href="https://linkedin.com/in/jacob-cowan" target="_blank" role="button"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a className="btn btn-primary btn-lg mx-2" href="/assets/resume.pdf" target="_blank" role="button"><i className="fas fa-file-pdf"></i> Resume</a>
            </div>

        </header>

        <div className="container text-light">
            <div className="row">
                <main className="col-md-8 bg-smokey rounded-lg m-2 p-5 mb-5">
                    <h2 className="display-4">About Me</h2>
                    <hr className="border-light" />
                    <img src="assets/images/myFace.png" alt="" className="rounded float-left mr-3" style={{maxWidth:"50%"}} />
                    <p>I got my start programming about a dozen years ago when I decided I wanted to make video games with my best friend in 5th grade. Over the next few years, I taught myself the basics of coding and laid down a foundation of thinking like a developer that has carried me through my entire public school career and beyond.</p>
                    <p>In high school, I began programming for my most local <em>FIRST</em>&reg; Robotics Competition team: <a href="https://sites.google.com/auburnsd.org/treadteam3219">TREAD 3219</a>. Falling in love with the competition, I helped found the team at my own high school. That award-winning team is now known as <a href="https://helloworldrobotics.weebly.com/">Hello World 5683</a>. In the years since, I've spent most of my free time mentoring the local middle school robotics teams in the fundamentals of robotic design and programming.</p>
                    <p>While programming is my primary passion, my interests are as varied as can be. I have as much musical experience as I do programming experience, and I love learning about different forms of art and trying to apply that knowledge to everything I do. I find that my versatility is an incredible strength, and I am ready and willing to take on any challenge that comes my way because of it.</p>
                </main>
            </div>
        </div>
        </>
    )
}
