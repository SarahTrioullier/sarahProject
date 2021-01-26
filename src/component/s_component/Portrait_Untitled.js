import AFlash063 from '../../images/Portrait/Portrait_Untitled/ALISON FLASH_063.jpg'
import C033 from '../../images/Portrait/Portrait_Untitled/Capture_033.jpg'
import mario from '../../images/Portrait/Portrait_Untitled/mario.jpg'
import suguru from '../../images/Portrait/Portrait_Untitled/suguru.jpg'
import yuzaku from '../../images/Portrait/Portrait_Untitled/yuzaku.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const Portrait_Untitled = () => {
    return (
        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "890px"}} src={AFlash063} alt="AFlash063"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "962.16px"}} src={C033} alt="C033"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "962.16px"}} src={mario} alt="mario"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "962.16px"}} src={suguru} alt="suguru"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "962.16px"}} src={yuzaku} alt="yuzaku"/>
                    </div>
                </SRLWrapper>
            </Layout>
        </Router>
                    );
}

        export default Portrait_Untitled;