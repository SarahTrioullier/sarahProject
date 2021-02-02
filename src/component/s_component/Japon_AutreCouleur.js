import REPRO45752 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO45752.jpg'
import REPRO45793 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO45793.jpg'
import REPRO46027 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO46027.jpg'
import REPRO46041 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO46041.jpg'
import REPRO46042 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO46042.jpg'
import REPRO46044 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO46044.jpg'
import REPRO46047 from '../../images/Travel/Japon/JaponColor/2017_07_14_REPRO46047.jpg'
import REPROS_JAPON_015 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_015.jpg'
import REPROS_JAPON_018 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_018.jpg'
import REPROS_JAPON_024 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_024.jpg'
import REPROS_JAPON_028 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_028.jpg'
import REPROS_JAPON_029 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_029.jpg'
import REPROS_JAPON_030 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_030.jpg'
import REPROS_JAPON_031 from '../../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_031.jpg'
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";


const JaponCouleur = () => {
    return (

        <Router>
            <Layout>
                <SRLWrapper>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_029}
                             alt="TOKYO_13"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_028}
                             alt="TOKYO_15"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_024}
                             alt="TOKYO_17"/>
                    </div>

                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_018}
                             alt="TOKYO_17"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_015}
                             alt="TOKYO_15"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_030}
                             alt="NAOSHIMA_05"/>
                    </div>

                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPROS_JAPON_031}
                             alt="NAOSHIMA_04"/>
                    </div>
                    <div className="imageP">
                        <img style={{   width: "712px", height: "196.68px"}} src={REPRO45793}
                             alt="HIROSHIMA_02"/>
                    </div>

                    <div className="imageP">
                        <img style={{   width: "712px", height: "262.73px"}} src={REPRO45752}
                             alt="MYAJIMA_01"/>
                    </div>

                    <div className="imageP">
                        <img style={{   width: "712px", height: "569.6px"}} src={REPRO46027}
                             alt="KOBE_04"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPRO46047}
                             alt="TOKYO_13"/>
                    </div>
                    <div className="imageP">
                        <img style={{ width: "712px", height: "569.6px"}} src={REPRO46042}
                             alt="NAOSHIMA_04"/>
                    </div>

                    <div className="imageP">
                        <img style={{   width: "712px", height: "890px"}} src={REPRO46041}
                             alt="KYOTO_09"/>
                    </div>

                    <div className="imageP">
                        <img style={{   width: "712px", height: "465.36px"}} src={REPRO46044}
                             alt="NAOSHIMA_05"/>
                    </div>

                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default JaponCouleur;
