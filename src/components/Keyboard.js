import React, { useCallback, useEffect, useContext } from 'react'
import Key from './Key';
import {AppContext} from '../App';

function Keyboard() {
    const { onDelete, onEnter, onSelectLetter, disabledLetters } = useContext(AppContext);
    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys2 = ["A","S","D","F","G","H","J","K","L"];
    const keys3 = ["Z","X","C","V","B","N","M"];

    const handleKeyBoard = useCallback((event) => {
        if(event.key === "Enter"){
            onEnter();
        }else if(event.key === "Backspace"){
            onDelete();
        }else{
            keys1.forEach((key) => {
                if(event.key === key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
            keys2.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
            keys3.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
        }
    })
    useEffect( () => {
        document.addEventListener("keydown", handleKeyBoard)
        return () => {
            document.removeEventListener("keydown", handleKeyBoard)
        }
    }, [handleKeyBoard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyBoard}>
        <div className='line1'>
            {keys1.map((item) => {
                return <Key key={item} keyVal = {item} disabled={disabledLetters.includes(item)}/>
            })}
        </div>
        <div className='line2'>
            {keys2.map((item) => {
                return <Key key={item} keyVal = {item} disabled={disabledLetters.includes(item)}/>
            })}
        </div>
        <div className='line3'>
        <Key keyVal = {"ENTER"} bigKey/>
            {keys3.map((item) => {
                return <Key key={item} keyVal = {item} disabled={disabledLetters.includes(item)}/>
            })}
        <Key keyVal = {"DELETE"} bigKey/>
        </div>
    </div>
  )
}

export default Keyboard