
const Course = (props) => {

    return (
        props.courses.map((course) => 
            <div key={course.id}>
                <h2>{course.name}</h2>
                <ul>
                    {course.parts.map(part => 
                        <li key={part.id}>
                        {part.name} {part.exercises}
                        </li>
                    )}
                    <li><strong>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></li>
                </ul>
            </div>
        )
    )
}

export default Course