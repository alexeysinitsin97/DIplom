import React from "react";
import s from "./Catalog.module.css";
import CatalogItem from "./CatalogItem";
import icon1 from "../../image/icon/armatura.png";
import icon2 from "../../image/icon/pribor.png";
import icon3 from "../../image/icon/nasos.png";
import icon4 from "../../image/icon/details.png";
import file from "../../file/KATALOG.pdf";
let Catalog = (props) => {
  let arr1 = ["- Фланцы", "- Отводы", "- Переходы"];
  let arr2 = [
    "- Запорная",
    "- Регулирующая",
    "- Балансировочная",
    "- Предохранительная",
  ];
  let arr3 = [
    "- Поверхностное",
    "- Поргруженное/Полупогруженное",
    "- Автоматические насосные станции",
  ];
  return (
    <div className={s.headerContainer}>
      <header className={s.catalogHeader}>
        <div className={s.paragraph}>каталог</div>
        <h1>ГАРАНТИЯ. КАЧЕСТВО. НАДЁЖНОСТЬ.</h1>
      </header>
      <div className={s.catalogContent}>
        <div className={s.catalogItem1}>
          <CatalogItem
            icon={icon1}
            title1={"Трубопроводная "}
            title2={"арматура"}
            subtitle={arr1}
          />
        </div>
        <div className={s.catalogItem2}>
          <CatalogItem
            icon={icon2}
            title1={"Приборы "}
            title2={"учёта"}
            subtitle={arr2}
          />
        </div>
        <div className={s.catalogItem3}>
          <CatalogItem
            icon={icon3}
            title1={"Насосное "}
            title2={"оборудование "}
            subtitle={arr3}
          />
        </div>
        <div className={s.catalogItem4}>
          <CatalogItem
            icon={icon4}
            title1={"Детали"}
            title2={"трубопровода"}
            subtitle={[null]}
          />
        </div>
      </div>
      <div className={s.catalogLINK}>
        <a href={file} download>
          Скачать каталог
        </a>
      </div>
    </div>
  );
};

export default Catalog;
