import FS219 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_219.jpg'
import FS229 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_229.jpg'
import FS280 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_280.jpg'
import FS482 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_482.jpg'
import FS518 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_518.jpg'
import FS504 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_504.jpg'
import FS600 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_600.jpg'
import FS778 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_778.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const Yamee = () => {

    return (
        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={FS219} alt="FS219"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={FS229} alt="FS219"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "1062.69px"}} src={FS518} alt="FS219"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={FS280} alt="FS280"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={FS482} alt="FS482"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={FS504} alt="FS504"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "474.66px"}} src={FS600} alt="FS600"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "474.66px"}} src={FS778} alt="FS219"/>
                    </div>
                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default Yamee;