import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDictionary, saveDictionaryEdit } from '../redux/dictionaryList.actions';
import Button from 'react-bootstrap/Button';
import { checkIfDictionaryExists } from '../lib/validator';
import './wordPairEditor.css';

class DictionaryEditor extends Component {
    constructor(props){
        super(props);

        this.state = {
            nameInput: props.name,
            error: undefined
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            nameInput: nextProps.name,
        });
    }

    changeNameInput = name => {
        this.setState({ nameInput: name });
    };

    handleSave = () => {
        const { nameInput } = this.state;
        const {  dictionaryList, id, addDictionary, saveDictionaryEdit } = this.props;
        const dictionaryExists = checkIfDictionaryExists(dictionaryList, nameInput, id);
        if (!dictionaryExists) {
            if (!id) {
                addDictionary({
                    name: nameInput,
                });
            } else {
                saveDictionaryEdit({
                    id: id,
                    name: nameInput
                });
            }
            this.setState({
                nameInput: '',
                error: undefined
            })
        } else {
            this.setState({
                error: 'Dictionary with this name already exists!',
            })
        }
    };


    render() {
        const { nameInput, error } = this.state;
        const { id } = this.props;
        const isNew = !id;
        return(
            <div>
                <h3>{isNew ? 'Add' : 'Edit'} a dictionary</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h4>Dictionary name</h4>
                            <input
                                onChange={(e) => this.changeNameInput(e.target.value)}
                                value={nameInput}
                                type="text"
                            />
                        </div>
                    </div>
                    <div
                        className="input-error-message text-danger"
                    >
                        {
                            error ?
                                error
                                : ''
                        }
                    </div>
                    <Button
                        className="add-item"
                        variant="primary"
                        disabled={nameInput.trim() === ''}
                        onClick={this.handleSave}
                    >{isNew ? 'Add' : 'Edit'} Dictionary</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addDictionary, saveDictionaryEdit }
)(DictionaryEditor);
