import React from 'react'
import ReactDOM from 'react-dom'

const Header = (headeri) => {
    console.log({headeri})

    return (
        <h1>
            {headeri.header}
        </h1>
    )

}
   
const Total = ({countti}) => {
    console.log(countti)
  const total = countti[0].exercises + countti[1].exercises + countti[2].exercises
  
      return (
        <div>
         
           <p>yhteensä {total}  tehtäviä</p> 
           
        </div>
      
    )
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)
const Course = ({ course }) => {
    const courses = course.parts
    console.log(courses)
    const rows = () =>
        courses.map(courses => <li key={courses.id}>{courses.name}</li>)
      
    return (
        <div>
           < Header header = {course.name} />
            
            <ul>
                {rows()}
            </ul>

            < Total countti = {course.parts} />

        </div>
      
    )
  }


  const App = () => {
    const courses = [
      {
        name: 'Half Stack -sovelluskehitys',
        id: 1,
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10,
            id: 1
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7,
            id: 2
          },
          {
            name: 'Komponenttien tila',
            exercises: 14,
            id: 3
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 2,
            id: 1
          },
          {
            name: 'Middlewaret',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
      
        return (
          <div>
            <Course course={course} />
          </div>
        )
      }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
