import React, {ChangeEvent, FormEvent} from 'react';
import { useState } from 'react'
import styles from './PinCode.module.css';

export function PinCode({}) {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);
    const [text, setText] = useState("");
    const rightCode = [9, 9, 9, 9];

    function submitHandler({e}: { e: any }) {
        setText('');
        if ((numbers.length + 1) >= 5)
        {
            let arr = numbers;
            arr.shift();
            setNumbers([...arr, Number(e.target.value)]);
        } else { setNumbers([...numbers, Number(e.target.value)]);}
    }

    function testHandler({e}: { e: any }) {
        if (numbers.length < 4) {
            return setText('Пин-код состоит из 4-ёх символов')
        }
        if (numbers.length !== rightCode.length)
        {
            return setText("Неверно");
        }
        for (let i = 0, len = numbers.length; i < len; i++){
            if (numbers[i] !== rightCode[i])
            {
                return setText("Неверно");
            }
        }
        return setText("Успешно");
    }

 return <div className={styles.container}>
     {numbers}
     <br/>
         <button className={styles.numbers} value={9} onClick={e => submitHandler({e: e})}>9</button>
         <button className={styles.numbers} value={8} onClick={e => submitHandler({e: e})}>8</button>
         <button className={styles.numbers} value={7} onClick={e => submitHandler({e: e})}>7</button>
         <br/>
         <button className={styles.numbers} value={6} onClick={e => submitHandler({e: e})}>6</button>
         <button className={styles.numbers} value={5} onClick={e => submitHandler({e: e})}>5</button>
         <button className={styles.numbers} value={4} onClick={e => submitHandler({e: e})}>4</button>
         <br/>
         <button className={styles.numbers} value={3} onClick={e => submitHandler({e: e})}>3</button>
         <button className={styles.numbers} value={2} onClick={e => submitHandler({e: e})}>2</button>
         <button className={styles.numbers}value={1} onClick={e => submitHandler({e: e})}>1</button>
         <br/>
         <button className={styles.butt} onClick={() => {setNumbers([]);  setText('')}}>Удалить</button>
         <button className={styles.numbers} value={0} onClick={e => submitHandler({e: e})}>0</button>
         <button className={styles.butt} onClick={e => testHandler({e: e})}>Отправить</button>
     <br/>
     <label>{text}</label>
    </div>
}
