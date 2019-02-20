import React  from 'react';
import WordPair from './wordPair';
import WordPairEditor from './wordPairEditor';
import './dictionary.css'
import { connect } from 'react-redux';
import { getBySelectedId, getDictionaryItems } from '../redux/selectors';


const Dictionary = ({ dictionary, domain, range, id, match }) => (
            <div className="main">
                <WordPairEditor dictionary={dictionary} domainInput={domain} rangeInput={range} id={id} match={match} />
                    {
                        dictionary.length === 0 ?
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
                                dictionary
                                    .filter(item => Number(item.dictionaryId === match.params.id))
                                    .map((item) => {
                                        return <WordPair key={`dictionaryItem-${item.id}`} dictionaryItem={item} dictionaryList={dictionary} />
                                    })
                            }
                            </div>
                    }
            </div>
);

const mapStateToProps = state => {
    const dictionary = getDictionaryItems(state);
    const dictionaryItem = getBySelectedId(state);
    const wordPair = dictionaryItem && dictionaryItem.wordPair ? { ...dictionaryItem.wordPair, id: dictionaryItem.id } : { domain: '', range: '' };

    return { dictionary, ...wordPair };
};

export default connect(mapStateToProps)(Dictionary);
