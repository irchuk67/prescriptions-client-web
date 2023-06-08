import search from "../../assets/icons8-search 1.svg";
import React from "react";
import './search.scss';

const Search = ({onSearchChange, searchField, onSearchSubmit}) => {
    return(
        <div className={'search'}>
            <form  onSubmit={(event) => onSearchSubmit(event)}>
                <input type={'text'} placeholder={'Doctor data'} value={searchField}
                       onChange={event => onSearchChange(event)}/>
                <img src={search} alt={'search icon'} onClick={(event) => onSearchSubmit(event)}/>
            </form>
        </div>
    )
}

export default Search;