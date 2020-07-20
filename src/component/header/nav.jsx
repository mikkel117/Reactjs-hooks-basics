import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/home';
import Login from '../page/login';
import Form from '../page/form';
import Todo from '../page/todo';
import Databiending from '../useeffect-usestate/databiending';
import UseEffects from '../useeffect-usestate/useEffect';
import Array from '../page/array';
import Api from '../page/api';

const Path = ({ link }) =>{
    let l = link === 'Home' ? '' : link;
    return (
        <li>
            <Link to={`/${l.toLowerCase()}`}>{link}</Link>
        </li>
    );
};

const Nav = () => {
    const links = ['Home', 'login', 'form', 'todo', 'databiending', 'useEffect', 'array', 'api'];
    return (
        <ul className="list-inline">
            {links.map((link) => {
                return <Path link={link} />
            })}
        </ul>
    )
}

export default function Arraynav() {
  return (
    <Router>
        <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/form" component={Form}></Route>
      <Route path="/todo" component={Todo}></Route>
      <Route path="/databiending" component={Databiending}></Route>
      <Route path="/useEffect" component={UseEffects}></Route>
      <Route path="/array" component={Array}></Route>
      <Route path="/api" component={Api}></Route>
    </Router>
  );
}

// export default function Nav() {
//     return(
//         <Router>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Forside</Link></li>
//                     <li><Link to="/login">Login</Link></li>
//                     <li><Link to="/form">Form</Link></li>
//                 </ul>
//             </nav>
//             <Route path="/" exact component={Home}></Route>
//             <Route path="/login" component={Login}></Route>
//             <Route path="/form" component={Form}></Route>
//         </Router>
//     )
// }
