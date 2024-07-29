import React from "react";
import './Filter.css';

const Filter = (props) => {
    let filterData = props.filterData
    let category=props.category;
    let setCategory=props.setCategory;


    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className="filter-box">
            {
                filterData.map( (data) => {
                    return(
                        <button key={data.id} className="filter-btn"
                            onClick={ () => filterHandler(data.title) }
                        >{data.title}</button>
                    );
                })
            }
        </div>
    )
};

export default Filter;