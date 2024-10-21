const express = require("express")
const cors = require("cors") // 解决跨域问题

const app = express()
const port = 3001 // 你可以使用任意端口号

app.use(cors()) // 允许跨域访问
app.use(express.json()) // 解析 JSON 数据

// 定义 API 路径
app.post("/api/simulate", (req, res) => {
    const inputData = req.body.input // 从请求体中获取输入数据
    const modifiedData = inputData + " (哇卡哇卡哇卡)" // 修改数据
    res.json({ output: modifiedData }) // 返回修改后的数据
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
