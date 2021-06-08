import React from "react";
import s from "./Catalog.module.css";
let CatalogItem = (props) => {
  return (
    <div className={s.catalogItems}>
      <div>
        <img src={props.icon} className={s.catalogIcon} />
      </div>
      <div className={s.catalogTitle}>{props.title1}</div>
      <div className={s.catalogTitle}>{props.title2}</div>
      <div className={s.catalogLine}></div>
      {props.subtitle.map((item, i)=><div className={s.catalogItem}>{item}</div>)}
    </div>
  );
};

export default CatalogItem;
