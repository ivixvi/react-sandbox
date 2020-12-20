import React, { useState } from 'react';
import {Square} from './Square';

function changeBoard(board: Array<string>, state: string, position: number): Array<string>{
    const tmpboard = board.slice()
    tmpboard[position] = state
    return tmpboard
}


export function Board(props: any) {
    const [nextPalayer, setNextPlayer] = useState(true)
    const [board, setBoard] = useState(Array(9).fill(''))
    
    function squareClickHandler(position: number) {
        // すでにクリック済みの場合は処理を行わない
        if (board[position] !== '') return void 0;
        
        setBoard(changeBoard(board,nextPalayer? '○': '×',position))
        setNextPlayer(!nextPalayer)
    }

    return (
        <div>
        <div className="status">Next Player: {nextPalayer? '○': '×'}</div>
        <div className="board-row">
            <Square value={board[0]} onClick={()=>{ squareClickHandler(0)}}/>
            <Square value={board[1]} onClick={()=>{ squareClickHandler(1)}}/>
            <Square value={board[2]} onClick={()=>{ squareClickHandler(2)}}/>
        </div>
        <div className="board-row">
            <Square value={board[3]} onClick={()=>{ squareClickHandler(3)}}/>
            <Square value={board[4]} onClick={()=>{ squareClickHandler(4)}}/>
            <Square value={board[5]} onClick={()=>{ squareClickHandler(5)}}/>
        </div>
        <div className="board-row">
            <Square value={board[6]} onClick={()=>{ squareClickHandler(6)}}/>
            <Square value={board[7]} onClick={()=>{ squareClickHandler(7)}}/>
            <Square value={board[8]} onClick={()=>{ squareClickHandler(8)}}/>
        </div>
    </div>
    );
}
