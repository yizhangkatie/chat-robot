import React from "react";
import LeftBotton from "../../components/left_button";
import TopCol from "../../components/top_col";
export default function Setting(){
    return (
        <div className="relative flex h-screen w-full justify-center">
            <LeftBotton/>
            <TopCol
            col_name={'账号设置'}/>
            <div className="absolute top-12 flex pt-12 pl-16 w-full justify-center ">
                
            </div>
            
        </div>
    )
}