import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/es/Link';
import { editDictionary, deleteDictionary } from '../redux/dictionaryList.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DictionaryListItem = ({ dictionary, editDictionary, deleteDictionary }) => (
    <div className="row">
        <div className="list-item col-2 offset-2">
            <Link to={`/dictionary/${dictionary.id}`}>
                Click to edit
            </Link>
        </div>
        <div className="list-item col-4">
            <p>{dictionary.dictionary.name}</p>
        </div>
        <div className="list-item col-2">
            <FontAwesomeIcon
                icon="edit"
                onClick={()=> editDictionary(dictionary.id)}
            />
            <FontAwesomeIcon
                icon="trash-alt"
                onClick={()=> deleteDictionary(dictionary.id)}
            />
        </div>
    </div>
);

export default connect(
    null,
    { editDictionary, deleteDictionary }
)(DictionaryListItem);
