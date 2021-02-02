import  K1146 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1146.jpg'
import  K1315 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1315.jpg'
import  K1332 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1332.jpg'
import  K1433 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1433.jpg'
import  K1471 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1471.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const Adelaide = () => {
    return(

        <Router>
            <Layout>
                <SRLWrapper >
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={K1315} alt="K1315"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={K1332} alt="K1332"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={K1433} alt="K1433"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "512px", height: "640px"}} src={K1471} alt="K1471"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "512px", height: "640px"}} src={K1146} alt="K1146"/>
                    </div>

                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default Adelaide;
