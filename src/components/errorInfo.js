import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './errorInfo.css';

const ErrorInfo = () => (
    <div className="error-info-container jumbotron">
        <div className="error-title-container">
         <h1>Errors are marked the following way</h1>
        </div>
        <h4><mark className="warning-mark">Yellow Orange</mark> - Not Severe</h4>
        <h4><mark className="severe-mark">Red</mark> - Severe</h4>
        <div className="row row-with-margin">
            <div className="col-3">
                <FontAwesomeIcon
                    icon="clone"
                    color="#ffae42"
                    size="lg"
                />
                <p>Duplicate</p>
            </div>
            <div className="col-3">
                <FontAwesomeIcon
                    icon="code-branch"
                    color="#ffae42"
                    size="lg"
                />
                <p>Fork</p>
            </div>
            <div className="col-3">
                <FontAwesomeIcon
                    icon="sync"
                    color="red"
                    size="lg"
                />
                <p>Cycle</p>
            </div>
            <div className="col-3">
                <FontAwesomeIcon
                    icon="ban"
                    color="red"
                    size="lg"
                />
                <p>Chain</p>
            </div>
        </div>
    </div>
);

export default ErrorInfo;
