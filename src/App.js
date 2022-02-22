import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ElementInfoConteiner from './components/ElementInfo/ElementInfoConteiner';
import ListConteiner from './components/List/ListConteiner';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListConteiner />} />
        <Route path='/*' element={<ElementInfoConteiner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
