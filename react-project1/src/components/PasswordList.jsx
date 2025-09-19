import {React,Fragment} from 'react'


function PasswordList(props) {
    const values=props.allPasswords
    console.log("values in password list",values);
    
  return (
    <Fragment>
        <div><h1 className="font-bold text-xl m-4">All Passwords </h1></div>
      <ul>
        {values.map((item,index)=>(
            <li key={index} className="m-4">
               <div className="flex gap-4 bg-black rounded-2xl p-2 w-1/4">
               <h3 className="bg-gray-600 w-fit p-2 rounded-lg text-white ml-3 mx-auto">{item.title}</h3> - <h3 className="bg-white rounded-lg p-1 mx-auto">{item.password}</h3>
               </div>
            </li>

        ))}
      </ul>
    </Fragment>
  )
}


export default PasswordList
