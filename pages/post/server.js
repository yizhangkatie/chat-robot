// const express = require("express")
// const cors = require("cors") // 解决跨域问题

// const app = express()
// const port = 3001 

// app.use(cors()) // 允许跨域访问
// app.use(express.json()) // 解析 JSON 数据

// // 定义 API 路径
// app.post("/api/simulate", (req, res) => {
//     const inputData = req.body.input // 从请求体中获取输入数据
//     const modifiedData = inputData + " (哇卡哇卡哇卡)" // 修改数据
//     res.json({ output: modifiedData }) // 返回修改后的数据
// })

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// })


const express = require("express");
const cors = require("cors"); // 解决跨域问题

const app = express();
const port = 3001;

app.use(cors()); // 允许跨域访问
app.use(express.json()); // 解析 JSON 数据
app.get("/", (req, res) => {
    res.send("Hello, welcome to the API!");
});
// 处理聊天消息的 API 路由
app.post("10.120.1.91:3001/api/message", (req, res) => {
    const userMessage = req.body.message; // 从请求体中获取用户输入的消息

    if (!userMessage) {
        return res.status(400).json({ success: false, message: "No message provided" });
    }

    // 模拟后端处理消息（例如，简单的 echo）
    const botReply = `Echo: ${userMessage} (处理完毕)`; // 这里可以根据需要修改为实际的处理逻辑

    // 返回修改后的消息
    res.json({ success: true, reply: botReply });
});

app.listen(port, () => {
    console.log(`Server is running on 10.120.1.91:${port}`);
});