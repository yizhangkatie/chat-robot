import React, {useState} from "react";
import LeftBotton from "../../components/left_button";
import TopCol from "../../components/top_col";

const Chat =()=>{
    const [isCareMode, setIsCareMode] =useState(true);
    const switchmode =()=>{
        setIsCareMode(!isCareMode);
    }
    return(
        <div className="flex h-screen w-full">
            <LeftBotton/>
            <div className="relative flex flex-col w-48 h-full bg-gray-100 items-center">
                <div className="w-full h-12 bg-gray-100 border border-gray-200 flex items-center justify-center">
                <p className="text-black text-base ">中药问答机器人</p></div>
                <button 
                onClick={switchmode}
                className="absolute bottom-12 w-36 h-12 bg-mypurple100 rounded-lg flex items-center justify-center">
                {isCareMode?(
                    <p className="text-base">切换关怀模式</p>
                ):(
                    <p className="text-base">切换普通模式</p>
                )}
                </button>
            </div>

            <div className="relative flex flex-1 justify-center">
                
                {isCareMode?(
                    <TopCol
                    col_name={'普通模式'}/>
                ):(
                    <TopCol
                    col_name={'关怀模式'}/>
                )}
                
                <input 
                type="text" 
                className="absolute bottom-4 w-2/3 h-8 rounded-xl bg-white border border-gray-200 px-4" 
                placeholder="输入你的问题…">
                </input>
            </div>
        </div>
    )
}
export default Chat