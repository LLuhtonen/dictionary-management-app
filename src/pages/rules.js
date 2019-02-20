import React from 'react';
import Link from 'react-router-dom/es/Link';
import Button from 'react-bootstrap/Button';
import './rules.css';

const Rules = () => {
    return(
        <div className="rules-container">
            <h1>Ruleset for creating a dictionary</h1>
            <div className="text-container">
                The Domain of a dictionary represents the original value to transform, the Range of a dictionary represents
                the desired value.
            </div>
            <h3>Duplicates</h3>
            <div className="text-container">
                Duplicate Domains/Ranges: Two rows in the dictionary map to the same value, simply resulting in
                duplicate content.
            </div>
            <div className="container">
                <div className="row">
                   <div className="list-item col-3 offset-3">Domain</div>
                   <div className="list-item col-3">Range</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Dark Grey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Dark Grey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Caribbean Sea</div>
                   <div className="list-item col-3">Turqoise</div>
                </div>
            </div>
            <h3>Forks (Duplicate Domains with different Ranges)</h3>
            <div className="text-container">
                Two rows in the dictionary map to different values,
                resulting in an ambiguous transformation.
            </div>
            <div className="container">
                <div className="row">
                   <div className="list-item col-3 offset-3">Domain</div>
                   <div className="list-item col-3">Range</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Dark Grey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Anthracite</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Caribbean Sea</div>
                   <div className="list-item col-3">Turqoise</div>
                </div>
            </div>
            <h3>Cycles</h3>
            <div className="text-container">
                Two or more rows in a dictionary result in cycles, resulting in a never-ending transformation.
            </div>
            <div className="container">
                <div className="row">
                   <div className="list-item col-3 offset-3">Domain</div>
                   <div className="list-item col-3">Range</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Dark Grey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Dark Grey</div>
                   <div className="list-item col-3">Stonegrey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Caribbean Sea</div>
                   <div className="list-item col-3">Turqoise</div>
                </div>
            </div>
            <h3>Chains</h3>
            <div className="text-container">
                A chain structure in the dictionary (a value in Range column also appears in Domain column of
                another entry), resulting in inconsistent transformation.
            </div>
            <div className="container">
                <div className="row">
                   <div className="list-item col-3 offset-3">Domain</div>
                   <div className="list-item col-3">Range</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Stonegrey</div>
                   <div className="list-item col-3">Dark Grey</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Dark Grey</div>
                   <div className="list-item col-3">Anthracite</div>
                </div>
                <div className="row">
                   <div className="list-item col-3 offset-3">Caribbean Sea</div>
                   <div className="list-item col-3">Turqoise</div>
                </div>
            </div>
            <div className="text-container">
                To begin creating your dictionary click on the button below.
            </div>
            <Button
                variant="primary"
                size="lg">
                <Link to="/dictionary">
                    Click here to begin filling your dictionaries
                </Link>
            </Button>
        </div>
    )
};

export default Rules;
