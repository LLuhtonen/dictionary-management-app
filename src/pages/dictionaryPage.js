import React from 'react';
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDictionaryListItemById } from "../redux/selectors";
import { setSuggestedTo } from "../redux/dictionaryList.actions";
import Dictionary from '../components/dictionary';
import ErrorInfo from '../components/errorInfo';
import './dictionaryPage.css';

const DictionaryPage = ({ match, dictionaryState, setSuggestedTo }) => {
    const [showErrorModal, setShowErrorModal] = React.useState(false);
    const [showLinkModal, setShowLinkModal] = React.useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = React.useState(dictionaryState.suggestedTo || 'default');

    const submitSuggestionModal = () => {
        setSuggestedTo(match.params.id, parseInt(selectedSuggestion));
        setShowLinkModal(false);
    };

    return (
        <>
            <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Error Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorInfo />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowErrorModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showLinkModal} onHide={() => setShowLinkModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Get suggestions from a linked dictionary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <label>
                            Get suggestions from
                            <select value={selectedSuggestion} onChange={(event) => setSelectedSuggestion(event.target.value)}>
                                <option key={0} value={'default'} >No suggestions...</option>
                                {dictionaryState.linkedTo ? dictionaryState.linkedTo.map((linkedId, index) => (
                                    <option key={index + 1} value={linkedId}>{linkedId}</option>
                                ))
                                    : null}
                            </select>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLinkModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary"
                            onClick={(event) => submitSuggestionModal(event)}>
                        Link sets
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ textAlign: 'center' }}>
                <Link to="/dictionary/">
                    <FontAwesomeIcon
                        icon="arrow-left"
                        style={{ position: "absolute", left: "10vw"}}
                        size="3x"
                    />
                </Link>
                <h1>Dictionary Name</h1>
                <Button
                    className="dictionary-button"
                    variant="danger"
                    onClick={() => setShowErrorModal(true)}
                >Show error info</Button>
                <Button
                    className="dictionary-button"
                    variant="primary"
                    onClick={() => setShowLinkModal(true)}
                >Select a linked set for suggestions</Button>
            </div>
            <Dictionary match={match} suggestionsFrom={dictionaryState.suggestedTo} />
        </>
    );
};


const mapStateToProps = (state, props) => ({ dictionaryState: getDictionaryListItemById(state, props.match.params.id) });

export default connect(mapStateToProps, { setSuggestedTo })(DictionaryPage);
