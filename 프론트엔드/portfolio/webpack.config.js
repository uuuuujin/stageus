const path = require('path'); //내가 만든 프로젝트의 경로를 webpack이 알아서 가져옴

module.exports = {
    mode: 'development',

    resolve : {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: {
        app: ['./src/index']
    },

    module: {
        rules: [
            {
                test: /\.(js | jsx | ts | tsx)?/, 
                loader: 'babel-loader',  //어떤 파일을 쓰냐에 따라 loader도 달라짐
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname,'public' ),//resolve : 상세 경로로 들어갈때 쓰는 명령어
        filename: 'bundle.js'
    },
    
    devServer: {
        contentBase: path.resolve(__dirname,'public'), //변화를 업로드할 파일을 알려줌
        port: 8000 //개발자 전용서버 (개발할 때만 사용하는거)
    }
}