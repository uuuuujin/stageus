import React from 'react';
import styled,{css} from "styled-components";
import {useSelector, useDispatch} from 'react-redux';

const StyledVision = styled.div`
    height: 100%;
    width: 79vw;
    margin-left: 21%;
    position: absolute;
    background-color: #f7f3e9;

    padding-top: 6%;
    padding-left: 7%;
    box-sizing: border-box;

    ${({activate}) => {
        return activate ? 'display:block' : 'display:none'
    }}
`;

const StyledParagraph = styled.div`

    & + & {
        margin-top: 9%;
    }
`;

const StyledTitle = styled.h2`
    font-size: 1.2rem;
    display: inline-block;
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 2% 0 0 5%;
    
    & > li {
        font-size: 1.1rem;
    }

    & > li + li {
        margin-top: 1rem;
    }
`;


const Vision = () => {
    const vision = useSelector(state => state.visionPage);

    return <React.Fragment>
        <StyledVision activate={vision}>
            <StyledParagraph>
                <i class="fas fa-pen paragraphIcon"></i>
                <StyledTitle>앞으로 이런 것을 공부할 거예요.</StyledTitle>
                <StyledList>
                    <li>Html canvas 태그</li>
                    <li>Css transition과 animation</li>
                    <li>Javascript 심화 문법</li>
                    <li>반응형 웹</li>
                </StyledList>
            </StyledParagraph>
            
            <StyledParagraph>
                <i class="far fa-smile paragraphIcon"></i>
                <StyledTitle>앞으로 이런 개발자가 되고 싶어요.</StyledTitle>
                <StyledList>
                    <li>즐겁게 개발하는 개발자</li>
                    <li>끊임없이 도전하고 공부하는 개발자</li>
                    <li>새로운 기술을 받아들이는 데에 포용적인 개발자</li>
                </StyledList>
            </StyledParagraph>
        </StyledVision>

    </React.Fragment>
}

export default Vision;