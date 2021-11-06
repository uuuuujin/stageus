const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); //json은 기본 내장이 아니여서 사용할 수 있게 설정 해줘야 함.


// cors 문제 해결
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));


app.listen(7000, (req, res)=> {   //request, response
    console.log("Server Start!");
});


//get방식에 대한 백엔드 API만들어보기 
app.get('/testing', (req,res) => { //req:받은값, res:보낼값
    const result = {
        "value": "응답"
    };    
    res.send(result);
})


app.post('/login', (req, res) => {
    let recId = req.body.id;
    let recPawd = req.body.password;

    const result = {
        "success": null
    };    

    if (recId == "stageus" && recPawd == "1234") {
        result.success = true;
    }else {
        result.success = false;
    }

    res.send(result);

})