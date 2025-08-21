import Part from "./Part";

const Content = (props) => {

    return (
        <>  
            {props.part.map((partItem, index) => (
                <Part key={index} part={partItem} />
            ))}
        </>
    );
}

export default Content;