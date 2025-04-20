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
          <b>Холды/Пушы/Закрытие/Приветствие</b>
        </p>
        <div style={{ fontSize: 0 }} id="t1">
          5-10 минут, пожалуйста, уточню информацию и вернусь с ответом
        </div>
        <div style={{ fontSize: 0 }} id="t2">
          10-15 минут, пожалуйста, уточню информацию и вернусь с ответом
        </div>
        <div style={{ fontSize: 0 }} id="t3">
          Мне нужно ещё 5 минут, чтобы всё проверить. Прости, что задерживаюсь с ответом
        </div>
        <button onClick={() => copyText("#t1")} className="copy-button">
          Холд 5-10
        </button>
        <button onClick={() => copyText("#t2")} className="copy-button">
          Холд 10-15
        </button>
        <button onClick={() => copyText("#t3")} className="copy-button">
          Холд ещё 5 минут
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="t4">
          Отправь, пожалуйста, скриншот с ошибкой. Поможет быстрее разобраться
        </div>
        <div style={{ fontSize: 0 }} id="t5">
          Рад помочь. Если появятся дополнительные вопросы, то обязательно обращайся
        </div>
        <div style={{ fontSize: 0 }} id="t6">
          Не дождался твоего ответа, чат закрою. Возвращайся, когда будет удобно
        </div>
        <button onClick={() => copyText("#t4")} className="copy-button">
          Запрос Скрина
        </button>
        <button onClick={() => copyText("#t5")} className="copy-button">
          Рад помочь
        </button>
        <button onClick={() => copyText("#t6")} className="copy-button">
          Не дождался ответа
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="t7">
          Привет, ! 
          <br />Чем могу помочь?
        </div>
        <div style={{ fontSize: 0 }} id="t8">
          Привет, ! 
          <br />Какой у тебя вопрос?
        </div>
        <div style={{ fontSize: 0 }} id="t9">
          Получаем много обращений. Прости, пожалуйста, за долгий ответ.
        </div>
        <button onClick={() => copyText("#t7")} className="copy-button">
          Чем могу?
        </button>
        <button onClick={() => copyText("#t8")} className="copy-button">
          Какой вопрос?
        </button>
        <button onClick={() => copyText("#t9")} className="copy-button">
          Прости за ожидание
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <p className="zagolovokSMKT">
          <b>Оплата</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="t10">
        Компания переводит оплату вместе с налогом и комиссией Наймикса. Если автооплата активна, Наймикс резервирует 6% на налог и списывает сумму автоматически в 10-15 числах месяца. 
          <br />А если функцию ранее не подключал, нужно оплачивать самостоятельно в приложении «Мой налог». Включить её можно в настройках: раздел «Профиль» → нажать на шестерёнку в правом верхнем углу → «Интеграция с Мой налог» → «Автоматическая уплата налогов» → нажать на бегунок, чтобы он стал зелёным. 
          <br />При подключении налог начинает оплачиваться с 1-го числа следующего месяца (если ранее автооплата была не подключена, то за предыдущий месяц необходимо оплатить самостоятельно)
        </div>
        <div style={{ fontSize: 0 }} id="t11">
          Оплату в компании переводят в понедельник-вторник. Если не получишь по истечении времени, сообщи нам повторно, пожалуйста
        </div>
        <div style={{ fontSize: 0 }} id="t12">
          Тебе направят 2 платежа в понедельник-вторник из-за стыка месяцев. ХХХ и
          ХХХ рублей
        </div>
        <button onClick={() => copyText("#t10")} className="copy-button">
          Налог
        </button>
        <button onClick={() => copyText("#t11")} className="copy-button">
          Сроки оплаты
        </button>
        <button onClick={() => copyText("#t12")} className="copy-button">
          Стык Месяцев
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="t13">
          Тебе направят в понедельник-вторник ХХХ рублей
        </div>
        <div style={{ fontSize: 0 }} id="t14">
        В этом случае твоему руководителю нужно лично написать нам и предоставить информацию о сумме премии
        </div>
        <div style={{ fontSize: 0 }} id="t15">
        Вижу, что часы из Таймтрека выгрузились корректно, премию проставили также верно. Ошибок в сумме перевода нет
        </div>
        <button onClick={() => copyText("#t13")} className="copy-button">
          Сколько?
        </button>
        <button onClick={() => copyText("#t14")} className="copy-button">
          Премия Внутр
        </button>
        <button onClick={() => copyText("#t15")} className="copy-button">
          Расчёт верный
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="text49">
          Передал информацию специалистам. С обратной связью вернусь в личные сообщения в Telegram в течение суток
        </div>
        <div style={{ fontSize: 0 }} id="text50">
        Твои часы не выгрузились из Таймтрека в ведомость из-за технической ошибки. 
        <br />Прости, пожалуйста. Деньги сегодня не переведут. Проставлю это время как долг, всю сумму переведут ХХХ в составе основного платежа
        </div>
        <div style={{ fontSize: 0 }} id="text51">
        Не вижу твоих данных в ведомости, оплату не смогут направить сегодня. 
        <br />Прости, пожалуйста. Передам информацию супервайзерам, чтобы тебя внесли и проставили долг. Деньги в таком случае направят ХХХ. Сделаем для этого всё возможное
        </div>
        <button onClick={() => copyText("#text49")} className="copy-button">
          Не пришла деньга
        </button>
        <button onClick={() => copyText("#text50")} className="copy-button">
         Таймтрек Нет Оплаты
        </button>
        <button onClick={() => copyText("#text51")} className="copy-button">
          Нет В ведомости
        </button>
      </div>

      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="text102">
        Часы/Премия некорректно выгрузились в ведомость [указать причину]. Внесу разницу в размере ХХ рублей как долг, всю сумму переведут ХХХ
        </div>
        <div style={{ fontSize: 0 }} id="text103">
        Из-за стыка месяцев оплату переводят двумя частями. Обычно вторую направляют на карту в течение 2-3 часов после первой, но иногда это может занять немного больше времени. 
        <br />Если этого не произойдёт до 23:59 [вторника], напиши нам повторно
        </div>
        <div style={{ fontSize: 0 }} id="text104">
        Так как ты заключал договор гражданско-правового характера, компания-аутсорс автоматически удерживает налог с дохода и самостоятельно переводит его в ФНС. На карту переводят уже итоговую сумму.
        <br />Подробнее можешь проконсультироваться у менеджера аутсорса: 8 (800) 511-12-11; 8 (812) 607-64-64
        </div>
        <button onClick={() => copyText("#text102")} className="copy-button">
          Долг проставил
        </button>
        <button onClick={() => copyText("#text103")} className="copy-button">
         Стык 1 платеж
        </button>
        <button onClick={() => copyText("#text104")} className="copy-button">
          Налог ГПХ
        </button>
      </div>

      <div className="copy-button-group-SMKT">
        <p className="zagolovokSMKT">
          <b>Приведи друзей к нам</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text16">
        Передал резюме в надёжные руки. Срок рассмотрения заявки составляет 10 рабочих дней. 
        <br />Если в течение этого времени кандидат не получит обратную связь, это будет означать, что его внесли в резерв. Когда откроют новый набор, с ним свяжутся
        </div>
        <div style={{ fontSize: 0 }} id="text17">
        Такой файл принять не можем, так как в нём не хватает номера телефона/личной почты/отчества. Добавь, пожалуйста, необходимую информацию и пришли резюме повторно
        </div>
        <div style={{ fontSize: 0 }} id="text18">
          Заполни, пожалуйста, резюме по шаблону: https://clck.ru/38mAuQ и
          отправь в чат
        </div>
        <button onClick={() => copyText("#text16")} className="copy-button">
          Передал резюме
        </button>
        <button onClick={() => copyText("#text17")} className="copy-button">
          Ошибка в резюме
        </button>
        <button onClick={() => copyText("#text18")} className="copy-button">
          Шаблон резюме
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div style={{ fontSize: 0 }} id="text19">
          Условия акции не выполнены, бонус не отправят. 
          <br /> (либо)
          <br />С момента первого слота не прошел месяц, бонус направят после выполнения условий акции
        </div>
        <div style={{ fontSize: 0 }} id="text20">
          Срок рассмотрения заявки еще не прошел. Рекомендую дождаться ответа
        </div>
        <div style={{ fontSize: 0 }} id="text21">
        Вижу, что ИМЯ находится в резерве. Как только откроют набор, с ним свяжутся
        </div>
        <button onClick={() => copyText("#text19")} className="copy-button">
          Бонуса нет
        </button>
        <button onClick={() => copyText("#text20")} className="copy-button">
          10 дней НЕТ
        </button>
        <button onClick={() => copyText("#text21")} className="copy-button">
        10 дней ДА
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <p className="zagolovokSMKT">
          <b>Разное</b>
        </p>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text55">
        Мы не квалифицированные специалисты, рекомендую:
        <br />- Обратиться по номеру телефона доверия: +7 (495) 989–50-50;
        <br />- Или задать вопрос психологу на сайте Экстренной психологической помощи:https://psi.mchs.gov.ru/
        </div>
        <div style={{ fontSize: 0 }} id="text56">
        —
        </div>
        <div style={{ fontSize: 0 }} id="text57">
        «»
        </div>
        <button onClick={() => copyText("#text55")} className="copy-button">
          Пваки-Пваки
        </button>
        <button onClick={() => copyText("#text56")} className="copy-button">
        —
        </button>
        <button onClick={() => copyText("#text57")} className="copy-button">
        «»
        </button>
      </div>
      <div className="copy-button-group-SMKT">
        <div className="preserve-formatting"  style={{ fontSize: 0 }} id="text184">
        Можешь сбросить самостоятельно:
      <br />- На странице авторизации нажимаем на кнопку «Забыли пароль?»;
      <br />- В открывшейся строке вписываем корпоративную почту, на которую регистрировали аккаунт, и нажимаем на «Отправить»;
      <br />- На почту пришлют письмо со ссылкой, чтобы установить себе пароль 
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text185">
          Для создания заявки уточни следующее, пожалуйста:
        <br />- ФИО;
        <br />- Корпоративную почту;
        <br />- Тег Telegram;
        <br />- Скриншот ошибки;
        <br />- Подробное описание проблемы:
        <br />- Что хочеom сделать?;
        <br />- Какая последовательность действий приводит к ошибке?;
        <br />- Номер телефона/gd покупателя и/или номер заказа/доставки, в которой обнаружен сбой;
        <br />- Как часто возникает ошибка
        </div>
        <div className="preserve-formatting" style={{ fontSize: 0 }} id="text186">
        Информацию передал. Ответ предоставят на корпоративную почту в течение 5(10 ЦФЗ) дней. Если не получишь обратную связь, напиши нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#text184")} className="copy-button">
          ЧатВуд Сброс 
        </button>
        <button onClick={() => copyText("#text185")} className="copy-button">
          ЕРМ Запрос ТО
        </button>
        <button onClick={() => copyText("#text186")} className="copy-button">
          ЖБ передали
        </button>
      </div>
    </div>
  );
};

export default CopyButtons;
