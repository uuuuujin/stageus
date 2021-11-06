import React from 'react';

import styled,{css} from "styled-components";

const StyledWrap = styled.div`
    display: inline-block;
    width: 70vw;
    margin: 0 0 5rem 5rem;
`;

const StyledImage = styled.img`
    margin-right: 3rem;
    width: 23rem;
    height: 14rem;
    object-fit: scale-down;
    vertical-align: middle;
`;

const StyledTextWrap = styled.div`
    display: inline-block;
`;

const StyledTitle = styled.h1`
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const StyledContent = styled.p`
    display: inline-block;
    font-size: 1rem;
    margin: 0;
`;


const Project = (props) => {
    
    return <React.Fragment>
        <StyledWrap>
            {/* <div className="pjNumber">{props.number}</div> */}
            {/* <div className="pjImgBox"><img src={props.img}></img></div> */}
            <StyledImage src={props.img}></StyledImage>
            <StyledTextWrap>
                <StyledTitle>{props.title}</StyledTitle><br></br>
                <StyledContent>{props.content}</StyledContent>
            </StyledTextWrap>
        </StyledWrap>
    </React.Fragment>
}

export default Project;