import React from 'react';
import ReactDOM from 'react-dom';

const Header = (course) => {
    const n = Object.values(course)[0].name
    console.log(n)

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
const Total = (course) => {
    const a = Object.values(course)[0].parts[0].exercises
    const b = Object.values(course)[0].parts[0].exercises
    const c = Object.values(course)[0].parts[0].exercises
   
    
    // console.log(Object.values(course)[0].parts[0].exercises);
    return (
        <div>
            <p>
                yhteensä {a + b + c}tehtävää
            </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }
    return (
        <div>
            <Header name={course}/>
            <Content />
            <Total a = {course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')); //renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on 'root'.

