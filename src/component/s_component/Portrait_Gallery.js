import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter as Router } from 'react-router-dom';
import alison from "../../images/CompressionPortrait/ALISONCompress063.jpg";
import capture64 from "../../images/CompressionPortrait/Capture-064.jpg";

import Layout from "../../Layout";

const PortraitGallery = () => {
    return(

        <Router>
        <Layout>
    <SRLWrapper>

<div >
    <img  style={{width: "1000px", height: "1525px"}} src={alison} alt="Alison"/>
</div>

        <div >
            <img style={{width: "1000px", height: "1525px"}} src={capture64} alt="Capture"/>
        </div>
    </SRLWrapper>
        </Layout>
        </Router>
    );
}

export default PortraitGallery;