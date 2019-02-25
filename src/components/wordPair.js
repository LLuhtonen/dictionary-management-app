import React from 'react';
import { connect } from 'react-redux';
import { editWordPair, deleteWordPair } from '../redux/dictionary.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WordPair = ({ dictionaryItem, dictionaryList, error, editWordPair, deleteWordPair }) => (
    <div className="row">
        <div  className="list-item col-2 col-md-1 offset-md-1">
            {
                dictionaryItem.wordPair.errors && dictionaryItem.wordPair.errors.length > 0 ?
                    <FontAwesomeIcon
                        icon={error.icon ? error.icon : ''}
                        color={error.color ? error.color : ''}
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
        <div className="list-item col-2">
            <FontAwesomeIcon
                icon="edit"
                onClick={()=> editWordPair(dictionaryItem.id)}
            />
            <FontAwesomeIcon
                icon="trash-alt"
                onClick={()=> deleteWordPair(dictionaryList, dictionaryItem)}
            />
        </div>
    </div>
);

export default connect(
    null,
    { editWordPair, deleteWordPair }
)(WordPair);
