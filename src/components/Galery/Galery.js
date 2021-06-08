import React from "react";
import s from "./Galery.module.css";
import file from "../../file/KATALOG.pdf";
import img1 from "../../image/sclad/1.jpg";
import img2 from "../../image/sclad/2.jpeg";
import img3 from "../../image/sclad/3.jpeg";
import img4 from "../../image/sclad/4.jpeg";
import img5 from "../../image/sclad/5.jpeg";
import img6 from "../../image/sclad/6.jpeg";
import img7 from "../../image/sclad/7.jpeg";
import img8 from "../../image/sclad/8.jpeg";
export let GaleryItem = (props) => {
  return (
    <div className={s.galeryItemImg}>
      <img src={props.img} className={s.catalogImg} />
    </div>
  );
};
let Galery = (props) => {
  return (
    <div className={s.headerContainer}>
      <header className={s.catalogHeader}>
        <div className={s.paragraph}>Г А Л Е Р Е Я</div>
        <h1>ФОТО С НАШЕГО СКЛАДА</h1>
      </header>
      <div className={s.galeryContent}>
        <GaleryItem img={img1} />
        <GaleryItem img={img2} />
        <GaleryItem img={img3} />
        <GaleryItem img={img4} />
        <GaleryItem img={img5} />
        <GaleryItem img={img6} />
        <GaleryItem img={img7} />
        <GaleryItem img={img8} />
      </div>
      <div className={s.catalogLINK}>
        <a href={file} download>
          Скачать каталог
        </a>
      </div>
    </div>
  );
};

export default Galery;
