import React, {useState} from "react";

const Search = (props) => {
    const [value, setValue] = useState('');
    const valueChange = (e) => {
        setValue(e.target.value)
    };
    return (
        <div className="input-group mt-4 mb-4">
            <div className="input-group-prepend">
                <button onClick={() => props.onSearch(value)} className="btn btn-primary" type="button">Поиск</button>
            </div>
            <input type="text" className="form-control" placeholder="введите данные "
                   aria-label="Example text with button addon"
                   aria-describedby="button-addon1" onChange={valueChange} value={value}/>
        </div>
    )
};
export default Search;