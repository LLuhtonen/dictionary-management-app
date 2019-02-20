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
        const { dictionaryList, id, addWordPair, saveEdit } = this.props;
        const errors = validateInput(dictionaryList, { id: id, domain: domainInput, range: rangeInput });
            if (!id) {
                addWordPair({
                    domain: domainInput,
                    range: rangeInput,
                    error: errors.error
                });
            } else {
                saveEdit({
                    id: id,
                    wordPair: {
                        domain: domainInput,
                        range: rangeInput,
                        error: errors.error
                    }
                });
            }
            this.setState({
                domainInput: '',
                rangeInput: '',
            })
        };


render() {
        const { domainInput, rangeInput } = this.state;
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
                        </div>
                        <div className="col-4">
                            <h4>Range: </h4>
                            <input
                                onChange={(e) => this.changeRangeInput(e.target.value)}
                                value={rangeInput}
                                type="text"
                            />
                        </div>
                    </div>
                    <Button
                        className="add-item"
                        variant="primary"
                        disabled={domainInput.trim() === '' || rangeInput.trim() === ''}
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
