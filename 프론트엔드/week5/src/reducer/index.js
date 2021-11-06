import {CHANGE_NUMBERS, MESSAGE, RESETBTN, STARTBTN} from "../action/index";

const initState = {
    // numbers : {
    //     num0:0,
    //     num1:1,
    //     num2:2,
    //     num3:3,
    //     num4:4,
    //     num5:5,
    //     num6:6,
    //     num7:7,
    //     num8:8,
    //     num9:9,
    //     num10:10,
    //     num11:11,
    //     num12:12,
    //     num13:13,
    //     num14:14,
    //     num15:15
    // },
    num0:0,
    num1:1,
    num2:2,
    num3:3,
    num4:4,
    num5:5,
    num6:6,
    num7:7,
    num8:8,
    num9:9,
    num10:10,
    num11:11,
    num12:12,
    num13:13,
    num14:14,
    num15:15,
    
    message : 'Game Start 버튼을 눌러 게임을 시작하세요.',

    resetBtn : true,
    startBtn : false    
}

const reducer = (state=initState, action) => {
    switch(action.type) {
        case CHANGE_NUMBERS:
            return {...state, num0:action.numberList[0], num1:action.numberList[1],  num2:action.numberList[2],  num3:action.numberList[3],  num4:action.numberList[4],  num5:action.numberList[5],  num6:action.numberList[6],  num7:action.numberList[7],  num8:action.numberList[8],  num9:action.numberList[9],  num10:action.numberList[10],  num11:action.numberList[11],  num12:action.numberList[12],  num13:action.numberList[13],  num14:action.numberList[14],  num15:action.numberList[15]}
        case MESSAGE:
            return {...state, message: action.content};
        case RESETBTN:
            return {...state, resetBtn: action.boolean};
        case STARTBTN:
            return {...state, startBtn: action.boolean};
        // case SET_DIFF:
        //     return {...state };   
        default:
            return state;
    }
}

export default reducer

