import React, { useState, useEffect } from 'react';

export default function Question2(props) {
    // Situation: Create a search bar that filters items in the list as the user types.
    // Feel free to refactor as you feel necessary.

    const [searchText, setSearchText] = useState('');
    const [shoppingList] = useState([
        'Peanut Butter',
        'Peas',
        'Butter',
        'Beans',
        'Eggs',
        'Quiche',
        'Cheese',
    ]);
    const [filteredSearch, setFilteredSearch] = useState([]);

    useEffect(() => {
        setFilteredSearch(
            shoppingList.filter((item) => {
                const filterItem = item
                    .toLowerCase()
                    .includes(searchText.toLowerCase());

                return filterItem;
            })
        );
    }, [shoppingList, searchText]);

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <input value={searchText} onChange={handleSearchTextChange} />
            <div className="results">
                {filteredSearch.map((item) => {
                    return <div key={item}>{item}</div>;
                })}
            </div>
            <div className="total">
                {filteredSearch.length === 0
                    ? 'No Results Found :('
                    : ` Total: ${filteredSearch.length} results found`}
            </div>
        </div>
    );
}
