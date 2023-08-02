import {useState} from "react"

function ControlledForm(props){
    const [formData, setFormData]= useState({

    })
    const handleChange=(event)=>{
        const copyFormData={...formData}
        copyFormData[event.target.name]=event.target.value
        setFormData(copyFormData)
 
    }

    const fetchQuestion = async()=>{
        const url =`http://jservice.io/api/random`
        const response= await fetch(url)
        const data = await response.json()
        setFormData(data)
        props.setQuestionIs(data)
        // console.log(data[0].question);
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        fetchQuestion(formData.askQuestion)
        setFormData({askQuestion:""})
    }

    return(
        <div>
        <h2>This is Controlled Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="submit" name="askQuestion" value={formData.askQuestion} onChange={handleChange}/>
        </form>
        </div>
    )
}

export default ControlledForm;