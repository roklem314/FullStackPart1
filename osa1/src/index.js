import React from 'react';
import ReactDOM from 'react-dom';

const Header = (course) => {
    

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
const Total = (totali) => {
    
    return (
        <div>
            <p>
                yhteensä {totali.summa} tehtävää
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    // const part1 = 'Reactin perusteet'
    const exercises1 = 10
    // const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    // const part3 = 'Komponenttien tila'
    const exercises3 = 14

    return (
        <div>
            <Header name={course}/>
            <Content />
            <Total summa={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')); //renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on 'root'.

