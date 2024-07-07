import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape/index';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
        <Routes>
          <Route path='/olamundo' element={<PaginaPadrao />}>
            <Route path='/olamundo' element={<Inicio/>}/>
            <Route path='/olamundo/sobremim' element={<SobreMim/>}/>
          </Route>

          <Route path='/olamundo/posts/:id/*' element={<Post/>}/>
          <Route path='*' element={<NaoEncontrada />}/>
        </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;