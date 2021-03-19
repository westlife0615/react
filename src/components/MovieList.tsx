import React, {ReactElement, useState} from "react";
import {MoviePreview} from "./MoviePreview";

/*
*
* useMemo 의 사용 케이스
* props 를 가공하는 함수가 시간 복잡도가 높다면
* 다른 props 에 의해서 리렌더링될 때, 함수 호출를 방지하기 위해서
* useMemo가 사용된다.
*
*
*
*
*
*
* */

interface Move {
    color: string;
    name : string;
}


const data : Move[] = [
    {color : "#ff00ff", name : "Harry-Porter",},
    {color : "#ff0000", name : "SpiderMan",},
    {color : "#ff00ff", name : "IronMan",},
    {color : "#ff00ff", name : "KingKong"},
];

export const MovieList = (): ReactElement =>{
    const [color, setColor] = useState<string>('red');
    const [movie, setMovie] = useState<string>('love');
    return <div>
        {
            data.map((movie)=>{
                return <div key={movie.name + movie.color} onClick={()=>{
                    setMovie(movie.name);
                setColor(movie.color)}}>{movie.name}</div>
            })
        }

        {
            movie && <MoviePreview name={movie} color={color}/>
        }
    </div>

}
