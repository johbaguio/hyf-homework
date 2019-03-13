import React from 'react';

class SearchInput extends React.Component{
    render(){
        const { textValue, changeHandler, searchHandler, buttonText } = this.props;
        return(
            <div className='search'>
                <input
                value={textValue}
                onChange={changeHandler}
                className="search-input"
                placeholder="Search user..."
                type="text"
                />
                <button onClick={searchHandler} className="search-input btn">
                {buttonText}
                </button>
            </div>
        )
    }
}

export default SearchInput;