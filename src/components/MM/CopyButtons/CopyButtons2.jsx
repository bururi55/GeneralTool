import React from "react";
import "./CopyButtonsMM.css";
import "../../../App.css";

const CopyButtons = () => {
  const copyText = (id) => {
    const text = document.querySelector(id).innerText;
    navigator.clipboard.writeText(text).then(() => {});
  };

  return (
    <div className="copy-buttons-sectionMM">
      <div className="copy-button-group-MM">
        <p className="zagolovokMM">
          <b>VPN ТО</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t25">
          Рекомендую: 
          <br />1. Проверить корректность логина и пароля; 
          <br />2. Убедиться, что настройки в клиенте заданы верно. Порт: 54443, адрес подключения: river.megamarket.tech
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t26">
        Пришли, пожалуйста, скриншот настройки шлюза. 
        <br />Для этого нажми на три горизонтальные полоски возле строки “Имя VPN” и перейди во вкладку “Редактировать подключение”. Проверю данные на корректность
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t27">
        Вижу, что у тебя некорректно настроен VPN. 
        <br />В строку "Удалённый шлюз" необходимо вставить ссылку: river.megamarket.tech или river.megamarket.tech:54443/cc, а для порта задать значение: 54443
        </div>
        <button onClick={() => copyText("#t25")} className="copy-button">
          VPN 455&7200
        </button>
        <button onClick={() => copyText("#t26")} className="copy-button">
          Запрос Скрина Шлюза
        </button>
        <button onClick={() => copyText("#t27")} className="copy-button">
          Шлюз верный
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t28">
        Ошибка может возникать из-за нестабильного соединения. Рекомендую перезагрузить интернет и устройство
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t29">
        Рекомендуем полностью удалить корпоративный VPN с устройства. 
        <br />А затем установить его заново, пользуясь инструкцией: https://drive.google.com/drive/folders/1CG_p8MDZUYMuWIEo5O2rZerlTL1-cIpp?ths=true
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t30">
        Такую ошибку можно увидеть при отсутствии или нестабильном интернет-соединения. 
        <br />Рекомендуем обновить подключение к сети. Если это не поможет, обратись, пожалуйста, к своему провайдеру для анализа ситуации
        </div>
        <button onClick={() => copyText("#t28")} className="copy-button">
          Нестабильный инет
        </button>
        <button onClick={() => copyText("#t29")} className="copy-button">
          Переустановить ВПН
        </button>
        <button onClick={() => copyText("#t30")} className="copy-button">
          Нет интернетав
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t31">
        Такую ошибку можно увидеть при установке некорректных настроек. 
        <br />Чтобы устранить ошибку, нажми на три горизонтальные полоски возле строки “Имя VPN” и перейди во вкладку “Редактировать подключение”. 
        <br />Далее убери галочку с пункта Enable Dual-stack IPv4/IPv6 address и попробуй авторизоваться ещё раз
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t32">
        Такая проблема может быть связана с нестабильным интернет-соединением. Чтобы устранить ошибку, рекомендуем перезагрузить сеть и устройство либо подключиться к другому Wi-Fi. 
        <br />Если после этого не получится авторизоваться, обратись к нам повторно
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t33">
        Информацию о проблеме передал. Срок решения — до 3 дней. Как только получим ответ, напишем в личные сообщения Telegram. 
        <br />Если по истечении этого времени проблема останется, сообщи нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#t31")} className="copy-button">
          FortiGate -5100
        </button>
        <button onClick={() => copyText("#t32")} className="copy-button">
          Зависает блин
        </button>
        <button onClick={() => copyText("#t33")} className="copy-button">
          Задачу создали
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t34">
          Рекомендую выполнить настройку и подключение по инструкции: https://docs.google.com/document/d/1lDwffVJYAXx9QMZxirPNId4K_9W4oWPD7qheyuWM0AQ/edit?tab=t.0
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t35">
        Рекомендую подключиться с помощью инструкции:https://docs.google.com/document/d/1lDwffVJYAXx9QMZxirPNId4K_9W4oWPD7qheyuWM0AQ/edit?tab=t.0 
        <br />Начиная с пункта «Подключение зарегистрированного пользователя»
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t36">
        1. Установи приложение Multifactor на мобильный телефон:
<br />- Приложение в App Store: https://apps.apple.com/ru/app/multifactor/id1533648669
<br />- Приложение в Google Store: https://play.google.com/store/apps/details?id=ru.multifactor.app
<br />- Приложение в Huawei Store: https://appgallery.huawei.com/%23/app/C104160827
<br />- Приложение в RuStore: https://apps.rustore.ru/app/ru.multifactor.app
<br />2. Запусти на устройстве FortiClient VPN;
<br />3. Введи свой логин и пароль для VPN компании группы e-com, к которой хочешь подключиться. Нажми «Соединить».
<br />4. На экране FortiClient VPN увидишь сообщение с шестизначным кодом — введи его в Multifactor. Для этого открой приложение «Multifactor» на мобильном телефоне и нажми на кнопку с изображением «+». Важно подключить мобильное устройство к сети Интернет.
<br />5. Далее необходимо выбрать пункт «Ввести код вручную», ввести 6-значный код, отображающийся на экране FortiClient VPN, и нажать кнопку «Добавить аккаунт».
<br />6. В мобильном приложении заметишь код проверки — введи его в FortiClient VPN в поле «Answer».
<br />7. После отправки кода подтверждения ты закончишь настройку 2-го фактора и установишь подключение к VPN
        </div>
        <button onClick={() => copyText("#t34")} className="copy-button">
          2ФА 1раз
        </button>
        <button onClick={() => copyText("#t35")} className="copy-button">
          2ФА не 1 раз
        </button>
        <button onClick={() => copyText("#t36")} className="copy-button">
          2ФА Инструкция(текст)
        </button>
      </div>

      <div className="copy-button-group-MM">
        <p className="zagolovokMM">
          <b>Разное</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t37">
          Согалсно ролевой модели доступ к сервису ХХ для твоей роли не положен. Рекомендую обратиться к владельцу сервиса и информационной безопасности для согласования
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t38">
          Рекомендую:
          <br />1. Проверить, работает ли VPN;
          <br />2. Перезагрузить страницу через ctrl+F5(очистка кэша);
          <br />3. Зайти с другого браузера или перейти в режим инкогнито.
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t39">
        Направил данные техническим специалистам. Письмо с паролем направят на личную почту в течение 3 дней. 
        <br />Если за это время ничего не придёт, напиши, пожалуйста, повторно
        </div>
        <button onClick={() => copyText("#t37")} className="copy-button">
          Нет доступа по РМ
        </button>
        <button onClick={() => copyText("#t38")} className="copy-button">
          ТехРеки Джира/Конфа
        </button>
        <button onClick={() => copyText("#t39")} className="copy-button">
          Пароль АД Сбросим
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text40">
        Логин и пароль такие же, как от VPN. Введи их, пожалуйста
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text41">
        Перейди в бота: https://t.me/MWordBot 
        <br />Активируй учётную запись и в Таймтреке нажми на кнопку «Сбросить пароль». После бот направит новый пароль
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text42">
          Можешь сбросить пароль самостоятельно через кнопку «Забыли пароль?» на странице с авторизацией
        </div>
        <button onClick={() => copyText("#text40")} className="copy-button">
          Пароль АД Какой?
        </button>
        <button onClick={() => copyText("#text41")} className="copy-button">
          ТТ Сброс пароля 
        </button>
        <button onClick={() => copyText("#text42")} className="copy-button">
          РА сброс пароля
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text43">
        Доступ выдалл. Для авторизации нужно перейти по ссылке:https://casdoor.workround.tech/forget/staff-desk и следовать инструкции в карточках
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text44">
          Рекомендую обратиться по этому вопросу в бот: https://t.me/SamokatOfficeBot
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text45">
        Учётную запись создадим в течение суток. Данные для входа пришлём на корпоративную почту. Если этого не произойдёт, напиши нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#text43")} className="copy-button">
          StaffDesk доступ дали
        </button>
        <button onClick={() => copyText("#text44")} className="copy-button">
          Штат - Домой
        </button>
        <button onClick={() => copyText("#text45")} className="copy-button">
          Создать УЗ УзнайПро
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text46">
        Рекомендую обратиться к специалисту обучения/тренеру, так как доступы к материалам предоставляют они
        </div>

        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text47">
          Для создания заявки уточни следующее, пожалуйста: 
          <br />- Твой логин ERM; 
          <br />- Порядок действий, который привёл к проблеме; 
          <br />- Скриншоты, на которых видно проблему; 
          <br />- Часовой пояс; 
          <br />- Номер телефона/gd покупателя и/или номер заказа/доставки, в которой обнаружен сбой; 
          <br />- Как часто возникает ошибка; 
          <br />- Проблема массовая или локальная; 
          <br />- Возможно ли взаимодействовать с системой; 
          <br />- Подробное описание проблемы
        </div>

        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text48">Можешь сбросить самостоятельно:
          <br />На странице авторизации нажимаем на кнопку «Забыли пароль?»;
          <br />В открывшейся строке вписываем корпоративную почту, на которую регистрировали аккаунт, и нажимаем на «Отправить»;
          <br />На почту пришлют письмо со ссылкой, чтобы установить себе пароль. </div>
        <button onClick={() => copyText("#text46")} className="copy-button">
          УзнайПро Нет Тестов
        </button>
        <button onClick={() => copyText("#text47")} className="copy-button">
          ERM ТО Уточни
        </button>
        <button onClick={() => copyText("#text48")} className="copy-button">
          Чатвуд Смена пароля
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text52">
        Информацию о проблеме передал, точных сроков решения нет. 
        <br />Как только получим ответ, напишем в личные сообщения Telegram
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text53">
        Данные для входа отправил на корпоративную почту. Если не получишь письмо в течение суток, напиши нам повторно, пожалуйста
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text54">
          Данные для входа отправил на корпоративную почту. Если не получишь письмо в течение суток, напиши нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#text52")} className="copy-button">
          Чатвуд ТО Задача
        </button>
        <button onClick={() => copyText("#text53")} className="copy-button">
          ЕРМ сброс пароля
        </button>
        <button onClick={() => copyText("#text54")} className="copy-button">
          ERM Пароль
        </button>
      </div>
      <div className="copy-button-group-MM">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text171">
        Мы не квалифицированные специалисты, рекомендую:
        <br />Обратиться по номеру телефона доверия: +7 (495) 989–50-50;
        <br />Или задать вопрос психологу на сайте Экстренной психологической помощи:https://psi.mchs.gov.ru/
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text172">
        —
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text173">
        «»
        </div>
        <button onClick={() => copyText("#text171")} className="copy-button">
          Пваки-Пваки
        </button>
        <button onClick={() => copyText("#text172")} className="copy-button">
        —
        </button>
        <button onClick={() => copyText("#text173")} className="copy-button">
        «»
        </button>
      </div>
    </div>
  );
};

export default CopyButtons;
