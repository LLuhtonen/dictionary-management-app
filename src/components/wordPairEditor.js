import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWordPair, saveEdit } from '../redux/dictionary.actions';
import Button from 'react-bootstrap/Button';
import { validateInput } from '../lib/validator';
import './wordPairEditor.css';

class WordPairEditor extends Component {
    constructor(props){
        super(props);

        this.state = {
            domainInput: props.domainInput,
            rangeInput: props.rangeInput,
            errors: {
                hasErrors: false,
                domainErrors: {
                    domainError: false,
                    error: undefined
                },
                rangeErrors: {
                    rangeError: false,
                    error: undefined
                }
            }
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            domainInput: nextProps.domainInput,
            rangeInput: nextProps.rangeInput
        });
    }

    changeDomainInput = domain => {
        this.setState({ domainInput: domain });
    };

    changeRangeInput = range => {
        this.setState({ rangeInput: range });
    };

    handleSave = () => {
        const { domainInput, rangeInput } = this.state;
        const { dictionaryList, id, addWordPair, saveEdit} = this.props;
        const errors = validateInput(dictionaryList, { domain: domainInput, range: rangeInput });
        if (!errors.domainErrors.domainError && !errors.rangeErrors.rangeError) {
            if (!id) {
                addWordPair({
                    domain: domainInput,
                    range: rangeInput
                });
            } else {
                saveEdit({
                    id: id,
                    wordPair: {
                        domain: domainInput,
                        range: rangeInput
                    }
                });
            }
            this.setState({
                domainInput: '',
                rangeInput: '',
                errors: {
                    hasErrors: false,
                    domainErrors: errors.domainErrors,
                    rangeErrors: errors.rangeErrors,
                }
            })
        } else {
            this.setState({
                errors: {
                    hasErrors: true,
                    domainErrors: errors.domainErrors,
                    rangeErrors: errors.rangeErrors,
                }
            });
        }
    };

    render() {
        const { domainInput, rangeInput, errors } = this.state;
        const isNew = !this.props.id;
        return(
            <div>
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
                            <div
                                className="input-error-message text-danger"
                            >
                                {
                                    errors && errors.hasErrors && errors.domainErrors.domainError ?
                                        errors.domainErrors.error
                                        : ''
                                }
                            </div>
                        </div>
                        <div className="col-4">
                            <h4>Range: </h4>
                            <input
                                onChange={(e) => this.changeRangeInput(e.target.value)}
                                value={rangeInput}
                                type="text"
                            />
                            <div
                                className="input-error-message text-danger"
                            >
                                {
                                    errors && errors.hasErrors && errors.rangeErrors.rangeError ?
                                        errors.rangeErrors.error
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                    <Button
                        className="add-item"
                        variant="primary"
                        onClick={this.handleSave}
                        block
                    >{isNew ? 'Add' : 'Edit'} Word Pair</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addWordPair, saveEdit }
)(WordPairEditor);
