const Tweet = (props) => {
    return <div>
        <p> {props.date}</p>
        <p>{props.text}</p>
        <p>posted by: {props.username}({props.name})</p>
    </div>
}


