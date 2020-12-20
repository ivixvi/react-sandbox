import React, { useState } from 'react';
import {Square} from './Square';

function changeBoard(board: Array<string>, state: string, position: number): Array<string>{
    const tmpboard = board.slice()
    tmpboard[position] = state
    return tmpboard
}

function calculateWinner(squares: Array<string>): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return '';
}

export function Board(props: any) {
    const [isGameOver, setIsGameOver] = useState(false)
    const [nextPalayer, setNextPlayer] = useState(true)
    const [state, setState] = useState(`NextPlayer: ${nextPalayer? '○': '×'}`)
    const [board, setBoard] = useState(Array(9).fill(''))
    
    function squareClickHandler(position: number) {
        // すでに終了している場合は処理を行わない
        if(isGameOver) return void 0;
        // すでにクリック済みの場合は処理を行わない
        if (board[position] !== '') return void 0;
        
        const nextBoard = changeBoard(board,nextPalayer? '○': '×',position)
        setBoard(nextBoard)
        
        const winner = calculateWinner(nextBoard)
        
        // Winnerが決まった際にStateの変更と盤面固定を行う
        if(winner !== ''){
            setState(`Winner is ${winner}`)
            setIsGameOver(true)
            return void 0
        }
        
        // 手番を交代する
        setNextPlayer(!nextPalayer)
        setState(`NextPlayer: ${!nextPalayer? '○': '×'}`)
    }

    return (
        <div>
        <div className="status">{state}</div>
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
