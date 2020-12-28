import React from "react";
import Layout from "../Layout";
import { SRLWrapper } from "simple-react-lightbox";
import personn from '../images/personn.jpg';
import sky from '../images/sky.jpg';
import arch from '../images/arch.jpg';

const BasicGallery = () => {
    return (
        <Layout>

            <SRLWrapper>
                <div id="content-page-one" className="content">
                    <div className="row">
                        <div className="col-md-6 col-12 col-image-half">
                            <img src={personn} alt="New York City - Architecture" />
                        </div>
                        <div className="col-md-6 col-12 col-image-half">
                            <img src={sky} alt="Between two mountains" />
                        </div>
                        <div className="col-md-4 col-12 col-image-small">
                            <img src={arch} alt="Parallels building" />
                        </div>
                        <div className="col-md-4 col-12 col-image-small">
                            <img src={sky} alt="The mist in the forest" />
                        </div>

                    </div>
                </div>
            </SRLWrapper>
        </Layout>
    );
};

export default BasicGallery;