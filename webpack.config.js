// import
const path = require("path"); // path는 전역 모듈
const HtmlPlugin = require("html-webpack-plugin"); // html-webpack-plugin 가져오기
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정 (main.js에서부터 읽어들이기 시작한다는 뜻)
  // package.json에서, parcel index.html 은 parcel이 index.html을 진입점으로 설정한다는 뜻
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // dist 폴더에 반환 (path는 필수적으로 절대경로로 써야 한다.)
    // path: path.resolve(__dirname, "dist"), // resolve 함수는 두 개의 매개변수를 이어준다. (__dirname : webpack.config.js가 있는 위치 (현재 위치) 의 경로)
    // filename: "main.js",
    clean: true, // Output 폴더에서, 기존에 만들었던 결과물들을 모두 삭제
  },
  module: {
    rules: [
      {
        test: /\.s?css$/, // .css 또는 .scss로 끝나는($) 파일을 검색
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
