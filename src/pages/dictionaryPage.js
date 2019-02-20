import React from 'react';
import Dictionary from '../components/dictionary';
import ErrorInfo from '../components/errorInfo';

const DictionaryPage = ({ match }) => (
    <div>
        <ErrorInfo />
        <Dictionary match={match} />
    </div>
);

export default DictionaryPage;
