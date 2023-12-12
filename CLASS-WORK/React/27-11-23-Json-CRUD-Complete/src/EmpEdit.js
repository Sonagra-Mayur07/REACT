import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EmpEdit() {


    const {empId} = useParams();
    const [id,idChange] = useState("")
    const [name,nameChange] = useState("")
    const [email,emailChange] = useState("")
    const [phone,phoneChange] = useState("")
    const [active,activeChange] = useState(false)
    const navigate = useNavigate();

    //const [empData,setEmpData] = useState();


    useEffect(()=>{

        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{return res.json()})
        .then((data)=>{
            
        //    setEmpData(data)
         idChange(data.id);
         nameChange(data.name);
         emailChange(data.email);
         phoneChange(data.phone)
        // console.log(data)
        // console.log(data.id)
        console.log(data)
        })


    },[])

    const handleClick = (e)=>{
        e.preventDefault()
        console.log({id,name,email,phone,active})

        const empData = {id,name,email,phone,active};

        fetch("http://localhost:8000/employee/"+empId,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        })


        .then((res)=>{
            alert("Saved succesfully..!");
            navigate('/')

            console.log(res)

        })
        .catch((err)=>{
            console.log(err.message)

        })
    }


  return (
    <div>
         <div className='row justify-content-center' >
            <div className='col-lg-6'>

                <div className='card'>
                    <div className='card-title'>
                        <h1>Add Employee</h1>
                    </div>

                    <div className='card-body'>

                     <form onSubmit={handleClick} className='container' style={{textAlign:"left"}}>

                         <div className='col-lg-12'>
                            <label>Id</label>
                            <input value={id} type='text' disabled="disabled" className='form-control'></input>
                       </div>

                       <div className='col-lg-12'>
                            <label>Name</label>
                            <input value={name} onChange={(e)=>{nameChange(e.target.value)}} type='text' className='form-control'></input>
                       </div>


                       <div className='col-lg-12'>
                            <label>Email</label>
                            <input value={email} onChange={(e)=>{
                                emailChange(e.target.value)
                            }} type='text' className='form-control'></input>
                       </div>

                       <div className='col-lg-12'>
                            <label>Phone</label>
                            <input value={phone} onChange={(e)=>{phoneChange(e.target.value)}} type='text' className='form-control'></input>
                       </div>


                       <div className='col-lg-12'>
                            
                            <input value={active} onChange={(e)=>{activeChange(e.target.checked)}} type='checkbox' className='form-check-input'></input>
                            {" "}<label>Is active</label>
                       </div>

                       <div className='col-lg-12 mt-2'>
                           <button className='btn btn-success me-2 '>Save</button>
                           <Link to="/" className='btn btn-primary' >Back</Link>
                       </div>

                       </form>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default EmpEdit
