import React, { useState } from 'react';
import './Keyboard.css';
import InputField from './InputField';

const Keyboard = () => {
    const [input, setInput] = useState('');
    const [shiftPressed, setShiftPressed] = useState(false);
    const [capsLockEnabled, setCapsLockEnabled] = useState(false);
  
    const handleKeyClick = (char) => {
        if(char === 'Space'){
            setInput(input+" ");
            return;
        }else if (char === 'Clear') {
          setInput('');
        } else if (char === 'Backspace') {
          setInput(input.slice(0, -1));
        } else if (char === 'Shift') {
          setShiftPressed(true);
          return;
        } else if (char === 'Caps Lock') {
          setCapsLockEnabled(!capsLockEnabled);
        } 
        else {
          let typedChar = char;
          if (shiftPressed) {
            switch (char) {
              case '1':
                typedChar = '!';
                break;
              case '2':
                typedChar = '@';
                break;
              case '3':
                typedChar = '#';
                break;
              case '4':
                typedChar = '$';
                break;
              case '5':
                typedChar = '%';
                break;
              case '6':
                typedChar = '^';
                break;
              case '7':
                typedChar = '&';
                break;
              case '8':
                typedChar = '*';
                break;
              case '9':
                typedChar = '(';
                break;
              case '0':
                typedChar = ')';
                break;
              default:
                typedChar = char;
            }
            setShiftPressed(false);
        }
        setInput(input + typedChar);
    }
      };
    function handleAlphaKeys(char){
        let typedChar;
        if (shiftPressed || (capsLockEnabled && !shiftPressed)) {
            typedChar = char.toUpperCase();
            } else {
            typedChar = char.toLowerCase();
            }
            setShiftPressed(false);
            setInput(input + typedChar);
    }

  return (
    <div className="keyboard">
      <InputField value = {input}/>
      <div className="keys">
        <div className="row">
        <button onClick={() => handleKeyClick('1')}>1<br />!</button>
        <button onClick={() => handleKeyClick('2')}>2<br />@</button>
        <button onClick={() => handleKeyClick('3')}>3<br />#</button>
        <button onClick={() => handleKeyClick('4')}>4<br />$</button>
        <button onClick={() => handleKeyClick('5')}>5<br />%</button>
        <button onClick={() => handleKeyClick('6')}>6<br />^</button>
        <button onClick={() => handleKeyClick('7')}>7<br />&</button>
        <button onClick={() => handleKeyClick('8')}>8<br />*</button>
        <button onClick={() => handleKeyClick('9')}>9<br />(</button>
        <button onClick={() => handleKeyClick('0')}>0<br />)</button>
        <button onClick={() => handleKeyClick('Backspace')}>Backspace</button>
        </div>
        <div className="row">
          <button onClick={() => handleAlphaKeys('Q')}>Q</button>
          <button onClick={() => handleAlphaKeys('W')}>W</button>
          <button onClick={() => handleAlphaKeys('E')}>E</button>
          <button onClick={() => handleAlphaKeys('R')}>R</button>
          <button onClick={() => handleAlphaKeys('T')}>T</button>
          <button onClick={() => handleAlphaKeys('Y')}>Y</button>
          <button onClick={() => handleAlphaKeys('U')}>U</button>
          <button onClick={() => handleAlphaKeys('I')}>I</button>
          <button onClick={() => handleAlphaKeys('O')}>O</button>
          <button onClick={() => handleAlphaKeys('P')}>P</button>
        </div>
        <div className="row">
        <button
            className={capsLockEnabled ? 'active' : ''}
            onClick={() => handleKeyClick('Caps Lock')}
          >
            Caps Lock
          </button>
          <button onClick={() => handleAlphaKeys('A')}>A</button>
          <button onClick={() => handleAlphaKeys('S')}>S</button>
          <button onClick={() => handleAlphaKeys('D')}>D</button>
          <button onClick={() => handleAlphaKeys('F')}>F</button>
          <button onClick={() => handleAlphaKeys('G')}>G</button>
          <button onClick={() => handleAlphaKeys('H')}>H</button>
          <button onClick={() => handleAlphaKeys('J')}>J</button>
          <button onClick={() => handleAlphaKeys('K')}>K</button>
          <button onClick={() => handleAlphaKeys('L')}>L</button>
        </div>
        <div className="row">
          <button onClick={() => handleKeyClick('Shift')}>Shift</button>
          <button onClick={() => handleAlphaKeys('Z')}>Z</button>
          <button onClick={() => handleAlphaKeys('X')}>X</button>
          <button onClick={() => handleAlphaKeys('C')}>C</button>
          <button onClick={() => handleAlphaKeys('V')}>V</button>
          <button onClick={() => handleAlphaKeys('B')}>B</button>
          <button onClick={() => handleAlphaKeys('N')}>N</button>
          <button onClick={() => handleAlphaKeys('M')}>M</button>

        </div>
        <div className="row">
          <button onClick={() => handleKeyClick('Space')} style={{width:'300px'}}>Space</button>
          <button onClick={() => handleKeyClick('Clear')}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
