import logo from './logo.svg';
import './App.css'
import { Component, useEffect } from 'react'
import picture from './Assets/mypics.png.jpg'


// className
class App extends Component {
  state = {
    show:"false"

  }

  person = {
    Name : "Busari Adam.B",
    profession: "Web Developer",
    Bio: "I am a web developer with great knowledge in front-end and back-end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer and to contribute to the technology industry, I am dedicated to perfecting my craft by learning from more seasoned developers, and continously learning all i can about wed development."
    

  }


// Rendering  the Component
  render() {
    var toggle = e => {
      this.setState({show:!this.state.show})
    }
    const checkIt = this.state.show;



    // Return
    return(
      <>
        <center>
        <button className='Btn' onClick={toggle}>{checkIt ? "Hide Profile" : "Show Profile"}</button>
        </center>
      <div className='centralized'>
      <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", backgroundColor:"beige"}}>
      <div style={{width:"500px", backgroundColor:"white"}} >
      </div>


        {
          checkIt && (<>
          <center> 
          <img src={picture}
          alt="phot"
          style={{textAlign:"center", width:"40%", borderRadius:"40px", borderStyle:"inset"}} />
          </center>
          {this.person.name}
          <h2>{this.person.profession}</h2> 
          <p className='biop'><span className='bio'>Bio:</span><br/>{this.person.Bio}</p>
          </>)
        }
      </div>
      </div>
      </>
    )
  }
}

export default App;