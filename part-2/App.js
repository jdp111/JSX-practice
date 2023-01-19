const tweets = 
[
    {name:"JP",username:"JDP",text:"first Tweet ever!!!!", date:"11/1/2011"},
    {name:"PJ",username:"PPP",text:"second Tweet ever!!!!", date:"11/11/2011"},
    {name:"dJ",username:"DDD",text:"third Tweet ever!!!!", date:"10/1/2011"}
]


const App = (props) => { 
    
    return <div>
        {props.tweets.map((twit) => 
            
            <Tweet name = {twit.name} username = {twit.username} text = {twit.text} date = {twit.date}  />
            )} 
        <br></br>
    </div>
}


ReactDOM.render(<App tweets = {tweets}/>, document.getElementById("root"))