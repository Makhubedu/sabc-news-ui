import React from 'react';
import Header from './components/Header'
import BodyCards from './components/BodyCards'
import HeadCard from './components/HeadCard'
import Loader from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        titles : [],
        images : [],
        descriptions : [],
        links : [],
        loading : true,
        title : '',
        image : '',
        description : '',
        link : '',
      }

      this.componentDidMount = this.componentDidMount.bind(this)
    }

    async componentDidMount(){
      await fetch("https://sabc-news-api.herokuapp.com/api/body/category/south-africa")
      .then(data => data.json())
      .then(jdata =>{
          jdata.forEach( data => (
          this.setState({
            titles: [...this.state.titles,data.body_title],
            images : [...this.state.images,data.them_images],
            descriptions: [...this.state.descriptions,data.summary],
            links : [...this.state.links,data.links],
            loading : false
          })
        ))
      })
      .catch( err =>{
        console.error(err.message)
      })

      await fetch("https://sabc-news-api.herokuapp.com/api/header/category/south-africa")
      .then( data => data.json())
      .then( jdata => {

        jdata.forEach ( content =>(
          this.setState(  {
          title : content.title,
          description : content.description,
          image : content.img,
          link : content.image_caption
        })

        ))
        
      })

      


    }
    


    

    render(){
      if (this.state.loading){
         
          var load = <center className="sweet-loading">
            <Loader
              type="Rings"
              color="#0062ff"
              height={100}
              width={100}
            />
      </center>
      } 
    
    return (
      <div className="App">

        <Header />
        {load}
        <HeadCard
          picture= {this.state.image} 
          description={this.state.description}
          link = {this.state.link}
          title ={this.state.title}  
          />
        <BodyCards 
        pictures= {this.state.images} 
        descriptions={this.state.descriptions}
        links = {this.state.links}
        titles ={this.state.titles}  
        />
      </div>
    );
  }
}

export default App;
