import React from "react";
import s from "./About.module.css";
import img1 from "../../image/about/1.jpg";
import img2 from "../../image/about/2.jpg";
import img3 from "../../image/about/3.jpg";
import img4 from "../../image/about/4.jpg";
import { NavLink } from "react-router-dom";

export let AboutItem = (props) => {
  return (
    <div className={s.galeryItemImg}>
      <div>
        <img src={props.img} className={s.catalogImg} />
      </div>
      <div className={s.text}>
        <p className={s.textP}>{props.text}</p>
      </div>
    </div>
  );
};
let About = (props) => {
  return (
    <div>
      <div className={s.headerContainer}>
        <header className={s.catalogHeader}>
          <h1>
            ПРЕИМУЩЕСТВА РАБОТЫ
            <span className={s.paragraph}>С НАМИ</span>
          </h1>
        </header>
        <div className={s.galeryContent}>
          <AboutItem
            img={img1}
            text={"ПОДБОР И РАСЧЕТ ТРУБОПРОВОДНОЙ АРМАТУРЫ"}
          />
          <AboutItem
            img={img2}
            text={"НАЛИЧИЕ НА СКЛАДЕ ХОДОВЫХ ПОЗИЦИЙ ТРУБОПРОВОДНОЙ АРМАТУРЫ"}
          />
          <AboutItem img={img3} text={"РАБОТА НАПРЯМУЮ С ПРОИЗВОДИТЕЛЯМИ"} />
          <AboutItem img={img4} text={"НАЛИЧИЕ НЕОБХОДИМЫХ СЕРТИФИКАТОВ"} />
        </div>
        <div className={s.catalogLINK}>
          <NavLink to="/Modal" >
            ЗАКАЗАТЬ ПРОЕКТ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
