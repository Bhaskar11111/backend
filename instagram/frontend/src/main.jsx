import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'  
import AuthProvider from './features/auth/context/AuthProvider.jsx'
import PostProvider from './features/posts/context/PostProvider.jsx'

createRoot(document.getElementById('root')).render(
 
    <AuthProvider> 
       <PostProvider>
            <BrowserRouter>
                  <App/>
            </BrowserRouter>
       </PostProvider>
    </AuthProvider>
 
    
)
