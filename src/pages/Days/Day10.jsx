import React from "react";
import { ContentContainer } from "../../components/common/Content/ContentContainer";
import { Picture } from "../../components/common/Content/Picture";
import { useParams } from "react-router-dom";
import { getById } from "../../api/curses";
import { CardContent } from "../../components/common/Content/CardContent";
import day101 from "../../assets/day101.jpg";

export const Day10 = () => {
  const { id } = useParams();
  const course = getById(id);

  return (
    <>
      <h3 className="course-contents__title">{course.title}</h3>
      <ContentContainer>
        <CardContent>
          {<Picture url={day101} />}

          <h1>Инструменты и программы для фрилансера</h1>
          <p>
            Здесь вы найдёте самые необходимые инструменты, которые сделают вашу
            работу комфортной и по-настоящему профессиональной.
          </p>
        </CardContent>
        <CardContent>
          <h2>Совместная работа с документами.</h2>
          <p>
            С помощью этих сервисов можно работать с документами в режиме
            онлайн. Самым популярным среди таких сервисов являются Google Docs
            (Google Документы). Он имеет текстовый редактор, таблицы и большое
            количество бесплатных дополнений, которые можно устанавливать в
            зависимости от конкретных задач фрилансера. Все эти сервисы также
            имеют опцию совместной работы над документами, включая режим
            реального времени (когда другие пользователи видят все ваши
            изменения и правки в документе непосредственно в тот момент, когда
            вы их вносите).
          </p>
          <p className="fw500">Google Документы</p>
          <p className="fw500">Quip</p>
          <p className="fw500">Office 365</p>
        </CardContent>
        <CardContent>
          <h2>Облачное хранилище</h2>
          <p>
            В облачных сервисах можно хранить инструкции, образцы документов,
            различные шаблоны, архивы фото и видео и всё то, что может
            понадобиться работнику. К тому же с помощью облачных хранилищ можно
            пересылать файлы большого размера, которыми довольно проблематично
            делиться какими-то ещё способами.{" "}
          </p>
          <p className="fw500">Яндекс.Диск</p>
          <p className="fw500">Google Drive</p>
          <p className="fw500">Dropbox </p>
        </CardContent>
        <CardContent>
          <h2>Сервисы для ведения заметок</h2>
          <p>
            Такие сервизы помогают осуществлять хранение и систематизацию
            заметок, записывать идеи, вести перечни дел и следить за их
            выполнением. Они помогут вам держать все ваши мысли и рабочие задачи
            поблизости и не переживать, что какая-то информация не окажется у
            вас под рукой.{" "}
          </p>
          <p className="fw500">Evernote.com </p>
          <p className="fw500">Notepadonline.ru </p>
          <p className="fw500">OneNote </p>
          <p className="fw500">Notion.so</p>
        </CardContent>
        <CardContent>
          <h2>Менеджеры задач</h2>
          <p>
            Менеджерами задач называются программы, куда можно вносить списки
            задач, выставляя приоритеты. Некоторые из таких менеджеров обладают
            функционалом для командной работы. Например, у них есть опция
            назначать задачи конкретным сотрудником, отслеживать их выполнение,
            пересылать файлы, решать рабочие вопросы и т.д.
          </p>
          <p className="fw500">Яндекс.Коннект</p>
          <p className="fw500">Todoist</p>
          <p className="fw500">TickTick</p>
          <p className="fw500">Any.do</p>
        </CardContent>
        <CardContent>
          <h2>Документооборот и бухгалтерия</h2>
          <p>
            Здесь вы найдёте названия программ, предназначенных для удалённого
            ведения бухгалтерии и документооборота, бесплатные базы нормативных
            документов и мн.др.
          </p>
          <p>
            <span className="fw500">https://www.diadoc.ru </span>– Диадок –
            система ЭДО (электронного документооборота). С её помощью можно
            подписывать договора и акты дистанционно.{" "}
          </p>
          <p>
            <span className="fw500">Service-online.su </span>–
            онлайн-конструктор документов (акты, договора, счета, доверенности,
            заявления и мн.др).
          </p>
          <p>
            <span className="fw500">Formz.ru </span>– онлайн-конструктор бланков
            и документов.
          </p>
          <p>
            <span className="fw500">Freshdoc.ru </span>– конструктор документов
            для юридических лиц и индивидуальных предпринимателей (ИП) с большим
            количеством шаблонов.{" "}
          </p>
          <p>
            <span className="fw500">Doczilla.ru </span>– конструктор юридических
            документов (исков, договоров, кадровых документов, претензий и др).
          </p>
          <p>
            <span className="fw500">http://www.consultant.ru </span>–
            КонсультантПлюс – справочно-правовая система России с базой
            нормативных документов.
          </p>
          <p>
            <span className="fw500">https://www.garant.ru </span>– Гарант –
            справочно-правовая система по законодательству России, имеющая базу
            нормативных документов.
          </p>
          <p>
            <span className="fw500">https://e-kontur.ru </span>– Эльба –
            онлайн-бухгалтерия.
          </p>
          <p>
            <span className="fw500">https://www.moedelo.org </span>– Мое Дело –
            онлайн-бухгалтерия.
          </p>
          <p>
            <span className="fw500">https://knopka.com </span>– Кнопка –
            онлайн-бухгалтерия.
          </p>
          <p>
            <span className="fw500">https://pravoved-plus.msk.ru </span>–
            Правовед – консультации по юридическим вопросам онлайн.
          </p>
        </CardContent>
        <CardContent>
          <h2>Сервисы для онлайн-торговли (e-commerce)</h2>
          <p>
            Эти сервисы помогут вам организовать продажи товаров/услуг в
            интернете, принимать платежи и настраивать рекламу.
          </p>
          <p className="fw500">Яндекс.Касса</p>
          <p className="fw500">Единая касса</p>
          <p className="fw500">Paymaster.ru</p>
          <p>
            <span className="fw500">https://www.insales.ru </span>– InSales –
            платформа управления электронными продажами через сайт, на
            маркетплейсах, в социальных сетях и мессенджерах.
          </p>
          <p className="fw500">Яндекс.Маркет для бизнеса</p>
          <p>
            <span className="fw500">Яндекс.Директ </span>– сервис контекстной
            рекламы для выдачи Яндекса.
          </p>
          <p>
            <span className="fw500">Google Реклама (Google Ads) </span>–
            размещение контекстной рекламы в Google.
          </p>
          <p>
            <span className="fw500">Unisender.com </span>– сайт для организации
            рассылок.
          </p>
          <p>
            <span className="fw500">Sendpulse.com </span>– сайт для организации
            рассылок.
          </p>
        </CardContent>
        <CardContent>
          <h2>Kanban-доски</h2>
          <p>
            Досками канбан (kanban) называют физические или виртуальные доски
            для управления проектами. В последнее время они начинают всё чаще
            использоваться для удалённой и проектной работы. Канбан-доска
            используется для организации рабочих процессов и визуализации
            движения задач. Можно создать несколько канбан-досок с заметками,
            которые будут перемещаться с одной доски на другую, и это движение
            будет означать то, на каком именно этапе находится реализация каждой
            из поставленных задач. Обычно такие доски используются для
            систематизации рабочего процесса редакций сайтов, но любой фрилансер
            может использовать их и в индивидуальной работе, чтобы наглядно
            видеть выполнение проекта.{" "}
          </p>
          <p className="fw500">Trello</p>
          <p className="fw500">Meistertask.com</p>
          <p className="fw500">Blossom.co</p>
        </CardContent>
        <CardContent>
          <h2>Ментальные карты (майндмэппинг)</h2>
          <p>
            Благодаря таким сервисам можно визуализировать свои идеи в виде
            удобной и подробной схемы.{" "}
          </p>
          <p className="fw500">Mindmeister.com</p>
          <p className="fw500">Mindomo.com</p>
          <p className="fw500">Mindmup.com </p>
        </CardContent>
        <CardContent>
          <h2>Мессенджеры</h2>
          <p>
            Инструменты, предназначенные для рабочих коммуникаций. Они подойдут
            и тем, кто работает в команде, так как во всех указанных месседжерах
            можно создавать групповые чаты, и тем, кто работает индивидуально и
            ведёт переписки только с заказчиками.{" "}
          </p>
          <p className="fw500">WhatsApp</p>
          <p className="fw500">Viber</p>
          <p className="fw500">Slack</p>
          <p className="fw500">Flock.com</p>
          <p className="fw500"> Discordapp.com</p>
        </CardContent>
        <CardContent>
          <h2>Программы для видеоконференций</h2>
          <p>
            Данные программы позволяют созваниваться с клиентом для обсуждения
            проекта, а также проводить более масштабные встречи – конференции,
            совещания, планёрки и др.
          </p>
          <p className="fw500">Zoom</p>
          <p className="fw500">Skype </p>
          <p className="fw500">Google Hangouts</p>
          <p className="fw500">Slack</p>
          <p className="fw500">Zadarma.com</p>
        </CardContent>
        <CardContent>
          <h2>Сервисы для проведения вебинаров</h2>
          <p>
            Подобные сервисы особенно понадобятся тем фрилансерам, которые
            решили строить карьеру в консультировании/инфобизнесе.
          </p>
          <p className="fw500">Webinar.ru</p>
          <p className="fw500">Webinar.megafon.ru</p>
          <p className="fw500">Virtualroom.ru</p>
          <p className="fw500">Mind.com</p>
          <p className="fw500">Webinar.fm</p>
        </CardContent>
        <CardContent>
          <h2>Онлайн-будильники и «мировое время»</h2>
          <p>
            Онлайн-будильники помогут вам не забыть о рабочем звонке или
            каком-либо другом рабочем мероприятии. А «мировое время» - это
            сервисы, позволяющие увидеть, сколько времени в том городе и часовом
            поясе, где находится ваш заказчик.{" "}
          </p>
          <p className="fw500">Яндекс.Время</p>
          <p className="fw500">Time-in.ru</p>
          <p className="fw500">Time.is</p>
          <p className="fw500">Budilnik.online</p>
          <p className="fw500">Budilki.ru</p>
          <p className="fw500">Budila.online</p>
          <p className="fw500">Razbudi.net</p>
        </CardContent>
        <CardContent>
          <h2>Генераторы паролей</h2>
          <p>
            Эти сайты предназначены для создания очень надежных паролей,
            взломать которые практически невозможно.{" "}
          </p>
          <p className="fw500">Lastpass.com</p>
          <p className="fw500">Onlinepasswordgenerator.ru</p>
          <p className="fw500">Passgenerator.ru</p>
          <p className="fw500">Pasw.ru</p>
        </CardContent>
        <CardContent>
          <h2>Почтовые сервисы</h2>
          <p className="fw500">Gmail</p>
          <p className="fw500">Яндекс.Почта</p>
          <p className="fw500">Майл.ру</p>
          <p>
            <span className="fw500">Почта для бизнеса от Яндекса </span>– почта
            на вашем собственном домене.
          </p>
        </CardContent>
        <CardContent>
          <h2>Другие инструменты и сервисы для фриланса</h2>
          <p>
            <span className="fw500">Google Формы </span>– этот сервис поможет
            создавать опросы, анкеты и другие формы, которые могут потребоваться
            для работы на фрилансе.{" "}
          </p>
          <p>
            <span className="fw500">https://www.ilovepdf.com/ru </span>- сайт с
            бесплатными онлайн-инструментами для работы с PDF-файлами. Есть
            конвертация в PDF и преобразование из PDF.
          </p>
          <p>
            <span className="fw500">Online.orfo.ru </span>– проверка орфографии
            в режиме онлайн.
          </p>
          <p>
            <span className="fw500">Languagetool.org </span>– стилистический и
            грамматический корректор.
          </p>
          <p>
            {" "}
            <span className="fw500">Яндекс.Переводчик</span>
          </p>
          <p>
            <span className="fw500">Google Переводчик</span>
          </p>
          <p>
            <span className="fw500">Calend.ru </span>– сайт c календарём
            событий, в котором можно узнать профессиональные праздники, именины
            и мн.др.
          </p>
          <p>
            <span className="fw500">Teamviewer </span>– программное обеспечение
            для удалённого подключения к компьютеру.
          </p>
          <p>
            <span className="fw500">LightShot </span>– программа для создания
            скриншотов.
          </p>
          <p>
            <span className="fw500">Gyazo </span>- программа для создания
            скриншотов.
          </p>
        </CardContent>
      </ContentContainer>
    </>
  );
};
