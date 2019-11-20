import React, {Component} from 'react';
import Creatable from 'react-select/creatable';
import {connect} from 'react-redux';
import {addWordPair, saveEdit} from '../redux/dictionary.actions';
import Button from 'react-bootstrap/Button';
import './wordPairEditor.css';
import {getDictionaryItemsByDictionaryId} from "../redux/selectors";
import {Modal} from "react-bootstrap";

const validateButton = (domain, range) => {
    const domainInput = typeof domain === 'string' ? domain : domain.value;
    const rangeInput = typeof range === 'string' ? range : range.value;

    return domainInput.trim() === '' || rangeInput.trim() === '';
};

class WordPairEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domainInput: props.domainInput,
            rangeInput: props.rangeInput,
            showModal: false,
            modalOptions: null,
            modalType: '',
            selectedSuggestion: '',
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            domainInput: nextProps.domainInput,
            rangeInput: nextProps.rangeInput
        });
    }

    changeDomainInput = domain => {
        this.setState({domainInput: domain.value || domain});
    };

    changeRangeInput = range => {
        this.setState({rangeInput: range.value || range});
    };

    handleSave = () => {
        const {domainInput, rangeInput} = this.state;
        const {dictionary, id, addWordPair, saveEdit, match, suggestionId} = this.props;
        if (!id) {
            addWordPair({
                wordPair: {
                    domain: domainInput,
                    range: rangeInput,
                },
                dictionaryId: match.params.id,
                dictionary
            });
        } else {
            saveEdit({
                id: id,
                wordPair: {
                    domain: domainInput,
                    range: rangeInput,
                },
                dictionaryId: match.params.id,
                dictionary
            });
        }
        if (!suggestionId) {
            this.setState({
                domainInput: '',
                rangeInput: '',
            })
        }
    };

    fetchOptionsForSelect = () => {
        const {suggestedToDictionary} = this.props;
        let domainOptions = [];
        let rangeOptions = [];

        suggestedToDictionary.forEach((item) => {
            domainOptions = [...domainOptions, {label: item.wordPair.domain, value: item.wordPair.domain}];
            rangeOptions = [...rangeOptions, {label: item.wordPair.range, value: item.wordPair.range}];
        });
        return [domainOptions, rangeOptions];
    };

    toggleModal = (modalOptions, type) => {
        this.setState({ showModal: true, modalOptions, modalType: type });
    };

    handleClose = () => {
        this.setState({ showModal: false });
    };

    handleModalOnChange = suggestion => {
      this.setState({ selectedSuggestion: suggestion.value });
    };

    handleModalSave = () => {
        const { modalType, selectedSuggestion } = this.state;

        if (modalType === 'range') {
            this.changeRangeInput(selectedSuggestion);
        }

        if (modalType === 'domain') {
            this.changeDomainInput(selectedSuggestion);
        }

        this.handleClose();
    };


    render() {
        const { domainInput, rangeInput, showModal, modalOptions } = this.state;
        const {suggestionId} = this.props;
        const isNew = !this.props.id;
        const [domainOptions, rangeOptions] = this.fetchOptionsForSelect();
        return (
            <>
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Get suggestion from linked dictionary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Select from the suggestions, or add your own input
                        <Creatable
                            options={modalOptions}
                            onChange={this.handleModalOnChange}
                            isCreatable
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary"
                                onClick={this.handleModalSave}>
                            Add to input field
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h3>{isNew ? 'Add' : 'Edit'} a word pair</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-2">
                            <h4>Domain: </h4>
                            <input
                                onChange={(e) => this.changeDomainInput(e.target.value)}
                                value={domainInput}
                                type="text"
                            />
                            {
                                Number.isFinite(suggestionId)
                                    ? <Button
                                        className="add-item"
                                        variant="primary"
                                        onClick={() => this.toggleModal(domainOptions, 'domain')}
                                        block
                                    >Get Domain from Suggestions</Button>
                                    : null
                            }
                        </div>
                        <div className="col-4">
                            <h4>Range: </h4>
                            <input
                                onChange={(e) => this.changeRangeInput(e.target.value)}
                                value={rangeInput}
                                type="text"
                            />
                            {
                                Number.isFinite(suggestionId)
                                ? <Button
                                        className="add-item"
                                        variant="primary"
                                        onClick={() => this.toggleModal(rangeOptions, 'range')}
                                        block
                                    >Get Range from Suggestions</Button>
                                    : null
                            }
                        </div>
                    </div>
                    <Button
                        className="add-item"
                        variant="primary"
                        disabled={validateButton(domainInput, rangeInput)}
                        onClick={this.handleSave}
                        block
                    >{isNew ? 'Add' : 'Edit'} Word Pair</Button>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state, props) => ({
    suggestedToDictionary: getDictionaryItemsByDictionaryId(state, props.suggestionId)
        ? getDictionaryItemsByDictionaryId(state, props.suggestionId)
        : null
});

export default connect(
    mapStateToProps,
    {addWordPair, saveEdit}
)(WordPairEditor);
