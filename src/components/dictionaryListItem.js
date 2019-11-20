import React, {useState} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router-dom/es/Link';
import {Button, Modal} from "react-bootstrap";
import { editDictionary, deleteDictionary, linkDictionaries } from '../redux/dictionaryList.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkDictionariesTest = (primaryId, linkToId, linkDictionaries, handleClose) => {
    linkDictionaries(primaryId, parseInt(linkToId));
    handleClose();
};

const DictionaryListItem = ({dictionary, dictionaryList, editDictionary, deleteDictionary, linkDictionaries}) => {
    const [showModal, setShowModal] = useState(false);
    const [linkToId, setLinkToId] = useState('default');

    const handleClose = () => {
        setShowModal(false);
        setLinkToId('default');
    };

    const handleShow = () => setShowModal(true);

    return (
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
                    onClick={() => editDictionary(dictionary.id)}
                />
                <FontAwesomeIcon
                    icon="trash-alt"
                    onClick={() => deleteDictionary(dictionary.id)}
                />
                <FontAwesomeIcon
                    icon="link"
                    onClick={handleShow}
                />
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Link dictionaries</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form >
                        <label>
                            Link <b>{dictionary.dictionary.name}</b> with 
                            <select value={linkToId} onChange={(event) => setLinkToId(event.target.value)}>
                                <option key={0} value={'default'} disabled>Select an option...</option>
                                {dictionaryList.map((dictionaryListItem, index) => (
                                    dictionary.id !== dictionaryListItem.id ?
                                    <option key={index + 1} value={dictionaryListItem.id}>{dictionaryListItem.dictionary.name}</option> :
                                        null
                                ))}
                            </select>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                            onClick={() => linkDictionariesTest(dictionary.id, linkToId, linkDictionaries, handleClose)}>
                        Link sets
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default connect(
    null,
    {editDictionary, deleteDictionary, linkDictionaries}
)(DictionaryListItem);
