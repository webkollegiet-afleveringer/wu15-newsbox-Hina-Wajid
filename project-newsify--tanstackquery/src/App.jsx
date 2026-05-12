
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/home/home'
import Settings from './views/settings/settings'
import AuthLogin from './views/auth_login/auth_login'
import Archive from './views/archive/archive'
import Popular from './views/popular/popular'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'  /* import from library query cleient */
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'  /* import devloper tool to see status on screen */
import LayoutMain from './components/layout-main'

const queryClient = new QueryClient();    /* create a variable using Query Client */

function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route path='/' element={<Home />} />
              <Route path='/archive/' element={<Archive />} />
              <Route path='/auth_login/' element={<AuthLogin />} />
              <Route path='/popular/' element={<Popular />} />
              <Route path='/settings/' element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools> */}
      </QueryClientProvider>
    </>
  )
}

export default App
