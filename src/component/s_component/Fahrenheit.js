import F110 from '../../images/Portrait/Fahrenheit 21/05-110.jpg'
import F125 from '../../images/Portrait/Fahrenheit 21/05-125.jpg'
import N7946 from '../../images/Portrait/Fahrenheit 21/_N9A7946.jpg'
import N7841 from '../../images/Portrait/Fahrenheit 21/_N9A7841.jpg'
import N8001 from '../../images/Portrait/Fahrenheit 21/_N9A8001.jpg'
import N8005 from '../../images/Portrait/Fahrenheit 21/_N9A8005.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const Fahrenheit = () => {
    return (
        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={F110} alt="F110"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "712px"}} src={F125} alt="F125"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "515.94px"}} src={N7946} alt="N7946"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "474.66px"}} src={N7841} alt="N7841"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "474.66px"}} src={N8001} alt="N8001"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "474.66px"}} src={N8005} alt="N8005"/>
                    </div>
                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default Fahrenheit;