import React, {useMemo} from "react"

const uselessFunction = (s: string) : string=>{
    console.log('uselessFunction')
    return s + '____really useless!!!'
}

const uselessColor = (c: string) : string=>{
    console.log('uselessColor')
    return c
}

interface MoviePreviewProps {
    name : string;
    color: string;
}

export const MoviePreview = (props : MoviePreviewProps)=>{

    // 메모이제이션 사용 전
    // const name = uselessFunction(props.name);
    // const color = uselessColor(props.color);
    // 메모이제이션 사용 전

    // 메모이제이션 사용 후
    const name = useMemo(()=>uselessFunction(props.name), [props.name])
    const color = useMemo(()=>uselessColor(props.color), [props.color])
    // 메모이제이션 사용 후

    return <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <hr/>
        <hr/>
        {name}
        <div style={{width: '100px', height: '200px', backgroundColor : color}}/>
    </div>
}