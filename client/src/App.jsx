import React, { useCallback, useEffect } from 'react'
import Feed from './components/Feed/Feed'
import Navbar from './components/Navbar/Navbar'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {Route,Routes} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import Account from './components/pages/Account'
import "./components/utils/notificationConfig.js"
import { handleKeyPress } from './components/utils/handleKeyPress'
const queryClient = new QueryClient()
function App() {
  

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);
    

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <QueryClientProvider client={queryClient}>
    <div className='App flex'>
       <Routes>
         
         <Route  path='/login' element={<Account />}/>
         <Route path ='*' element={<>
          <Navbar/>
      <Feed/>
         </>}/>
      
       </Routes>
       <ToastContainer/>
    </div>
    </QueryClientProvider>
  )
}

export default App