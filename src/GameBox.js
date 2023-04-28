import { useState } from 'react';
import './GameBox.css';

const GameBox = ({ numRows, numCols }) => {
    const randLight = () => {
        const light = Math.random();
        return light < 0.75 ? true : false;
    };

    const setupArray = [];
    for (let i = 0; i < numRows; i++) {
        setupArray.push([]);
        for (let j = 0; j < numCols; j++) {
            setupArray[i].push({ lit: randLight(), row: i, col: j });
        }
    }

    const [gameArray, setGameArray] = useState(setupArray);

    const handleClick = (e) => {
        const [row, col] = [parseInt(e.target.dataset.row), parseInt(e.target.dataset.col)];
        const copy = gameArray.map(r => r.map(b => b));
        copy[row][col].lit = copy[row][col].lit ? false : true;
        if (col + 1 < numCols) copy[row][col + 1].lit = copy[row][col + 1].lit ? false : true;
        if (col - 1 >= 0) copy[row][col - 1].lit = copy[row][col - 1].lit ? false : true;
        if (row + 1 < numRows) copy[row + 1][col].lit = copy[row + 1][col].lit ? false : true;
        if (row - 1 >= 0) copy[row - 1][col].lit = copy[row - 1][col].lit ? false : true;
        setGameArray(copy);
    };

    const boxWidth = { width: `${numCols * 105}px` };

    return (
        <div className="GameBox" style={boxWidth}>
            {gameArray.map
                (row => row.map
                    (box =>
                        <div
                            className={`box${box.lit ? ' lit' : ''}`}
                            onClick={handleClick}
                            data-row={`${box.row}`}
                            data-col={`${box.col}`}
                            key={`${box.row}${box.col}`}>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default GameBox;