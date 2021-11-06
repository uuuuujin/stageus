//export const SET_DIFF = 'SET_DIFF';
export const MESSAGE = "MESSAGE";
export const CHANGE_NUMBERS = 'CHANGE_NUMBERS';
export const RESETBTN = 'RESETBTN';
export const STARTBTN = 'STARTBTN';

// 길이가 16인 배열
export const changeNumbers = (lst) => ({
    type : CHANGE_NUMBERS,
    numberList : lst
})


// '게임시작', '정답입니다' 메시지
export const message = (msg) => ({
    type: MESSAGE,
    content : msg
});

//클릭한 버튼이랑 바꿀 값 갖고 있는 버튼의 인덱스 가져옴
// export const setDiff = (idx1, idx2) => ({
//     type: SET_DIFF,
//     first : idx1,
//     second : idx2
// });

export const resetBtn = (bool) => ({
    type: RESETBTN,
    boolean : bool
});

export const startBtn = (bool) => ({
    type: STARTBTN,
    boolean : bool
});