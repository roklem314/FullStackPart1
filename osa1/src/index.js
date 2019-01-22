import React from 'react';
import ReactDOM from 'react-dom';

const Header = (course) => {
    console.log(course)

    return (
        <div>
            <p>
            {course.name}
            </p>
        </div>
        
    )
}
const Content = (palikka) => {
    
    return (
        <div>
            <Part a = {'Reactin perusteet'} b = {10} />
            <Part a = {'Tiedonvälitys propseilla'} b = {7} />
            <Part a = {'Komponenttien tila'} b = {14} />
        </div>
    )
}
const Part = (osa) => {
    
    return (
        <div>
            <p>
                {osa.a}, {osa.b}
            </p>
        </div>
    )
}
const Total = (summa) => {
    const a = (summa.a) 
    const b = (summa.b)
    const c = (summa.c)  
 console.log(c)
 
    return (
        <div>
            <p>
                yhteensä {a + b +c} tehtävää
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
    }
    const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    }
    const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
    }

    return (
        <div>
            <Header name={course}/>
            <Content />
            <Total a = {part1.exercises} b = {part2.exercises} c = {part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')); //renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on 'root'.

