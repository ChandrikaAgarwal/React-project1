import {Form, Field, Formik} from 'formik'
import {Fragment,useEffect} from 'react'
import { usePasswordStore } from '../store/passwordStore'


let initialValues={
    title:"",
    password:""
}
function PasswordForm(props) {
     const {addPassword,countPasswords,setSearchTerm,searchTerm,debouncedTerm,setDebouncedTerm,passwordList}=usePasswordStore()
    
    const formSubmitHandler=(values,{resetForm})=>{
        addPassword(values)       
        resetForm()
    }
    //debouncing
    useEffect(()=>{
       const timer= setTimeout(()=>{
         setDebouncedTerm(searchTerm)
        },500)
        return ()=>{
         clearTimeout(timer)
        } 
    },[searchTerm])

    useEffect(()=>{props.onSearch(debouncedTerm)},[debouncedTerm])

  return (
    <Fragment>
    <div className="mx-auto w-1/2 text-center">
        <h1 className='text-3xl font-bold underline mb-5'>Password Keeper</h1>
        <h2 className="font-bold text-xl ml-7 mb-5">Total Passwords: {countPasswords()}</h2>
        <input type="text" name="search" id="search" placeholder=" Search..." className="ml-10 mb-4 p-1" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    <Formik
    initialValues={initialValues}
    onSubmit={formSubmitHandler}>
    <Form>
        <label htmlFor="title" className="m-4">Title</label>
        <Field type="text" name="title" id="title" className="m-4 border"></Field> <br />
        <label htmlFor="password" className="mr-1 ">Password</label>
        <Field type="password" name="password" id="password" className="m-4 border"></Field> <br />
        <button type="submit" className="bg-black text-white rounded-md p-2 m-2 items-start">Add</button>
    </Form>
    </Formik>
    </div>
    </Fragment>
  )
}

export default PasswordForm
