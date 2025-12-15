import './App.css'
import EmployeeForm from '@/components/EmployeeForm'
import EmployeeTable from '@/components/EmployeeTable'
import { MainProvider } from '@/context/MainProvider.jsx'
function App() {
  return (
    <MainProvider>
      <div className='app'>
        <EmployeeForm />
        <EmployeeTable />
      </div>
    </MainProvider>
  )
}

export default App
