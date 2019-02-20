import React from 'react';
import { connect } from 'react-redux';
import { editWordPair, deleteWordPair } from '../redux/dictionary.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const caseErrorIcon = errors => {
    let errorTypes = [];
    if (errors.length > 0) {
        errors.forEach(item => {
            errorTypes = [...errorTypes, item.type]
        })
    }
    if (errorTypes.includes('cycle')) {
        return 'sync';
    }
    if (errorTypes.includes('chain')) {
        return 'ban';
    }
    if (errorTypes.includes('fork')) {
        return 'code-branch';
    }
    if (errorTypes.includes('dup')) {
        return 'clone';
    }
    return '';
};

const caseSeverity = errors => {

    let errorTypes = [];
    if (errors.length > 0) {
        errors.forEach(item => {
            errorTypes = [...errorTypes, item.type]
        })
    }
    if (errorTypes.includes('cycle')) {
        return 'red';
    }
    if (errorTypes.includes('chain')) {
        return 'red';
    }
    if (errorTypes.includes('fork')) {
        return '#ffae42';
    }
    if (errorTypes.includes('dup')) {
        return '#ffae42';
    }
    return 'black';
};

const WordPair = ({ dictionaryItem, dictionaryList, editWordPair, deleteWordPair }) => (
    <div className="row">
        <div  className="list-item col-2 col-md-1 offset-md-1">
            {
                dictionaryItem.wordPair.errors && dictionaryItem.wordPair.errors.length > 0 ?
                    <FontAwesomeIcon
                        icon={caseErrorIcon(dictionaryItem.wordPair.errors)}
                        color={caseSeverity(dictionaryItem.wordPair.errors)}
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
