import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled,{css} from "styled-components";


const StyledAbout = styled.div`
    height: 100%;
    width: 79vw;
    margin-left: 21vw;
    position: absolute;
    background-color: #f7f3e9;

    padding-top:5%;
    padding-right: 10%;
    box-sizing: border-box;

    ${({activate}) => {
        return activate ? 'display:block' : 'display:none'
    }}
`;

const StyledHello = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-left: 7%;
`;

const StyledIntroduction = styled.p`
    margin: 4% 0 0 12%;
    font-size: 1rem;
    line-height: 2rem;
`;

const StyledParagraph = styled.div`
    margin: 7% 0 0 10%;
`;


const StyledTitle = styled.h2`
    font-size: 1.2rem;
    display: inline-block;
`;

const StyledContents = styled.div`
    display: block;
    margin: 2% 0 0 5%;
    font-size: 1rem;

    & > p + p {
        margin-top: 0.8rem;
    }
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 2% 0 0 5%;
    
    & > li {
        font-size: 1rem;
    }

    & > li + li {
        margin-top: 0.8rem;
    }
`;


const About = () => {

    const about = useSelector(state => state.aboutPage);


    return <React.Fragment>
        <StyledAbout activate={about}>
            <StyledHello>안녕하세요, 프론트엔드 개발자를 꿈꾸는 정유진입니다. </StyledHello>
            <StyledIntroduction>4학년으로의 복학을 3개월 앞두고 자신이 원하는 프로그램을 뚝딱뚝딱 만드는 개발자의 모습에 반해 무작정 개발 공부를 시작했습니다. 
            고민하고 찾아보며 문제를 하나씩 해결하는 과정에서 큰 재미를 느끼고 현재도 즐겁게 공부하고 있습니다.  
                <br></br>
            </StyledIntroduction>
            <StyledParagraph>
                <i class="fas fa-laptop-code paragraphIcon"></i>
                <StyledTitle>저는 이런 것을 다룰 줄 알아요.</StyledTitle>
                <StyledContents>Html - Css - Javascript - React</StyledContents>
            </StyledParagraph>
            
            <StyledParagraph>
                <i class="fas fa-school paragraphIcon"></i>
                <StyledTitle>저는 이런 것을 배웠어요.</StyledTitle>
            
                <StyledList>
                    <li>인하대학교 산업경영공학 / 통계학</li>
                    <li>Stageus 웹 기초 수료</li>
                    <li>Stageus 웹 심화 (프론트엔드) 수료 예정</li>
                </StyledList>
            </StyledParagraph>
            
        </StyledAbout>
    </React.Fragment>
}

export default About;