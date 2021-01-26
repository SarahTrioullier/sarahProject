import AMonta01 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-01.jpg'
import AMonta02 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-02.jpg'
import AMonta03 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-03.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const AdelaideInTheAir = () => {
    return (
        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={AMonta03} alt="AMonta03"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={AMonta01} alt="AMonta01"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={AMonta02} alt="AMonta02"/>
                    </div>

                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default AdelaideInTheAir;