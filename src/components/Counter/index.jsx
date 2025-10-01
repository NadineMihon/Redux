import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../slices/counter/counterSlice";
import * as SC from './styles'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState();

    const handleAmount = () => {
        dispatch(incrementByAmount(amount));
        setAmount(null);
    };

    return (
        <div>
            <SC.Counter>
                <SC.SimpleCounter>
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
            </SC.Counter>
        </div>
    )
};