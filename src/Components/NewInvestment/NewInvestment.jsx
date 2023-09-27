import React from 'react';
import NewInvestmentFrom from './NewInvestmentFrom';

const NewInvestment = (props) => {
    return (
        <div>
            <NewInvestmentFrom onSaveInvestmentData={props.calculateHandler} />
        </div>
    );
};

export default NewInvestment;