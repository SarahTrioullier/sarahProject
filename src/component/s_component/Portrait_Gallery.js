import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter  } from 'react-router-dom';
import alison from "../../images/CompressionPortrait/ALISONCompress063.jpg";
import capture64 from "../../images/CompressionPortrait/Capture-064.jpg";
import './Portrait_Gallery.css';

import Layout from "../../Layout";

const PortraitGallery = () => {
    return(

        <BrowserRouter >
        <Layout>
    <SRLWrapper >

<div className="imageP">
    <img  style={{marginTop: '200px', width: "912px", height: "1140px"}} src={alison} alt="Alison"/>
</div>

        <div className="imageP" >
            <img style={{width: "912px", height: "1140px"}} src={capture64} alt="Capture"/>
        </div>
    </SRLWrapper>
        </Layout>
        </BrowserRouter>
    );
}

export default PortraitGallery;