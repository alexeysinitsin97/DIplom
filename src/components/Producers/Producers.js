import React from "react";
import s from "./Producers.module.css";
import { NavLink } from "react-router-dom";
import img1 from "../../image/prod/1.png";
import img2 from "../../image/prod/2.png";
import img3 from "../../image/prod/3.png";
import img4 from "../../image/prod/4.png";
import img5 from "../../image/prod/5.png";
import img6 from "../../image/prod/6.png";
import img8 from "../../image/prod/8.jpg";
// import img16 from "../../image/prod/16.jpg";
import img16 from "../../image/prod/16.png";
import img7 from "../../image/prod/7.png";
import img9 from "../../image/prod/9.png";
import img10 from "../../image/prod/10.png";
import img11 from "../../image/prod/11.png";
import img12 from "../../image/prod/12.png";
import img13 from "../../image/prod/13.png";
import img14 from "../../image/prod/14.png";
import img15 from "../../image/prod/15.png";
import img17 from "../../image/prod/17.png";
import img18 from "../../image/prod/18.png";
import img19 from "../../image/prod/19.png";
import img20 from "../../image/prod/20.png";

const ProdItem = (props) =>{
    return(
        <div className={s.prodItem}>
            <div>
                <a src="#"><img src={props.img} className={s.catalogImg} /></a>
            </div>
            <div className={s.country}>
            <a src="#">{props.country}</a>
            </div>
        </div>
    )
}
const Producers = () => {
  return (
    <div className={s.ContactContent}>
      <div className={s.headerContainer}>
        <header className={s.catalogHeader}>
          <h1>НАШИ ПРОИЗВОДИТЕЛИ</h1>
        </header>
        <div className={s.Prod__content}>
        <ProdItem img={img1} country={"США"}/>
        <ProdItem img={img2} country={"Канада"}/>
        <ProdItem img={img3} country={"Германия"}/>
        <ProdItem img={img4} country={"США"}/>
        <ProdItem img={img5} country={"Евросоюз"}/>
        <ProdItem img={img6} country={"Испания"}/>
        <ProdItem img={img7} country={"Италия"}/>
        <ProdItem img={img8} country={"Италия"}/>
        <ProdItem img={img9} country={"Украина"}/>
        <ProdItem img={img10} country={"Китай"}/>
        <ProdItem img={img11} country={"Китай"}/>
        <ProdItem img={img12} country={"Россия"}/>
        <ProdItem img={img13} country={"Россия"}/>
        <ProdItem img={img14} country={"Франция"}/>
        <ProdItem img={img15} country={"Россия"}/>
        <ProdItem img={img16} country={"Италия"}/>
        <ProdItem img={img17} country={"Китай"}/>
        <ProdItem img={img18} country={"Италия"}/>
        <ProdItem img={img19} country={"Италия"}/>
        <ProdItem img={img20} country={"Китай"}/>

        </div>
      </div>
    </div>
  );
};
export default Producers;
