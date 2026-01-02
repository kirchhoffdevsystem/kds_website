import { Routes, Route, Outlet } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Portifolio from '../pages/Portifolio/Portifolio';
import Contato from '../pages/Contato/Contato';
import Sobre from '../pages/Sobre/Sobre';
import Servicos from '../pages/Servicos/Servicos';

export const links = {
    home: "home",
    contato: "contato",
    portifolio: "portfolio",
    servicos: "servicos",
    sobre: "sobre",
    blog: "blog"
}

export const links_share = {
    home: `/${links.home}`,
    contato: `/${links.contato}`,
    portifolio: `/${links.portifolio}`,
    servicos: `/${links.servicos}`,
    sobre: `/${links.sobre}`,
    blog: `/${links.blog}`
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota layout */}
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path={links.home} element={<Home />} />
        <Route path={links.blog} element={<Blog />} />
        <Route path={links.portifolio} element={<Portifolio />} />
        <Route path={links.contato} element={<Contato />} />
        <Route path={links.sobre} element={<Sobre />} />
        <Route path={links.servicos} element={<Servicos />} />
      </Route>

      {/* Rota 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
