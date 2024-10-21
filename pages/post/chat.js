import React, { useState, useRef, useEffect } from "react"
import LeftBotton from "../../components/left_button"
import TopCol from "../../components/top_col"

const Chat = () => {
    const [isCareMode, setIsCareMode] = useState(true)
    const switchmode = () => {
        setIsCareMode(!isCareMode)
    }

    const [inputData, setInputData] = useState("")
    const [messages, setMessages] = useState([])
    const messageEndRef = useRef(null)

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleSubmit = () => {
        // 调用后端 API
        const newMessage = { type: "input", text: inputData }
        fetch("http://localhost:3001/api/simulate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ input: inputData }),
        })
            .then((response) => response.json())
            .then((data) => {
                const outputMessage = { type: "output", text: data.output }
                setMessages((prevMessages) => [
                    ...prevMessages,
                    newMessage,
                    outputMessage,
                ])
                setInputData("") 
            })
            .catch((error) => {
                console.error("Error:", error)
            })
    }
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
    return (
        <div className="flex h-screen w-full">
            <LeftBotton />
            <div className="relative flex flex-col w-48 h-full bg-gray-100 items-center">
                <div className="w-full h-12 bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <p className="text-black text-base ">中药问答机器人</p>
                </div>
                <button
                    onClick={switchmode}
                    className="absolute bottom-12 w-36 h-12 bg-mypurple100 rounded-lg flex items-center justify-center"
                >
                    {isCareMode ? (
                        <p className="text-base">切换关怀模式</p>
                    ) : (
                        <p className="text-base">切换普通模式</p>
                    )}
                </button>
            </div>

            <div className="relative flex flex-1 justify-center">
                {isCareMode ? (
                    <TopCol col_name={"普通模式"} />
                ) : (
                    <TopCol col_name={"关怀模式"} />
                )}
                <div className="absolute top-0 w-full h-full flex flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex flex-col w-full h-full pt-12 items-center justify-center"
                    >
                        {/* 消息显示区域 */}
                        <div className="flex-1 overflow-y-auto pr-40 py-12 w-full flex flex-col items-end">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`w-4/5 text-black text-justify ${message.type === "input" ? "max-w-md bg-gray-200 rounded-lg p-4" : "max-w-2xl "} my-4`}
                                >
                                    <p className="break-words whitespace-normal">
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                            <div ref={messageEndRef} />
                        </div>

                        {/* 输入框和按钮 */}
                        <div className="absolute bottom-4 flex w-2/3 space-x-6">
                            <input
                                type="text"
                                value={inputData}
                                onChange={handleInputChange}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault() // 阻止默认的表单提交行为
                                        handleSubmit() 
                                    }
                                }}
                                className="w-full h-8 rounded-xl bg-white border border-gray-200 px-4"
                                placeholder="输入你的问题…"
                            />
                            <button
                                type="button"
                                className="w-8 h-8 rounded-full bg-green-100"
                                onClick={handleSubmit}
                            >
                                ↑
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Chat
