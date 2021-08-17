import React from "react";
import Image from '../public/images/CV.jpg'

const CV = (props) => {

    return (<>
        <div className="btn btn-secondary">
            <a className="text-white text-decoration-none" href={Image} download><i className="bi bi-download fs-5 me-2"></i> CV Anne Denicourt</a>
        </div>
    </>
    )

};

export default CV;