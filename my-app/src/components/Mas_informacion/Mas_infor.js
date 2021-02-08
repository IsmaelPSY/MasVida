import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../../assets/css/Mas_infor.css';
import logo1 from '../../assets/images/Primero.jpg';
import logo2 from '../../assets/images/Segundo.jpeg';
import logo3 from '../../assets/images/Tercero.jpg';

class Mas_info extends React.Component{

  render(){
    return(
    <div className="Mas_info">
      <section class="MasInformacion">
            <div class="Noticias">
            <Container>
                <Image className="logo1" src={logo1}/>
            </Container>
                <div class="contenido">
                    <p>INS DETECTÓ LA PRESENCIA DE LA VARIANTE BRASILEÑA EN LORETO, HUÁNUCO Y LIMA</p>
                    <a href="https://www.diariomedico.pe/?p=15433">Mas Información</a>    
                </div>
            </div>

            <div class="Noticias">
            <Container>
                <Image className="logo2" src={logo2}/>
            </Container>
              <div class="contenido">
                    <p>INKAFARMA Y MIFARMA CONGELAN PRECIOS DE MEDICAMENTOS PARA COVID-19</p>
                    <a href="https://www.diariomedico.pe/?p=15422">Mas Información</a>    
                </div>
            </div>

            <div class="Noticias">
            <Container>
                <Image className="logo3" src={logo3}/>
            </Container>
                <div class="contenido">
                    <p>Vacuna COVID-19 llegó al Perú: últimas noticias tras arribo de las dosis de Sinopharm al país</p>
                    <a href="https://elcomercio.pe/peru/llegada-vacuna-covid-19-al-peru-en-vivo-sigue-el-minuto-a-minuto-del-arribo-del-primer-lote-de-vacunas-chinas-sinopharm-al-pais-en-directo-online-coronavirus-sagasti-minsa-pandemia-china-air-france-noticia/">Mas Información</a>    
                </div>
            </div>
        </section>
    </div>
    );
  }

}

export default Mas_info;