import React from 'react';
import headshot from "../assets/aboutmephoto.png";


function BioCard () {
    return (
        <section className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- about me -</h3>
                </div>
            </div>
            <hr/>
            <div className="row">
            <div id="aboutme" className="col-sm-12">
                <img id="headshot" src={headshot} alt="headshot"/>
                <h3>Hello World <i class="fas fa-globe-americas"></i> ! </h3>
                <p> New coder on the block here.</p>
                <p>I am currently enrolled in a Full Stack Web Development Program through Columbia University</p>
                <p>I enjoy all things creative and I'm loving front end development.</p>
                <p>I'm excited for this journey and to see where it takes me!!!</p>
                <p>Check out my portfolio page for some of the work I have done... hover over each project to find the link bringing you straight to the source.</p>          
            </div>
            </div>  
        </section>
    )
};

export default BioCard;




