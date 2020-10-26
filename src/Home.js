import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div class='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            
                <div className="home__row">
                <Product
                 id="12321341" 
                 title="TP-LINK Archer C7 AC1750 Router Inalámbrico de Banda Dual Gigabit AC Router WiFi, 1 Puerto USB, 450Mbps a 2.4GHz, 1300Mbps a 5Ghz, IPv6, Red de Invitados"
                 price={1387.00}
                 image="https://m.media-amazon.com/images/I/415vAIn9uEL._AC_SY200_.jpg" 
                 rating={5} />
                 <Product
                 id="49538094" 
                 title="HyperX Cloud Stinger - Audífonos para gaming – Cómodas almohadillas de memory foam, Micrófono con cancelación de ruido que al girar se pone en modo mudo, Compatible con PC, Xbox One, PS4, Nintendo Switch y dispositivos móviles HX-HSCS-BK/NA"
                 price={239.0}
                 image="https://images-na.ssl-images-amazon.com/images/I/51kxIEmO%2BZL._AC_UL200_SR200,200_.jpg" 
                 rating={4} />
                
                </div>

                <div className="home__row">
                <Product
                 id="49538342" 
                 title="Cyberpunk 2077 - Playstation 4 - Standard Edition - Standard Edition - PlayStation 4"
                 price={1349.10}
                 image="https://images-na.ssl-images-amazon.com/images/I/81E5c8rXqyL._AC_UL200_SR200,200_.jpg" 
                 rating={5} />
                <Product
                 id="23423423" 
                 title="Termometro infrarrojo de Grado Medico Berrcom JXB-178"
                 price={448.00}
                 image="https://m.media-amazon.com/images/I/51GCGTDyvBL._AC_UL320_.jpg" 
                 rating={5} />
                <Product
                 id="2346663" 
                 title="Cracking the Coding Interview: 189 Programming Questions and Solutions (189 Preguntas y soluciones de programación)"
                 price={695.00}
                 image="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UL320_.jpg" 
                 rating={5} />
                </div>

                <div className="home__row">
                <Product
                 id="2876663" 
                 title="GoPro HERO9 Black - Cámara de acción impermeable con visualización LCD frontal y pantallas traseras táctiles, video 5K60 Ultra HD, fotos de 20 MP, transmisión en vivo 1080p"
                 price={11499.00}
                 image="https://images-na.ssl-images-amazon.com/images/G/33/MX-hq/2020/img/Camera/XCM_CUTTLE_1279011_1427462_MX_3454287_379x304_1X_es_MX._SY304_CB418928203_.jpg" 
                 rating={5} />
                </div>
                         
            
            </div>
            
        </div>
    )
}

export default Home
