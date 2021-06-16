import React from 'react'

const Header = ({c}) => {
    return (
        <h1>{course}</h1>
    );
};

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Content = ({p1}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    );
};

const Total = ({p1}) => {
    return (
        <p>Number of exercises {p1[0].exercises + p1[1].exercises + p1[2].exercises}</p>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header c={course.name} />
            <Content p1={course.parts} />
            <Total p1={course.parts} />
        </div>
    );
};



export default App
