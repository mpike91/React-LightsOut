const StartButton = ({ gameActive, updateButton }) => {
    return (
        <div>
            <button onClick={updateButton}>{gameActive ? "Restart" : "Start"}</button>
        </div>
    )
}

export default StartButton;

//       <StartButton gameActive={gameActive} updateButton={updateButton} />

// const [gameActive, setGameActive] = useState(false);
// const updateButton = () => {
//   gameActive ? setGameActive(false) : setGameActive(true);
// }