import React  from 'react';
import WordPair from './wordPair';
import WordPairEditor from './wordPairEditor';
import './dictionaryList.css'
import { connect } from 'react-redux';
import { getBySelectedId, getDictionaryItems } from '../redux/selectors';


const DictionaryList = ({ dictionaryList, domain, range, id }) => (
            <div className="main">
                <WordPairEditor dictionaryList={dictionaryList} domainInput={domain} rangeInput={range} id={id} />
                    {
                        dictionaryList.length === 0 ?
                            <h3>
                                Dictionary is empty, start by adding something to it!
                            </h3>
                            :
                            <div className="container">
                                <div className="row">
                                    <div className="col-4 offset-2">
                                        <h3>Domain</h3>
                                    </div>
                                    <div className="col-4">
                                        <h3>Range</h3>
                                    </div>
                                </div> {
                                dictionaryList.map((item) => {return <WordPair key={`dictionaryItem-${item.id}`} dictionaryItem={item} />})
                            }
                            </div>
                    }
            </div>
);

const mapStateToProps = state => {
    const dictionaryList = getDictionaryItems(state);
    const dictionaryItem = getBySelectedId(state);
    const wordPair = dictionaryItem && dictionaryItem.wordPair ? { ...dictionaryItem.wordPair, id: dictionaryItem.id } : { domain: '', range: ''};

    return { dictionaryList, ...wordPair };
};

export default connect(mapStateToProps)(DictionaryList);
