// typing.js
import React, { useState, useEffect } from "react"

const TypingEffectMessage = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index])
                index++
            } else {
                clearInterval(interval)
            }
        }, 30) // 调整时间控制打字速度
        return () => clearInterval(interval)
    }, [text])

    return <p className="break-words whitespace-normal">{displayedText}</p>
}

export default TypingEffectMessage
