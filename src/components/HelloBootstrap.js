import React from "react";
import "./HelloBootstrap.css";
import GoogleLogin from 'react-google-login';

  // build an array of url
  var imageUrl = [
    "shower",
    "potty",
    "brushyourteeth",
    "getdressed",
    "books",
    "juice",
    "snack",
    "thirsty",
    "toys",
    "sleep",
    "kindle",
  ];

class HelloBootstrap extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {user: null}
 
   this.responseGoogle = this.responseGoogle.bind(this);
   this.cardClick = this.cardClick.bind(this);
  }

  cardClick(e){
    console.log(e.target.name);
    window.responsiveVoice.speak(e.target.name);

    this.setState({
      currentImage : e.target.name
    })
  }

  responseGoogle = (response) => {
    console.log(response);
    // if user has a googleID fetch cards else create new entry
    this.setState({
      user : response.profileObj
    })
  }
  
  render(){
   if(this.state.user === null){
     //Google Sign In
     return(
      <GoogleLogin
    clientId="201772841702-gaeka3q6ia6biin69479jcd2ig971hro.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
  />
     )
   }else{
    return(
      <div>
      <div className="container">

        {/* Begin NavBar */}
        <nav className="navbar">
            <ul>
              <li className="clickygame">
              <a href="/">Ray's Choice Board</a>
              </li>
              
              </ul>
        </nav>

        {/* End NavBar */}

          <div className="jumbotron">
          <h1> COMMUNICATE WITHOUT WORDS</h1>
        </div> 

        {/* End jumbotron */}

    {/* name of my react component */}
      { imageUrl.map(x => <ImageCard key={x.id} image={x} parentClick={this.cardClick} />) }   
          
      </div>
      </div>

    )}
    }

};

function ImageCard(props){
  var image = {}
  if (props.image === "washyourhands") {
    image = <img name={props.image} src={"./images/" + props.image  + ".gif"}/>
  }
  else {
    image = <img name={props.image} src={"./images/" + props.image  + ".jpg"}/>
  }
  return (

  <div className="card  mb-3" style={{'maxWidth': '10rem', 'maxHeight': '10rem'}}>
  
  <div className="card-body" onClick={props.parentClick}>
  {/* <img name={props.image} src={"./images/" + props.image  + ".jpg"}/> */}
  {image}
  </div>
  
</div>
)}

// blank comment



export default HelloBootstrap;



