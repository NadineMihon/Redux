const incrementLogger = store => next => action => {
    if (action.type === 'counter/increment') {
        console.log('Вызван counter/increment ');
    }
    return next(action);
};

export default incrementLogger;