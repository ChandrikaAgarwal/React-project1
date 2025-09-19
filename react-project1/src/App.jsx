import { useEffect} from 'react'
import PasswordList from './components/PasswordList'
import PasswordForm from './components/PasswordForm'
import { usePasswordStore } from './store/passwordStore'

function App() {
  
   const {passwordList,setFilteredPasswords,filteredPasswords,debouncedTerm}=usePasswordStore()
   
    useEffect(()=>{
      if(!debouncedTerm){
        setFilteredPasswords(passwordList)
      }
    },[passwordList])
    
    const searchPasswords=(searchTerm)=>{
      if(searchTerm.length>0){
        const result=passwordList.filter((item)=>{
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ||item.password.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredPasswords(result)
    }else{
      setFilteredPasswords(passwordList)
    }
  }
  return(
    <div>
      <PasswordForm onSearch={searchPasswords} />
      <PasswordList allPasswords={filteredPasswords}/>
    </div>
  )
 

}
export default App
