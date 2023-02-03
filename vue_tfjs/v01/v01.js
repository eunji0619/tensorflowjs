const express = require("express");
const history = require("connect-history-api-fallback")
const { createProxyMiddleware } = require("http-proxy-middleware")
const path = require("path");
const logger = require("morgan");
const app = express();
const cw = require('./public/crawling.js');

const _path = path.join(__dirname, "./dist");
console.log(_path);
app.use(history())
app.use("/", express.static(_path));
app.use(logger("tiny"));
app.use(
    createProxyMiddleware('/v1', {
        target: "https://openapi.naver.com",
        changeOrigin: true
    })
)
app.get("/hak", (req, res) => {
    cw.ax().then((v) => {
        console.log(v)
        // res.send(v) //send는 2개 쓸수 없음
        res.send(v);
    })
});

app.listen(3000, () => {
    console.log(3000 + " 로 연결되었습니다.");
});