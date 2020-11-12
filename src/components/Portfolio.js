import React from 'react'

// TODO: dynamically generate cards
export default function Portfolio() {
    return (
        <div className="container text-light">
        <div className="row">
            <main className="col-md-8 bg-smokey border-dark border rounded-lg m-2 p-5 mb-5">
                <div className="row">
                    <h2 className="display-4">Portfolio</h2>
                </div>
                <hr className="border-light" />
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="my-2 card">
                            <img src="assets/images/cards/moodSingLogoWide.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">moodSing</h3>
                                <p className="card-text">A music recommendation app that suggests music suited to the weather around the user as well as their current mood and preferred genre.</p>
                                <a href="https://mrjcowman.github.io/moodSing" target="_blank" className="btn btn-primary stretched-link">Have a Listen</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="my-2 card">
                            <img src="assets/images/cards/alityLogo.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Ality</h3>
                                <p className="card-text">A flexible statistic-tracking and charting tool that can be tailored by the user to fit any situation from competitve sports to parenting to game analysis.</p>
                                <a href="https://ality-stats.herokuapp.com/" target="_blank" className="btn btn-primary stretched-link">Track Your Ality</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <div className="my-2 card">
                            <img src="assets/images/cards/codeQuiz.png" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Coding Quiz</h3>
                                <p className="card-text">A quick timed quiz to test javascript fundamentals! Faster completion means a higher score.</p>
                                <a href="https://mrjcowman.github.io/codingQuiz" target="_blank" className="btn btn-primary stretched-link">Test your Skills</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p className="lead">With more to come!</p>
            </main>
        </div>

    </div>
    )
}
