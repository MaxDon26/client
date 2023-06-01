import React from "react";
import { ContentContainer } from "../../components/common/Content/ContentContainer";
import { Picture } from "../../components/common/Content/Picture";
import { useParams } from "react-router-dom";
import { getById } from "../../api/curses";
import { CardContent } from "../../components/common/Content/CardContent";
import day51 from "../../assets/day51.jpg";
import day52 from "../../assets/day52.jpg";
import day53 from "../../assets/day53.jpg";

export const Day5 = () => {
  const { id } = useParams();
  const course = getById(id);

  return (
    <>
      <h3 className="course-contents__title">{course.title}</h3>
      <ContentContainer>
        <CardContent>
          {<Picture url={day51} />}

          <h1> Профессии для фриланса. Часть 3</h1>
          <div className="bb">
            <p>
              Большой перечень самых популярных специальностей для фриланса.
            </p>
          </div>
        </CardContent>
        <CardContent>
          <h2>6) Работа, связанная с менеджментом и управлением людьми</h2>
          <h3>- Менеджер:</h3>
          <h3>Маркетплейсов</h3>
          <p>
            – создаёт карточки товаров, управляет ценами, контролирует
            поставщиков, анализирует продажи, занимается продвижением на
            маркетплейсах – Алиэкспресс, Озон и др;
          </p>
          <h3>Интернет-проектов </h3>
          <p>
            – осуществляет контроль за реализацией проекта от нулевого этапа –
            идеи – до сдачи, взаимодействует с подрядчиками, ведёт переговоры с
            заказчиками и др;
          </p>
          <h3>По персоналу</h3>
          <p>
            – ведёт подбор и наём сотрудников, подходящих для работы в компании;
          </p>
          <h3>По продажам </h3>
          <p>
            – коммуницирует с клиентами, чтобы убедить их купить товар или
            услугу компании;
          </p>
          <h3>Аккаунт-менеджер</h3>
          <p>
            – взаимодействует с клиентами IT-компаний, рекламных агентств и
            интернет-сервисов: ведёт консультации, подготавливает договора,
            согласовывает текущие и будущие работы и мн.др. На эту должность
            часто берут людей без опыта, что может стать отличным стартом в
            интересующей профессиональной области;{" "}
          </p>
          <h3>Product менеджер</h3>
          <p>– придумывает новые продукты и выводит их на рынок.</p>
        </CardContent>
        <CardContent>
          {<Picture url={day52} />}
          <h2>7) Работа, связанная с видео и аудио</h2>
          <h3>- Видеооператор</h3>
          <p>
            Cпециалист, задачей которого является съёмка различных
            событий/явлений. Снимать профессиональную кинопродукцию
            оператору-любителю вряд ли доверят, но наработать себе достойное
            портфолио и стать востребованным фрилансером, начав со съёмок
            свадеб, дней рождения и других мероприятий – вполне реально.{" "}
          </p>
          <h3>- Видеомонтажёр</h3>
          <p>
            Человек, необходимый на финальном этапе производства видеопродукта.
            Он осуществляет монтаж, то есть выбирает из всех отснятых фрагментов
            самые лучшие, нарезает и соединяет их, используя музыку, подписи,
            титры и т.д.{" "}
          </p>
          <h3>- Композитор</h3>
          <p>
            Человек, который пишет музыку на заказ. Несмотря на то, что эта
            профессия традиционно требует очень большой профессиональной
            подготовки, в наше время появляется всё больше успешных авторов,
            пишущих музыку в специальных музыкальных программах на компьютере,
            овладеть которыми можно с помощью профильных курсов или
            самостоятельно по урокам в интернете.{" "}
          </p>
          <h3>- Звукорежиссёр </h3>
          <p>
            Простыми словами, это специалист, занимающийся записью и
            редактированием звуков. Но на самом деле, профессиональная
            деятельность звукорежиссёра состоит из гораздо большего числа задач,
            специфика которых будет зависеть от конкретного места работы. В его
            обязанности может входить как расстановка и тестирование
            оборудования на концертах, так и монтаж звуковых рядов, создание
            заставок, отбивок, запись голосов, музыкальных треков и мн.др.{" "}
          </p>
          <h3>- Аранжировщик песен </h3>
          <p>
            Специалист, который «оформляет» песни: подбирает нужные инструменты,
            записывает новые фрагменты, если требуется, сводит все партии в одну
            и др.
          </p>
          <h3>- Диктор</h3>
          <p>
            Это человек, начитывающий разнообразные тексты. Это могут быть не
            только короткие сообщения, но и большие циклы – например, передачи
            или аудиокниги. Идеально, если у диктора будет своя
            звукозаписывающая аппаратура, чтобы не зависеть от услуг
            звукорежиссёра и не делиться с ним частью своего дохода.{" "}
          </p>
        </CardContent>
        <CardContent>
          {<Picture url={day53} />}
          <h2>8) Инженеры и архитекторы</h2>
          <p>
            Да, инженеры и архитекторы тоже могут работать на фрилансе. Но, так
            как на подобные профессии точно нельзя переучиться за полгода, мы не
            будем подробно рассказывать о каждой специализации, а просто дадим
            их примерный перечень, чтобы вы могли увидеть, что задуматься о
            фрилансе имеет смысл и многим «технарям». К примеру, существует
            спрос на инженеров по схемам, инженеров машиностроения,
            инженеров-конструкторов, инженеров слаботочных сетей,
            инженеров-электриков, инженеров-теплотехников, инженеров
            водоснабжения и канализации, инженеров-технологов, архитекторов и
            др.
          </p>
          <h2>9) Работа в других сферах</h2>
          <h3>- Репетитор</h3>
          <p>
            Это преподаватель, который индивидуально занимается со своим
            учеником каким-то предметом. В зависимости от предмета, учеником
            может быть как школьник или студент, так и совсем взрослый человек,
            никаких ограничений на этот счёт нет. Цель репетитора – найти
            «пробелы» в знаниях ученика и устранить их с помощью индивидуальной
            программы. Это востребованная работа, но подойдёт она людям
            общительным и терпеливым – и, конечно, отлично разбирающимся в
            какой-то области знаний.{" "}
          </p>
          <h3>- Коуч</h3>
          <p>
            Если вы являетесь специалистом в какой-то сфере, вы можете начать
            консультирование или обучение людей. Для этого вам понадобится
            создать свой курс, грамотно его разработав, и заняться его
            продвижением. Либо вы можете заняться продажей своих консультаций,
            дополнительных материалов к урокам вашего курса и др. К примеру,
            если вы успешный копирайтер, вы можете продавать свои курсы по
            копирайтингу начинающим фрилансерам, обучая их различным тонкостям и
            секретам этой востребованной профессии. Или вы можете попытаться
            разработать курс на основе вашего хобби – например, вы хороши в
            дизайне интерьера или в приготовлении здоровой пищи.{" "}
          </p>
          <div className="bb">
            <p>
              {" "}
              Особой популярностью в интернете пользуются курсы, которые
              посвящены разнообразным способом разбогатеть, но и другие
              интересные знания тоже могут продаваться успешно, порой принося
              автору немалый доход.
            </p>
          </div>
          <h3>- Фотограф </h3>
          <p>
            Говоря простым языком, это специалист, который умеет хорошо
            фотографировать и создаёт снимки необходимого заказчику качества.
            Умение хорошо фотографировать складывается из умения выбирать
            хорошие ракурсы и моменты, знания теории фотографирования – и,
            конечно, опыта. Есть фотографы-универсалы, а есть те, кто
            предпочитает какой-то один жанр съёмки – например, свадебную
            фотографию, съёмку моделей для рекламы, съёмку еды и предметов для
            каталогов, портретную съёмку и мн.др. Вход в эту профессию нельзя
            назвать простым, так как конкуренция в ней очень высока, но она
            продолжает быть востребованной. Если фотограф становится
            по-настоящему известным, то гонорары за его работу очень велики.
          </p>
          <h3>- Ретушер</h3>
          <p>
            Это человек, который обрабатывает фотоснимки в различных графических
            редакторах (обычно в Photoshop и Lightroom), чтобы они
            соответствовали критериям высокого качества и/или требованиям
            заказчика. Такой специалист работает со светом, цветом, корректирует
            тон, экспозицию, яркость, насыщенность снимка, - в общем, занимается
            исправлением разнообразных недостатков исходной фотографии. Он может
            что-то убрать с фотографии или, напротив, дорисовать, к примеру,
            «замазать» родинку или изменить фон.
          </p>
          <h3>- Стример </h3>
          <p>
            Это человек, который организует онлайн-трансляции. Обычно он
            транслирует прохождение какой-то компьютерной игры для аудитории,
            которой интересно следить за его действиями, эмоциями и
            комментариями. В ответ зрители, если хотят, могут отправлять
            стримеру так называемые донаты – то есть пожертвования для автора в
            качестве благодарности за трансляцию. Сумма донатов варьируется –
            они могут быть как совсем небольшими, так и довольно существенными,
            в десятки и сотни тысяч рублей.{" "}
          </p>
          <p>
            Другие профессии, которыми можно заниматься на фрилансе:
            стилист-имиджмейкер, бизнес-аналитик, игровой аналитик, личный
            ассистент, бизнес-ассистен, координатор, блоггер, модель, актёр,
            методист, художник, манимейкер и др.
          </p>
          <div className="bb">
            <p>
              {" "}
              Разумеется, эти статьи курса, посвящённые возможным профессиям для
              работы на фрилансе, не являются исчерпывающими. Но мы постарались
              сделать их максимально объёмными, чтобы вы смогли убедиться, что
              найти своё место в мире фриланса может практически любой
              специалист.
              <br /> Если вы ещё не знаете, как именно вам стоит зарабатывать на
              фрилансе, то в следующей статье курса вы найдёте зарекомендовавшую
              себя методику выбора подходящей профессии.
            </p>
          </div>
        </CardContent>
      </ContentContainer>
    </>
  );
};