import React from 'react';
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/es/Link';
import './index.css';

const Index = () => (
    <div className="homepage-container">
        <h1>This is an application that allows you to create your own dictionary</h1>
        <div>
            <Button
                className="rules-button"
                variant="primary"
                size="lg">
                <Link to="/rules">
                    Click here to read about rules
                </Link>
            </Button>
        </div>
        <div>
            <Button
                className="start-button"
                variant="primary"
                size="lg">
                <Link to="/dictionary">
                    Click here begin filling your dictionary
                </Link>
            </Button>
        </div>
    </div>
    );

export default Index;
