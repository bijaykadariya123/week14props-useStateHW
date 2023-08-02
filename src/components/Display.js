

function Displaypage(props){
    const randomQuestion = props.questionIs
console.log(randomQuestion[0]);


    return(
        <div>
            <h3>This is Display Page</h3>
            <p> question:{randomQuestion.question}</p>
        </div>
    )
}

export default Displaypage;