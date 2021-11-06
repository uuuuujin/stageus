import {ABOUTBTN, PROJECTBTN, VISIONBTN,ABOUTPAGE, PROJECTPAGE, VISIONPAGE} from "../action/index";


const initState = {
    aboutBtn : true,
    projectBtn: false,
    visionBtn : false,
    
    aboutPage : true,
    projectPage : false,
    visionPage: false,
    

    projects : [
        {
            number: 1,
            title: '유튜브 클론코딩',
            image: 'youtube.png',
            content : '유튜브 메인페이지 클론 코딩'
        },
        {
            number: 2,
            title: '숫자 drag & drop',
            image: 'numberDragDrop.png',
            content : '드래그 앤 드랍해서 1~9까지 정렬'
        },
        {
            number: 3,
            title: '일정기록 프로그램 Daily',
            image: 'mainpage.png',
            content : '날짜별로 일정을 쓸 수 있는 프로그램'
        },
        {
            number: 4,
            title: '숫자야구 게임',
            image: 'baseball.png',
            content : '숫자 맞추기 게임'
        },
        {
            number: 5,
            title: '4X4 슬라이딩 게임',
            image: 'slidingGame.png',
            content : '1~15까지 숫자 정렬하는 게임'
        }
    ]
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ABOUTBTN:
            return {...state, aboutBtn: action.boolean}
        case PROJECTBTN:
            return {...state, projectBtn: action.boolean}
        case VISIONBTN:
            return {...state, visionBtn: action.boolean}
        case ABOUTPAGE:
            return {...state, aboutPage: action.boolean}
        case PROJECTPAGE:
            return {...state, projectPage: action.boolean}
        case VISIONPAGE:
            return {...state, visionPage: action.boolean}
    default:
            return state;
    }
}

export default reducer

