const Person = (props) => {
    return <div>
        
            <p>Learn some more information about {props.name.length > 8? props.name.slice(0,6) : props.name}</p>
            <h3>{props.age > 17? "please go vote!" : "you must be 18" }</h3>
            <p>hobbies:</p>
            <ul>
                {props.hobbies.map((hobby) =>
                    <li> 
                        {hobby}
                    </li>
                )}
            </ul>

        </div>
}

