//초기화 버튼 -->  deactivate였다가 게임이 시작되면 activate됨
// 역할 : 숫자 순서가 1~14, “”, 15로 맞춰지게

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeNumbers} from '../action/index';
import styled, {css} from 'styled-components'
import {darken, lighten} from 'polished';


export const StyledResetButton = styled.input`
    display: inline-block;
    width: 150px;
    height: 50px;
    margin: 50px 0 0 30px;
    font-size: 20px;
    font-weight: bold;
    border: 0 none;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    background-color: #e2ca7f;
    color: white;
    

    ${({deactivate}) => {
        return deactivate ? 'pointer-events: none; color:#e6e6e6; background-color: #8e8886;' : 'pointer-events: auto';
    }}
`;

const ResetBtn = () => {
    const dispatch = useDispatch();
    const reset = useSelector(state => state.resetBtn);

    const ResetNumbers = () => {
        let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,"",15];
        dispatch(changeNumbers(numbers));
    };

    return (
        <StyledResetButton deactivate={reset} className="resetBtn" type="button" value="Reset" onClick={ResetNumbers}></StyledResetButton>
    )
};

export default ResetBtn;
