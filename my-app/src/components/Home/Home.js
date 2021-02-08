import React from 'react';
import '../../assets/css/Home.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/images/descarga.png';



class Home extends React.Component{

  render(){
    return(
    <div className="Home">
      <React.Fragment >
        <h1><span>♥</span><span>M</span><span>A</span><span>S</span><span>♥</span><span>V</span><span>I</span><span>D</span><span>A</span><span>♥</span></h1>
        <Container>
        <Image className="logo" src={logo}/>
        </Container>
      </React.Fragment>
      </div>
    );
  }

}

export default Home;