import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled,{css} from "styled-components";
import {aboutBtn, projectBtn, visionBtn, aboutPage, projectPage, visionPage} from '../action/index'


const StyledBtnList = styled.div`
    height: 18%;
    display:flex; 
    justify-content:space-between;
    flex-direction: column;
`;

const StyledBtn = styled.span`
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    height: 2rem;
    text-align:middle;
    color: white;

    &:hover {
        font-weight: bold;
    }

    ${({activate}) => {
        return activate ? 'font-weight:bold; ' : 'font-weight:normal'
    }}
`;


const MenuBtn = () => {
    const about = useSelector(state => state.aboutBtn);
    const project = useSelector(state => state.projectBtn);
    const vision = useSelector(state => state.visionBtn);

    const dispatch = useDispatch();

    const AboutButton = () => {
        dispatch(aboutBtn(true));
        dispatch(projectBtn(false));
        dispatch(visionBtn(false));
    
        dispatch(aboutPage(true));
        dispatch(projectPage(false));
        dispatch(visionPage(false));
    }

    const ProjectButton = () => {
        dispatch(projectBtn(true));
        dispatch(aboutBtn(false));
        dispatch(visionBtn(false));

        dispatch(projectPage(true));
        dispatch(aboutPage(false));
        dispatch(visionPage(false));
    }

    const VisionButton = () => {
        dispatch(visionBtn(true));
        dispatch(aboutBtn(false));
        dispatch(projectBtn(false));
        
        dispatch(projectPage(false));
        dispatch(aboutPage(false));
        dispatch(visionPage(true));
    }

    return <React.Fragment>
        <StyledBtnList>
            <StyledBtn activate={about} onClick={AboutButton}>ABOUT</StyledBtn>
            <StyledBtn activate={project} onClick={ProjectButton} >PROJECTS</StyledBtn>
            <StyledBtn activate={vision} onClick={VisionButton} >VISION</StyledBtn>
        </StyledBtnList>
    </React.Fragment>

}

export default MenuBtn;