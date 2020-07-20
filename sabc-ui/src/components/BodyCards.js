import React from 'react'
import Speech from 'react-speech';

class BodyCards extends React.Component{
    constructor(props){
        super()
        this.state = {
            message : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }




    async handleSubmit(story){
        var message
        await fetch(`https://sabc-news-api.herokuapp.com/api/read/${story}`)
        .then( data => data.json())
        .then( jdata => {
            jdata.forEach( text =>{
                document.querySelectorAll('.play')
                .forEach (b =>{
                    b.style.display = "none"

                })
                document.querySelectorAll('.resume')
                .forEach (b =>{
                    b.style.display = "block"

                })
            var msg = new SpeechSynthesisUtterance()
            msg.text = text.news
       
            window.speechSynthesis.speak(msg) 
            document.querySelectorAll('.pause')
            .forEach ( pause =>{
                pause.addEventListener('click', function(){
                    window.speechSynthesis.pause(msg)
                })

            })
            
            const s = document.querySelectorAll('.stop')
            s.forEach( stop =>{
                stop.addEventListener('click', function(){
                    window.speechSynthesis.cancel(msg)
                })
            })
            
            document.querySelectorAll('.resume')
            .forEach( resume => {
                resume.addEventListener('click', function(){
                window.speechSynthesis.resume(msg)
                })
            })

            s.forEach( c =>{
                c.addEventListener('click', function(){
                    document.querySelectorAll('.play')
                    .forEach( p =>{
                        p.style.display = "block"
                    })

                })
            })
            s.forEach( c =>{
                c.addEventListener('click', function(){
                    document.querySelectorAll('.resume')
                    .forEach( p =>{
                        p.style.display = "none"
                    })

                })
            })
            
            
    
            })
            

        } )
 
    }

    render(){

        let card = this.props.links.map( (a ,i)=>(
                        <div className="col mb-4">
                            <div  className="card">
                            <img width="100%" height="200" src={this.props.pictures[i]}></img>
                            <div className="card-body">
                                <h5 v className="card-title text-success">{this.props.titles[i]}</h5>
                                <p className="card-text">{this.props.descriptions[i].slice(0,70)}...      
                                <a  className=" text-success" href={a}>Read More..</a></p>
                            </div>
                            <div className="more">
                               <button className="btn btn-success resume">Resume</button>
                                <button  className="btn btn-success play" onClick={() => this.handleSubmit(a.slice(34))}>Play News</button>
                                <button className="btn btn-primary pause">Pause</button>
                                <button className="btn btn-danger stop">Stop</button>
                            </div>
                            </div>
                        </div>
                     
        ))

        return (
            <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-4">
                        
                        {card}
                        </div>
                        </div>
        )
    }

}
export default BodyCards