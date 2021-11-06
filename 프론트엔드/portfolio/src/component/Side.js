import React from 'react';
import styled,{css} from "styled-components";
import MenuBtn from './MenuBtn';


const StyledWrap = styled.div`
    position: fixed;
    overflow: hidden;
    width: 21vw;
    height: 100%;
    background-color: #90d5d0;
    text-align: center;
`;

const StyledProfileImg = styled.img`
    width: 12rem;
    height: 12rem;
    margin: 2.5rem auto 0;
    border-radius: 100%;
`;

const StyledName = styled.span`
    display: inline-block;
    margin: 1.5rem auto 4rem;
    font-size: 2rem;
    font-weight: bold;
    color: white;
`;

const StyledContactWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

     & > a + a {
        margin-left: 1rem;
    }
    
    // & i {
    // font-size: 1.5rem;
    // color: white;
    // }
`;

const StyledPhrase = styled.span`
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
    color: white;
`;

const Side = () => {

    return <React.Fragment>
        
        <StyledWrap>
            {/* <div className="imgBox">
                <img className="myImg" src="myImage.jpg" alt="내 이미지"></img>
            </div> */}
            <StyledProfileImg src="myImage.jpg" alt="내 이미지"></StyledProfileImg>
            <StyledName>Jeong YuJin</StyledName>

            <MenuBtn/>

            <StyledContactWrap>
                <StyledPhrase>GET IN TOUCH</StyledPhrase>
                <a href="https://blog.naver.com/youjinee98" target="_blank"><i className="fas fa-blog icon"></i></a>
                <a href="https://github.com/uuuuujin" target="_blank"><i className="fab fa-github icon"></i></a>
            </StyledContactWrap>
            
        </StyledWrap>
       
        
    </React.Fragment>
}

export default Side;