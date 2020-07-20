import React from 'react';
import listening from '../Image/girlwithheadphone3.svg'

class HeadCard extends React.Component{
    constructor(props){
        super();
        this.state = {
            start : false
        }

        
    }

    componentDidMount(){
        setInterval(this.setState({ start : true}), 2000)
        
    }
    async handleSubmit(story){
        let data = await fetch(`https://sabc-news-api.herokuapp.com/api//read/${story}`)
        console.log(story.slice())
    }
    render(){

     
                if (this.props.link != '' || this.props.link !== undefined && this.state.start === true){
            return(
                
                <center>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-1">
                            <div className=" main-news col mb-4">
                                <div className="card">
                                    <img width="100%"  src={this.props.picture}></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-success">{this.props.title}</h5>
                                        <p className="card-text">{this.props.description}...      
                                        <a className=" text-success" href={this.props.link}>Read More..</a></p>
                                    </div>
                                <div className="more"> 
                                    <button className="btn btn-outline-success" onClick={() => this.handleSubmit(this.props.link.slice(34))}>Play News</button>
                                </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </center>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

}

export default HeadCard;