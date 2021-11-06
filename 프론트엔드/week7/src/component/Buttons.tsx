import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeNumbers, message} from '../action/index';
import {startBtn} from '../action/index';
import {resetBtn} from '../action/index';
import styled, {css} from 'styled-components';


const StyledButton = styled.input`

    & + & {
        margin-left: 30px
    }

    display: inline-block;
    width: 150px;
    height: 50px;

    margin: 50px auto 0;

    font-size: 20px;
    font-weight: bold;
    border: 0 none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;

    background-color: #e2ca7f;
    color: white;

    ${({deactivate}) => {
        return deactivate ? 'pointer-events: none; color:#e6e6e6; background-color: #8e8886' : 'pointer-events: auto';
    }}
`;

const Buttons = () => {
    const reset = useSelector((state:any) => state.resetBtn);
    const start = useSelector((state:any) => state.startBtn);
    const dispatch = useDispatch();

    
    const ResetNumbers = (): void => {  
        let numbers: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,"",15];
        dispatch(changeNumbers(numbers));
    };

    const MakeNumbers = (e: any): void => {
        //const dispatch = useDispatch();
        
        dispatch(startBtn(true));
        dispatch(resetBtn(false))
        dispatch(message(''));
    
        const SameNum = (n: number): boolean  => {
            for (var j=0; j<numbers.length; j++) {
                if (n === numbers[j]) {
                    return true;
                }
            }return false;
        }
        const Disorder = (): boolean => {
            var disorder: number = 0;
            for (var j=0; j<16; j++){
                if(numbers[j]===""){
                    continue;
                }
                for (var k=j+1; k<16; k++){
                    if (numbers[k]===""){
                        continue;
                    }else if (numbers[j] > numbers[k]){
                        disorder++;
                    }
                }
            }if (disorder % 2 != 0){
                return true;
            }
        }
        var numbers: any[];
        while (true) {
            numbers = []; 
            var i = 0;
            while (i < 16) {
                var n: number = Math.floor(Math.random()*16) + 1;
                if (! SameNum(n)) {
                    numbers.push(n);
                    i++;
                }
            }
            for (var k=0; k<numbers.length; k++){
                if (numbers[k]===16){
                    numbers[k] = '';
                }
            }
            if (! Disorder()){
                dispatch(changeNumbers(numbers)); 
                break
            }
        }
    };


    return <React.Fragment>
       <StyledButton deactivate={start} id="startBtn" className="startBtn" type="button" value="New Game" onClick={MakeNumbers}></StyledButton>
       <StyledButton deactivate={reset} className="resetBtn" type="button" value="Reset" onClick={ResetNumbers}></StyledButton>
    </React.Fragment>
};

export default Buttons;