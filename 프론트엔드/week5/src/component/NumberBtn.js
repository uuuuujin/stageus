import React from 'react';
import styled,{css} from "styled-components";
import {darken, lighten} from 'polished';

const StyledCell = styled.div`
    align-items: center;
    justify-content: center;
`;

const StyledBtn = styled.input`
    width: 100px;
    height: 100px;
    font-size: 35px;
    box-sizing: border-box;
    // background-color: #f2f2f2;
    border: 0.5px solid #ffffff;
    outline: none;

    

    ${props => {
        const backColor = props.backgroundColor;
        const btnId = props.id;


        if(btnId%4 == 0 || btnId%4 == 2){
            return css`
            background-color: ${backColor[0]};
            &:hover {
                background-color: ${lighten(0.05, backColor[0])};
            }`;
        }else if(btnId%4==1 || btnId%4 == 3){
            return css`
            background-color: ${backColor[1]};
            &:hover {
                background-color: ${lighten(0.05, backColor[1])};
            }
        `;}
    }}
`;



const NumberBtn = (props) => {
    return (
        <StyledCell className="cell" key={props.number}>
            <StyledBtn id={props.idx} type="button" value={props.number} onClick={props.move} backgroundColor={props.color}></StyledBtn>
        </StyledCell>
    )    
};

// 
export default NumberBtn;

