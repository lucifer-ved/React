import React from 'react';
import LoaderSrc from '../../assets/giphy.gif'

const Loader = props => (
    <div>
        <img 
            alt="loader icon" 
            style={{width:50}}
            src={LoaderSrc} />
    </div>
);

export default Loader;