import A214 from '../../images/Portrait/NATAL/ALISON-214.jpg'
import A217 from '../../images/Portrait/NATAL/ALISON-217.jpg'
import A218 from '../../images/Portrait/NATAL/ALISON-218.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const Alison = () => {
    return (
        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={A214} alt="A214"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={A217} alt="A217"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={A218} alt="A214"/>
                    </div>
                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default Alison;