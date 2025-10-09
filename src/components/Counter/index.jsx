import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementAsync, increment, incrementAsync, incrementByAmount } from "../../slices/counter/counterSlice";
import * as SC from './styles'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [asyncAmount, setAsyncAmount] = useState(0);
    const [asyncDecAmount, setAsyncDecAmount] = useState(0);

    const handleAmount = () => {
        if (amount) {
            dispatch(incrementByAmount(amount));
            setAmount(0); 
        };
    };

    const handleIncrementAsync = () => {
        if (asyncAmount) {
            dispatch(incrementAsync(asyncAmount));
            setAsyncAmount(0);            
        };
    };

    const handleDecrementAsync = () => {
        if (asyncDecAmount) {
            dispatch(decrementAsync(asyncDecAmount));
            setAsyncDecAmount(0);            
        };
    };

    return (
        <div>
            <SC.Counter>
                <SC.SimpleCounter>
                    <button
                        aria-label="Async add 2"
                        onClick={() =>  dispatch(incrementAsync(2))}
                    >
                        Асинхронно добавить 2
                    </button>
                    <button
                        aria-label="Increment value"
                        onClick={() =>  dispatch(increment())}
                    >
                        Добавить 1
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Отнять 1
                    </button>
                </SC.SimpleCounter>
                <SC.AmountCounter>
                    <input
                        value={amount || ''}
                        type="number"
                        placeholder="Введите число"
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <button
                        aria-label="Increment by amount value"
                        onClick={() => handleAmount()}
                    >
                        Прибавить
                    </button>
                </SC.AmountCounter>
                <SC.AmountCounter>
                    <input
                        value={asyncAmount || ''}
                        type="number"
                        placeholder="Введите число"
                        onChange={(e) => setAsyncAmount(Number(e.target.value))}
                    />
                    <button
                        aria-label="Increment Async by amount value"
                        onClick={() => handleIncrementAsync()}
                    >
                        Асинхронно прибавить
                    </button>
                </SC.AmountCounter>
                <SC.AmountCounter>
                    <input
                        value={asyncDecAmount || ''}
                        type="number"
                        placeholder="Введите число"
                        onChange={(e) => setAsyncDecAmount(Number(e.target.value))}
                    />
                    <button
                        aria-label="Decrement Async by amount value"
                        onClick={() => handleDecrementAsync()}
                    >
                        Асинхронно отнять
                    </button>
                </SC.AmountCounter>
            </SC.Counter>
        </div>
    )
};