import React, {useState } from 'react';

const AmountContext = React.createContext({
    givenAmount: 0,
    getSumAmount: (amount) => { }
});

export const AmountContextProvider = (props) => {
    const [sumAmountState, setSumAmountState] = useState(0);

    const sumAmountHandler = (amount) => {
      setSumAmountState((prevAmount) => {
        return parseInt(prevAmount) + parseInt(amount);
      });
    }

    return (
        <AmountContext.Provider
            value={{
                givenAmount: sumAmountState,
                getSumAmount: sumAmountHandler 
            }}
        >
            {props.children}
        </AmountContext.Provider>
    );
};

export default AmountContext;