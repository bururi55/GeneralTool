import React from "react";
import "./CopyButtonsSMKT.css";
import "../../../App.css";

const CopyButtons = () => {
  const copyText = (id) => {
    const text = document.querySelector(id).innerText;
    navigator.clipboard.writeText(text).then(() => {});
  };

  return (
    <div className="copy-buttons-sectionSMKT">
      <div className="copy-button-group-SMKT">
        <p className="zagolovokSMKT">
          <b>VPN TO</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t25">
        Для того чтобы решить проблему, необходимо сменить пароль по ссылке: https://selfcare.samokat.io/authorization.do
        <br />Внизу вкладка «Забыли пароль?» (в аккаунт входить не нужно), вводишь логин до @, затем выбираешь «Восстановить через почту» и указываешь свою корпоративную почту в домене @samokat-team.ru. На неё придёт письмо с кодом подтверждения от отправителя selfcare@samokat.ru, его нужно будет ввести на портале. 
        <br />Обрати, пожалуйста, внимание на требования к паролю: он должен быть не менее 11 символов.
        <br />Он изменится в течение 15 минут (за этот промежуток времени происходит синхронизация сервисов) для Jira, Confluence, Power BI, CRM, SAM, VPN и Supboard 
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t26">
        Убедись, пожалуйста, что вводишь корректные данные для входа.
        <br />Также проверь на корпоративной почте письмо, в котором изложен порядок смены пароля и срок его истечения. В случае если увидишь его, попробуй изменить пароль по инструкции:
        <br />1. Перейди по ссылке: https://selfcare.samokat.io/authorization.do;
        <br />2. Нажми на вкладку «Забыли пароль?» (в аккаунт входить не нужно);
        <br />3. Укажи логин до @ и выбери «Восстановить через почту»;
        <br />4. Отметь свой корпоративный e-mail;
        <br />5. Проверь в письмах код подтверждения, отправитель будет selfcare@samokat.ru;
        <br />6. Введи его на портале;
        <br />7. При изменении обрати внимание на требования (минимум 11 символов и так далее);
        <br />8. Подожди 5-15 минут, это время необходимо для синхронизации;
        <br />9. Войди в свои учётные записи с новым паролем. Он един для сервисов: VPN, Jira, Confluence, Power BI, CRM, SAM и Supboard
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t27">
        Вероятно, ты ввел некорректные данные более 5 раз и тебе заблокировали учётную запись. 
        <br />Передала задачу техническим специалистам. Разблокируют профиль в течение 3 дней.
        <br />Если за указанный срок не получишь ответ, обратись к нам, пожалуйста, повторно
        </div>
        <button onClick={() => copyText("#t25")} className="copy-button">
          VPN 7200
        </button>
        <button onClick={() => copyText("#t26")} className="copy-button">
          VPN 455
        </button>
        <button onClick={() => copyText("#t27")} className="copy-button">
          Пароль не меняется
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t28">
        Пришли, пожалуйста, скриншот настройки шлюза.
        <br />Для этого нажми на три горизонтальные полоски возле строки “Имя VPN” и перейди во вкладку “Редактировать подключение”. Проверю данные на корректность
        </div>
        <div style={{ fontSize: 0 }} id="t29">
        Вижу, что у тебя некорректно настроен VPN. В строку "Удалённый шлюз" необходимо вставить ссылку: river.samokat.io или sea.samokat.io, а для порта задать значение: 54443
        </div>
        <div style={{ fontSize: 0 }} id="t30">
        Ошибка может возникать из-за нестабильного соединения. Рекомендую перезагрузить интернет и устройство
        </div>
        <button onClick={() => copyText("#t28")} className="copy-button">
          Запрос скрина шлюза 
        </button>
        <button onClick={() => copyText("#t29")} className="copy-button">
          Верный шлюз
        </button>
        <button onClick={() => copyText("#t30")} className="copy-button">
          Нестабильный инет
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t31">
        Рекомендуем полностью удалить корпоративный VPN с устройства. 
        <br />А затем установить его заново, пользуясь инструкцией: https://drive.google.com/drive/folders/1CG_p8MDZUYMuWIEo5O2rZerlTL1-cIpp?ths=true
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t32">
        Такую ошибку можно увидеть при отсутствии или нестабильном интернет-соединения.
        <br />Рекомендуем обновить подключение к сети. Если это не поможет, обратись, пожалуйста, к своему провайдеру для анализа ситуации
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t33">
        Такую ошибку можно увидеть при установке некорректных настроек.
        <br />Чтобы устранить ошибку, нажми на три горизонтальные полоски возле строки “Имя VPN” и перейди во вкладку “Редактировать подключение”.
        <br />Далее убери галочку с пункта Enable Dual-stack IPv4/IPv6 address и попробуй авторизоваться ещё раз
        </div>
        <button onClick={() => copyText("#t31")} className="copy-button">
          Переустановить ВПН
        </button>
        <button onClick={() => copyText("#t32")} className="copy-button">
          Нет интернетав
        </button>
        <button onClick={() => copyText("#t33")} className="copy-button">
          FortiGate -5100
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="t34">
        Такая проблема может быть связана с нестабильным интернет-соединением. Чтобы устранить ошибку, рекомендуем перезагрузить сеть и устройство либо подключиться к другому Wi-Fi.
        <br />Если после этого не получится авторизоваться, обратись к нам повторно
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t35">
        Информацию о проблеме передал. Срок решения — до 3 дней. Как только получим ответ, напишем в личные сообщения Telegram.
        <br />Если по истечении этого времени проблема останется, сообщи нам повторно, пожалуйста
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t36">
        Рекомендую выполнить настройку и подключение по инструкции: https://docs.google.com/document/d/1lDwffVJYAXx9QMZxirPNId4K_9W4oWPD7qheyuWM0AQ/edit?tab=t.0
        </div>
        <button onClick={() => copyText("#t34")} className="copy-button">
          Зависает блин
        </button>
        <button onClick={() => copyText("#t35")} className="copy-button">
          Задачу создали
        </button>
        <button onClick={() => copyText("#t36")} className="copy-button">
          2ФА 1 раз
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="t141">
        Рекомендую подключиться с помощью инструкции:https://docs.google.com/document/d/1lDwffVJYAXx9QMZxirPNId4K_9W4oWPD7qheyuWM0AQ/edit?tab=t.0
        <br />Начиная с пункта «Подключение зарегистрированного пользователя»
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t142">
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
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t143">
        Инструкция: https://drive.google.com/drive/folders/1CG_p8MDZUYMuWIEo5O2rZerlTL1-cIpp?ths=true
        </div>
        <button onClick={() => copyText("#t141")} className="copy-button">
          2ФА не 1 раз
        </button>
        <button onClick={() => copyText("#t142")} className="copy-button">
          2ФА инструкция(текст)
        </button>
        <button onClick={() => copyText("#t143")} className="copy-button">
          ВПН ПапкаИнструкция
        </button>
      </div>

      <div className="copy-button-group-SMKT">
        <p className="zagolovokSMKT">
          <b>Разное</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t37">
        Не нахожу чат с таким даркстором. Вижу, что его открыли совсем недавно и ещё не добавили в распределение. 
        <br />Если необходимо передать туда информацию, оставь комментарий в примечаниях о том, что такой возможности нет
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t38">
          Передал данные в работу. Сделаем в течение 3 дней
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t39">
          Передал данные в работу. Заберем в течение суток
        </div>
        <button onClick={() => copyText("#t37")} className="copy-button">
         Новый ЦФЗ
        </button>
        <button onClick={() => copyText("#t38")} className="copy-button">
          Сделаем Доступы
        </button>
        <button onClick={() => copyText("#t39")} className="copy-button">
          Заберем Доступы
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text40">
        Мы не занимаемся переоформлением. Необходимо сделать это самостоятельно или обратиться к тому, кто занимался переоформлением ранее
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text41">
        Отправил данные техническим специалистам. Письмо с паролем пришлют на личную почту в течение суток. 
        <br />Если за это время ничего не придёт, напиши, пожалуйста, повторно
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text42">
        Согалсно ролевой модели доступ к сервису ХХ для твоей роли не положен. Рекомендую обратиться к владельцу сервиса и информационной безопасности для согласования
        </div>
        <button onClick={() => copyText("#text40")} className="copy-button">
         Не переоформляем
        </button>
        <button onClick={() => copyText("#text41")} className="copy-button">
          Сбросить пароль Почта
        </button>
        <button onClick={() => copyText("#text42")} className="copy-button">
          Нет доступа по РМ
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text43">
        Для того чтобы решить проблему, необходимо сменить пароль по ссылке: https://selfcare.samokat.io/authorization.do
        <br />Внизу вкладка «Забыли пароль?» (в аккаунт входить не нужно), вводишь логин до @, затем выбираешь «Восстановить через почту» и указываешь свою корпоративную почту в домене @samokat-team.ru. 
        <br />На неё придёт письмо с кодом подтверждения от отправителя selfcare@samokat.ru, его нужно будет ввести на портале. 
        <br />Обрати, пожалуйста, внимание на требования к паролю: он должен быть не менее 11 символов. 
        <br />Он изменится в течение 15 минут (за этот промежуток времени происходит синхронизация сервисов) для Jira, Confluence, Power BI, CRM, SAM, VPN и Supboard
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text44">
        Отправил данные техническим специалистам. Письмо с паролем пришлют на личную почту в течение суток. Если за это время ничего не придёт, напиши, пожалуйста, повторно
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text45">
        Рекомендую:
        <br />1. Проверить, работает ли VPN;
        <br />2. Перезагрузить страницу через ctrl+F5(очистка кэша);
        <br />3. Зайти с другого браузера или перейти в режим инкогнито.
        </div>
        <button onClick={() => copyText("#text43")} className="copy-button">
          Пароль АД Сам
        </button>
        <button onClick={() => copyText("#text44")} className="copy-button">
        Пароль АД сбросим
        </button>
        <button onClick={() => copyText("#text45")} className="copy-button">
          ТехРеки Jira/Conf
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text46">
        Попробуй следующие шаги для решения проблемы:
      <br />1. Убедись, что VPN подключён и работает корректно;
      <br />2. Проверь, правильно ли указана ссылка;
      <br />3. Отключи антивирус, так как он может вызывать конфликты с программным обеспечением;
      <br />4. Очисти кеш браузера и файлы Cookie для сайта;
      <br />5. Попробуй открыть CRM в другом браузере;
      <br />6. Включи режим «Инкогнито» и повтори попытку;
      <br />7. Если проблема сохраняется, сообщи об этом
        </div>

        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text47">
        Для решения пробелмы рекомендую:
        <br />1. Проверить, работает ли VPN;
        <br />2. Перейти по актуальной ссылке: https://sam-client-web.samokat.ru/areas
        <br />3. Очистиь кэш;
        <br />4. Зайти с другого браузера или режима Инкогнито
        </div>

        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text48">
        Можешь сбросить самостоятельно по ссылке: https://kit-ru2.voximplant.com/recoverpassword
        </div>
        <button onClick={() => copyText("#text46")} className="copy-button">
          ТехРеки CRM
        </button>
        <button onClick={() => copyText("#text47")} className="copy-button">
          SAM ТО
        </button>
        <button onClick={() => copyText("#text48")} className="copy-button">
          Voximplant Сброс 
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting"  style={{ fontSize: 0 }} id="text52">
        Рекомендую обратиться по этому вопросу в бот: https://t.me/SamokatOfficeBot
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text53">
        Доступ выдалл. Для авторизации нужно перейти по ссылке:https://casdoor.workround.tech/forget/staff-desk и следовать инструкции в карточках
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text54">
        Можешь сбросить самостоятельно по ссылке: https://casdoor.workround.tech/forget/staff-desk
        </div>
        <button onClick={() => copyText("#text52")} className="copy-button">
          ШТАТ - Домой
        </button>
        <button onClick={() => copyText("#text53")} className="copy-button">
          StaffDesk Дали доступ
        </button>
        <button onClick={() => copyText("#text54")} className="copy-button">
          StaffDesk Сброс
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting"  style={{ fontSize: 0 }} id="text181">
          Для решения проблемы рекомендую:
          <br />- Выполнить рекомендации из инструкции: https://support.workaround.tech/api/user_media.html
          <br />- Попробовать другой браузер или другую гарнитуру. Технические специалисты Webphone рекомендуют гарнитуру, которая подключается к устройству через Usb-разъём
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text182">
        Учётную запись создадим в течение суток. Одноразовый пароль отправим на корпоративную почту, при первой авторизации его необходимо будет поменять
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text183">
        Можешь сбросить самостоятельно по ссылке: https://samokat.uznaipro.ru/reset
        </div>
        <button onClick={() => copyText("#text181")} className="copy-button">
          Web Микро/Гудок
        </button>
        <button onClick={() => copyText("#text182")} className="copy-button">
          ATS Создадим
        </button>
        <button onClick={() => copyText("#text183")} className="copy-button">
          УзнайПро Сброс Сам
        </button>
      </div>
      
    </div>
  );
};

export default CopyButtons;
