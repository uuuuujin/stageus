import {useSelector, useDispatch} from 'react-redux';
import {changeNumbers} from '../action/index';
import {message} from '../action/index';
import {resetBtn} from '../action/index';
import {startBtn} from '../action/index';
import NumberBtn from './NumberBtn';
import Buttons from './Buttons'
import React from 'react';
import {useEffect} from 'react';
import styled,{css} from "styled-components";
import {darken, lighten} from 'polished';

const StyledMsg = styled.h1`
    font-size: 20px;
    display: inline-block;
    margin: 70px 0;
`;
const StyledBoard = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 500px;
    height: 600px;
    background-color : #6295b7;  
`;

const StyledWrap = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px;
    grid-template-columns: 100px 100px 100px 100px;
    padding: 50px 50px 0 50px;
    position: relative;
`;


const GameBoard = (state) => {
    const dispatch = useDispatch();
    const msg = useSelector(state => state.message);   //store에서 값을 가져와 줌

    const num0 = useSelector(state => state.num0);
    const num1 = useSelector(state => state.num1);
    const num2 = useSelector(state => state.num2);
    const num3 = useSelector(state => state.num3);
    const num4 = useSelector(state => state.num4);
    const num5 = useSelector(state => state.num5);
    const num6 = useSelector(state => state.num6);
    const num7 = useSelector(state => state.num7);
    const num8 = useSelector(state => state.num8);
    const num9 = useSelector(state => state.num9);
    const num10 = useSelector(state => state.num10);
    const num11 = useSelector(state => state.num11);
    const num12 = useSelector(state => state.num12);
    const num13 = useSelector(state => state.num13);
    const num14 = useSelector(state => state.num14);
    const num15 = useSelector(state => state.num15);

    const numberList:any[] = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15];

    const ArrCompare = ():void => {
        const correctList:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''];
        if(numberList.toString()==correctList.toString()){
            dispatch(message('정답입니다~! 새 게임을 시작하고 싶다면 New Game을 누르세요 ^0^'));
            dispatch(startBtn(false));
            dispatch(resetBtn(true));
        }
    }

    useEffect(() => {
        ArrCompare();
    }, [numberList]);

    let blankCell: number;
    let blankSide: number[];
    const SideNumbers = ():void => {
        blankCell = numberList.indexOf(''); //빈 곳 위치 저장
        blankSide = [blankCell-4,blankCell+4,blankCell-1,blankCell+1]; //빈칸 기준 상하좌우 인덱스 넣기
        if(blankCell<4){
            blankSide[0] = -1;
        }else if(blankCell>11){
            blankSide[1] = -1;
        }else if (blankCell%4==0){
            blankSide[2] = -1;
        }else if (blankCell%4==3){
            blankSide[3] = -1;
        }
    }

    const NumberMove = (e: any): void => {
        SideNumbers();
        for (let a of blankSide){
            if (e.target.id==a) {
                numberList[blankCell] = e.target.value;
                numberList[a] ='';
                dispatch(changeNumbers(numberList));
            }
        }
    }

    const colors: string[] = ['#d3e4e7', '#eed0b8'];
    const cells = numberList.map((num, index) => {
        return <NumberBtn key={num} number={num} idx={index} move={NumberMove} color={colors}/>
    })

    return <React.Fragment>
            <StyledMsg>{msg}</StyledMsg>
            <StyledBoard>
                <StyledWrap>
                    {cells}
                </StyledWrap>    
                <Buttons/>
            </StyledBoard>
        </React.Fragment>
}


export default GameBoard;
