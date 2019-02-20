import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './errorInfo.css';

const ErrorInfo = () => (
    <div className="error-info-container">
        <h1>Errors are marked the following way</h1>
        <h4><mark className="warning-mark">Yellow Orange</mark> - Not Severe</h4>
        <h4><mark className="severe-mark">Red</mark> - Severe</h4>
        <div className="row row-with-margin">
            <div className="col-2 offset-2">
                <FontAwesomeIcon
                    icon="clone"
                    color="#ffae42"
                    size="lg"
                />
                <h4>Duplicate</h4>
            </div>
            <div className="col-2">
                <FontAwesomeIcon
                    icon="code-branch"
                    color="#ffae42"
                    size="lg"
                />
                <h4>Fork</h4>
            </div>
            <div className="col-2">
                <FontAwesomeIcon
                    icon="sync"
                    color="red"
                    size="lg"
                />
                <h4>Cycle</h4>
            </div>
            <div className="col-2">
                <FontAwesomeIcon
                    icon="ban"
                    color="red"
                    size="lg"
                />
                <h4>Chain</h4>
            </div>
        </div>
    </div>
);

export default ErrorInfo;
