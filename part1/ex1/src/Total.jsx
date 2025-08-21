const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises.map(part => part.exercises).reduce((sum, curr) => sum + curr, 0)}</p>
        </>
    );
}

export default Total;
