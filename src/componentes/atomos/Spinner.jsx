import React from 'react';
import Loader from 'react-loader-spinner';

export function Spinner() {
    return(
        <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            className="text-center"
        />
    );
}