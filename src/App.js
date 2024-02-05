import Payload from './components/Payload';
import Calendar from './components/Calendar';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/payload" element={<Payload/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
    </Router>
  </>
}

export default App;
