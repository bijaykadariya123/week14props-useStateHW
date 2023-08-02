

function Displaypage(props){
    const randomQuestion = props.questionIs
console.log(randomQuestion[0]);// I can see this in console but I am not able to see in my display page, I did see the data structure, I am not sure what piece am i missing?


    return(
        <div>
            <h3>This is Display Page</h3>
            <p> question:{randomQuestion.question}</p>
        </div>
    )
}

export default Displaypage;