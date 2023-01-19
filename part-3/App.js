
const people = [
    {name: "johnpearceiscool", age: 27, hobbies: ['baseball', 'soccer', 'others']},
    {name: "john", age: 18, hobbies: ['basketball', 'curling', 'others']},
    {name: "nobody", age: 16, hobbies: ['swimming', 'milk', 'hockey']},
]



const App = (props) => {
    return <div>

            {props.people.map((person) =>
                <Person name={person.name} age={person.age} hobbies={person.hobbies} />
            )}
        </div>
}

ReactDOM.render(<App people = {people}/>, document.getElementById("root"))