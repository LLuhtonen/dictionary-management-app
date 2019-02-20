import React from 'react';
import { connect } from 'react-redux';
import { editWordPair, deleteWordPair } from '../redux/dictionary.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const caseErrorIcon = error => {
    switch (error) {
        case 'dup': {
            return 'clone'
        }
        case 'fork': {
            return 'code-branch'
        }
        case 'cycle': {
            return 'sync'
        }
        case 'chain': {
            return 'ban'
        }
        default: return '';
    }
};

const caseSeverity = error => {

    switch (error) {
        case 'dup': {
            return '#ffae42'
        }
        case 'fork': {
            return '#ffae42'
        }
        case 'cycle': {
            return 'red'
        }
        case 'chain': {
            return 'red'
        }
        default: return 'black';
    }
};

const WordPair = ({ dictionaryItem, editWordPair, deleteWordPair }) => (
    <div className="row">
        <div  className="list-item col-1 offset-1">
            {
                dictionaryItem.wordPair.error ?
                    <FontAwesomeIcon
                        icon={caseErrorIcon(dictionaryItem.wordPair.error)}
                        color ={caseSeverity(dictionaryItem.wordPair.error)}
                    />
                    : ''
            }
        </div>
        <div className="list-item col-4">
            <p>{dictionaryItem.wordPair.domain}</p>
        </div>
        <div className="list-item col-4">
            <p>{dictionaryItem.wordPair.range}</p>
        </div>
        <div className="col-2">
            <FontAwesomeIcon
                icon="edit"
                onClick={()=> editWordPair(dictionaryItem.id)}
            />
            <FontAwesomeIcon
                icon="trash-alt"
                onClick={()=> deleteWordPair(dictionaryItem)}
            />
        </div>
    </div>
);

export default connect(
    null,
    { editWordPair, deleteWordPair }
)(WordPair);
