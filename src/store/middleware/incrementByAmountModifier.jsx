const incrementByAmountModifier = store => next => action => {
    if (action.type === 'counter/incrementByAmount') {
        action.payload = action.payload + 3;
    }
    return next(action);
};

export default incrementByAmountModifier;