import React from "react";
import success from "../assets/success.svg";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <a href="/">
        <button className="send-invite-btn">Назад</button>
      </a>
    </div>
  );
};
