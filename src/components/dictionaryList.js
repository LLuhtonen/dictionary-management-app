import React  from 'react';
import './dictionary.css'
import { getDictionaryListByIds, getDictionaryListItems, } from '../redux/selectors';
import { connect } from 'react-redux';
import DictionaryEditor from './dictionaryEditor';
import DictionaryListItem from './dictionaryListItem';


const DictionaryList = ({ dictionaryList, name, id }) => (
    <div className="main">
        <h1>Dictionaries Overview</h1>
        <DictionaryEditor dictionaryList={dictionaryList} name={name} id={id} />
        <h1>Dictionary List</h1>
        {
            dictionaryList.map((dictionary) => {return <DictionaryListItem key={`dictionaryListItem-${dictionary.id}`} dictionary={dictionary} dictionaryList={dictionaryList} />})
        }
    </div>
);


const mapStateToProps = state => {
    const dictionaryList = getDictionaryListItems(state);
    const dictionaryListItem = getDictionaryListByIds(state);
    const dictionaryName = dictionaryListItem && dictionaryListItem.dictionary ? { name: dictionaryListItem.dictionary.name, id: dictionaryListItem.id } : { name: '' };

    return { dictionaryList, ...dictionaryName };
};

export default connect(mapStateToProps)(DictionaryList);
