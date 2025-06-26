import './App.css'
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom'; // <-- Import Outlet
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <>
   <Provider store={ store }>
       <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
        <main className="mt-8 min-h-screen">
          <Outlet /> {/* Use Outlet with capital O */}
        </main>
      </div>
    </Provider>
    </>
  )
}

export default App
