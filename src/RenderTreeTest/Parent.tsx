import React, {useState} from "react"
import {Child} from "./Child";

/*
* 부모 컴포넌트의 state가 변경되면
* 자식 컴포넌트 또한 무조건 리렌더링된다.
*
*
*
*
* */

export const Parent = ()=>{
    const [color, setColor] = useState<string>('aaa');
    console.log("Parent render")
    return <div>
        <button onClick={()=>{setColor('bbb')}}>bbb</button>
        <button  onClick={()=>{setColor('ccc')}}>ccc</button>
        <button  onClick={()=>{setColor('ddd')}}>ddd</button>
        <button  onClick={()=>{setColor('eee')}}>eee</button>
        <button  onClick={()=>{setColor('fff')}}>fff</button>
        <Child/>
    </div>
}