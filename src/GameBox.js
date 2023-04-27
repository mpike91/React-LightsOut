import './GameBox.css';

const GameBox = ({ x, y }) => {
    const randLight = () => {
        const light = Math.random();
        return light < 0.5 ? true : false;
    }

    const gameArray = [];
    for (let i = 0; i < y; i++) {
        gameArray.push([]);
        for (let j = 0; j < x; j++) {
            gameArray[i].push({ lit: randLight(), row: i, col: j });
        }
    }

    console.log(gameArray);

    return (
        <div className="GameBox">
            {gameArray.map(row => row.map(box =>
                box.lit ? <div className='box lit' key={`${box.row}${box.col}`}></div>
                    : <div className='box unlit' key={`${box.row}${box.col}`}></div>))}
        </div>
    )
}

export default GameBox;