import React from 'react';
import InvestmentList from './InvestmentList';

const Investment = (props) => {
    return (
        <div>
            {props.items && props.items.length>0? <InvestmentList items={props.items} initialInvestment = {props.initialInvestment}/>: <p>No Record found</p>}
        </div>
    );
};

export default Investment;