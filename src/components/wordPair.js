import React from 'react';
import { connect } from 'react-redux';
import { editWordPair, deleteWordPair } from '../redux/dictionary.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WordPair = ({ dictionaryItem, editWordPair, deleteWordPair }) => (
    <div className="row">
        <div className="list-item col-4 offset-2">
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
                onClick={()=> deleteWordPair(dictionaryItem.id)}
            />
        </div>
    </div>
);

export default connect(
    null,
    { editWordPair, deleteWordPair }
)(WordPair);
