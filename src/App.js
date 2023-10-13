import MainPage from './components/MainPage';
import ProfilePage  from './components/ProfilePage';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<MainPage />} />
          <Route exact path='/profile' element={<ProfilePage />} />
          {/* <Route exact path='/about' element={<About />} /> */}
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
