// const func1 = () => {
//     console.log(1);
// }
// const func2 = () => {
//     setTimeout(() => {
//         console.log(2);
//     }, 0)
// }
// const func3 = () => {
//     console.log(3);
// }
// func1();
// func2();
// func3();

// const addOne = (value, recCallback) => {
//     setTimeout(() => {
//         value += 1;
//         recCallback(value);
//     },0)
// };

// console.log(addOne(3));

// addOne(3, (recValue) => {
//     console.log(recValue); //컴포넌트를 업데이트 하는 내용
// });



//fetch 구성요소
//fetch("주소", "옵션")
//get방식
fetch("http://localhost:7000/testing")
    .then((response) => response.json())  //값을 받아오는 것 (나는 값을 json으로 받을거다!)
    .then((result) => {   //그 값에 대해 내가 처리 해주는 것(값이 잘 가져왔으면!)
        console.log(result.value);
    })     
    .catch((e) => {    //프로그램을 멈추지 않고 콘솔에 에러 출력
        console.log(e);
    }); 


//post방식
fetch("http://localhost:7000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body : JSON.stringify({   //json이 단순히 보내지지가 않아서...
        "id" : "stageus",
        "password" : "123"
    })
})
.then((response) => response.json())  //값을 받아오는 것 (나는 값을 json으로 받을거다!)
.then((result) => {   //그 값에 대해 내가 처리 해주는 것(값이 잘 가져왔으면!)
    console.log(result);
    if (result.success) {
        alert("로그인 성공");
    }else {
        alert("로그인 실패");
    }
})     
.catch((e) => {    //프로그램을 멈추지 않고 콘솔에 에러 출력
    console.log(e);
}); 