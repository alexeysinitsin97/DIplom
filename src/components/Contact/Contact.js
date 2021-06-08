import React from "react";

import s from "./Contact.module.css";
import img1 from "../../image/icon/geo.png";
import img2 from "../../image/icon/phone.png";
import img3 from "../../image/icon/mail.png";

const ContactItem =(props)=>{
  return(
    <div className={s.itemContent}>
      <div><img src={props.img} className={s.icon}/></div>
      <div className={s.title}>{props.title}</div>
      <div className={s.paragraph_other}>{props.contact}</div>
    </div>
  )
}
let Contact = (props) => {
    return (
      <div className={s.ContactContent}>
      <div className={s.headerContainer}>
      <header className={s.catalogHeader}>
        <div className={s.paragraph}>СПОСОБЫ  СВЯЗИ</div>
        <h1>НАШИ КОНТАКТЫ</h1>
      </header>
        <div className={s.catalogContent}>
          <ContactItem 
            img={img1}
            title={"АДРЕСС"}
            contact={"Прудской пер. 69"}
          />
          <ContactItem 
            img={img2}
            title={"ТЕЛЕФОН"}
            contact={"(3852)-75-00-12"}
          />
          <ContactItem 
            img={img3}
            title={"ПОЧТА"}
            contact={"promsnab@mail.ru"}
          />
        </div>
        <div className={s.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.6406060604663!2d83.75078231617866!3d53.33178797997593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda41398b807e1%3A0x4b0201c26c7f2a36!2z0J_RgNGD0LTRgdC60L7QuSDQv9C10YAuLCA2OSwg0JHQsNGA0L3QsNGD0LssINCQ0LvRgtCw0LnRgdC60LjQuSDQutGA0LDQuSwgNjU2MDQ5!5e0!3m2!1sru!2sru!4v1623107036730!5m2!1sru!2sru" width="600" height="450" ></iframe>
        </div>
      </div>
    </div>
    );
  };
  
  export default Contact;