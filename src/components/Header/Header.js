import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo.png";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navContent}>
        <div>
          <div className={s.itemLogo}>
            <NavLink to="/Home" activeClassName={s.active}>
              <img src={logo} className={s.itemLogoImg} />
            </NavLink>
          </div>
        </div>
        <div className={s.navLink}>
        <div className={s.item}>
            <NavLink to="/Home" activeClassName={s.active}>
              Главная
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/Catalog" activeClassName={s.active}>
              Каталог
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/Galery" activeClassName={s.active}>
              Галерея
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/Producers" activeClassName={s.active}>
              Производители
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/About" activeClassName={s.active}>
              О нас
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/Contact" activeClassName={s.active}>
              Контакты
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className={s.item}>
            <NavLink to="/Users" activeClassName={s.active}>
              Users
            </NavLink>
          </div> */}
    </nav>
  );
};
export default Nav;
