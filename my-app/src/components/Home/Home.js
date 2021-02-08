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
        <div className="Descripcion">
        <p>Bienvenido a Mas Vida. Esta aplicación web fue creada con fines académicos en la Universidad Nacional Amazónica de Madre de Dios por 
        estudiantes del curso de Desarrollo de Aplicaciones Web.</p>
        <p>El obejtivo de este proyecto web es el de ayudar a la poblacion en general de la ciudad de Puerto Maldonado en el cuidado de su Salud
         al proporcionarles una plataforma virtual en el cual pueden realizar consultas sobre su estado actual de salud en general y asi 
         pre-diagnosticar posibles enfermedades que podrian poner en peligroso su salud.</p>
         <p>Cabe destacar que los resultados dados por este medio virtual no son supervisados por ningun especialista por lo cual no reemplaza
          en ninguna condicion el diagnóstico de un medico certificado. Se exorta a todos los usuarios asistir a un centro médido de ser posible. Gracias.</p>
        </div>
      </React.Fragment>
      </div>
    );
  }

}

export default Home;