import React from "react";
import s from "./Modal.module.css";
import { NavLink } from "react-router-dom";
import close from "../../image/icon/close.png";
const Modal = () => {
  return (
    <div className={s.popup}>
      <div className={s.orderForm}>
        <div className={s.orderClose}>
          <NavLink to="/About">
            <img className={s.orderCloseIcon} src={close} />
          </NavLink>
        </div>
        <h2 className={s.orderFormTitle}>Обратная связь</h2>
        <div className={s.orderFormSubtitle}>
          Поделитесь мнение о нашей работе или задайте нам любой интересующий
          вас вопрос в поле комментарий.
        </div>
        <form>
          <input
            type="text"
            name="name"
            className={s.formName}
            placeholder="Ваше имя"
          />
          <input
            type="text"
            name="formPhone"
            className={s.formPhone}
            placeholder="Телефон"
          />
          <textarea className={s.textarea} placeholder="Комментарий" />
          <div className={s.checkbox}>
            <input
              type="checkbox"
              id="checkbox"
              name="agree"
              className={s.formCheckbox}
              checked
            />
            <label for="checkbox" className={s.formText}>
              Даю согласие на обработку данных
            </label>
          </div>
          <button className={s.btn}>
            Перезвонить мне<span className={s.formBtnBorderOrange}></span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
