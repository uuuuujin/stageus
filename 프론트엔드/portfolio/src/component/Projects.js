import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled,{css} from "styled-components";
import Project from './Project'

const StyledProject = styled.div`
    height: 100%;
    // width: 77.8vw;
    margin-left: 21vw;
    background-color: #f7f3e9;    

    padding-top: 3rem;
    padding-right: 5%;
    box-sizing: border-box;
    
    ${({activate}) => {
        return activate ? 'display:block' : 'display:none'
    }}
`;



const Projects = () => {
    const projects = useSelector(state => state.projects);
    const projectPage = useSelector(state => state.projectPage);
    
    
    const pjArray = [0,1,2,3,4];

    const projectList = pjArray.map(i => {
        return <Project number={projects[i].number} title={projects[i].title} img={projects[i].image} content={projects[i].content}/>
    })

    // const aa = () => {
    //     for(var i=0;i<5;i++){
    //         return <Project number={projects[i].number} title={projects[i].title} img={projects[i].image} content={projects[i].content}/>
    //     }
    // }
    

    return <React.Fragment>
        <StyledProject activate={projectPage}>
            {projectList}
        
            <div className="pageArrow">
                <i className="fas fa-chevron-left arrow"></i>
                <i className="fas fa-chevron-right arrow"></i>
            </div>
        
        </StyledProject>
    </React.Fragment>
}

export default Projects;