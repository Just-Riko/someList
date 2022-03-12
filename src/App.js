import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ElementInfoConteiner from './components/ElementInfo/ElementInfoConteiner'
import ListConteiner from './components/List/ListConteiner'
import s from './app.module.css'

function App() {

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Routes>
          {console.log(process.env.PUBLIC_URL)}
          <Route path={process.env.PUBLIC_URL} element={<ListConteiner />} />
          <Route path='/*' element={<ElementInfoConteiner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
