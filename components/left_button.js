import React from "react"

export default function LeftBotton() {
    return (
        <div className="flex flex-col w-16 h-full bg-white border border-gray-100 items-center space-y-4 z-10">
            <button
                onClick={() => (window.location.href = "/post/chat")}
                className="w-8 h-8 rounded-full bg-blue-100 text-black mt-12"
            >
                chat
            </button>
            <button
                onClick={() => (window.location.href = "/post/setting")}
                className="w-8 h-8 rounded-full bg-blue-100 text-black"
            >
                setting
            </button>
            {/* <button 
        onClick={() => window.location.href = "/post/history"}
        className="w-8 h-8 rounded-full bg-blue-100 text-black">
            history
        </button> */}
            <button
                onClick={() => (window.location.href = "/post/help")}
                className="w-8 h-8 rounded-full bg-blue-100 text-black"
            >
                help
            </button>
        </div>
    )
}
