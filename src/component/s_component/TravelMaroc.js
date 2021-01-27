import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "../../Layout";
import Maroc003 from '../../images/Travel/Maroc/MAROC-003.jpg'
import Maroc004 from '../../images/Travel/Maroc/MAROC-004.jpg'
import Maroc005 from '../../images/Travel/Maroc/MAROC-005.jpg'
import Maroc009 from '../../images/Travel/Maroc/MAROC-009.jpg'
import Maroc012 from '../../images/Travel/Maroc/MAROC-012.jpg'
import Maroc013 from '../../images/Travel/Maroc/MAROC-013.jpg'
import Maroc0131 from '../../images/Travel/Maroc/MAROC-013 1.jpg'
import Maroc021 from '../../images/Travel/Maroc/MAROC-021.jpg'
import Maroc0211 from '../../images/Travel/Maroc/MAROC-021 1.jpg'
import Maroc022 from '../../images/Travel/Maroc/MAROC-022.jpg'
import Maroc025 from '../../images/Travel/Maroc/MAROC-025.jpg'
import Maroc0251 from '../../images/Travel/Maroc/MAROC-025 1.jpg'

const TravelMaroc = () => {
    return  (
        <Router>

            <Layout>
                <SRLWrapper>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc003} alt="Maroc003"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc004} alt="Maroc004"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc005} alt="Maroc005"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc009} alt="Maroc009"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc012} alt="Maroc012"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc013} alt="Maroc013"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc0131} alt="Maroc0131"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc022} alt="Maroc022"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc025} alt="Maroc025"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc0251} alt="Maroc0251"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc022} alt="Maroc022"/>
                    </div>

                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc0211} alt="Maroc0211"/>
                    </div>
                    <div className="imageP">
                        <img  style={{ marginTop: '200px', width: "612px", height: "526px"}} src={Maroc021} alt="Maroc021"/>
                    </div>
                </SRLWrapper>
            </Layout>
        </Router>
    )
}

export default TravelMaroc;