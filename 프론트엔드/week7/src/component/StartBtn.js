import {useSelector, useDispatch} from 'react-redux';
import {message, changeNumbers} from '../action/index';
import styled, {css} from 'styled-components'
import React from 'react'
import {startBtn} from '../action/index'
import {resetBtn} from '../action/index'

//import {darken, lighten} from 'polished';


const StyledButton = styled.input`
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

    background-color: #e2ca7f;
    color: white;

    ${({deactivate}) => {
        return deactivate ? 'pointer-events: none; color:#e6e6e6; background-color: #8e8886' : 'pointer-events: auto';
    }}
`;


const StartButton = (props) => {
    const dispatch = useDispatch();
    const start = useSelector(state => state.startBtn);

    const MakeNumbers = (e) => {
        dispatch(startBtn(true));
        dispatch(resetBtn(false))
        dispatch(message(''));
    
        const SameNum = (n)  => {
            for (var j=0; j<numbers.length; j++) {
                if (n === numbers[j]) {
                    return true;
                }
            }return false;
        }
        const Disorder = () => {
            var disorder = 0;
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
        var numbers;
        while (true) {
            numbers = []; 
            var i = 0;
            while (i < 16) {
                var n = Math.floor(Math.random()*16) + 1;
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

    return (
        <StyledButton deactivate={start} id="startBtn" className="startBtn" type="button" value="New Game" onClick={MakeNumbers}></StyledButton>
    )
}

export default StartButton;