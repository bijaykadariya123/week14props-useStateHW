// import {useState} from "react"

function ControlledForm(props){
    const fetchQuestion = async()=>{  // Data fetching
        const url =`http://jservice.io/api/random`
        const response= await fetch(url)
        const data = await response.json()
        props.setQuestionIs(data[0])
        props.setShowIs(false)
        // console.log(data);
    }

    return(
        <div>
            <button class="btn btn-danger " onClick={fetchQuestion}>Get Question</button>
 
        </div>
    )
}

export default ControlledForm;