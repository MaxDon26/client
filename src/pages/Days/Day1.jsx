import React from "react";
import { ContentContainer } from "../../components/common/Content/ContentContainer";
import { Picture } from "../../components/common/Content/Picture";
import { useParams } from "react-router-dom";
import { getById } from "../../api/curses";
import { CardContent } from "../../components/common/Content/CardContent";
import day1 from "../../assets/day11.jpg";
import day2 from "../../assets/day12.jpg";
import day3 from "../../assets/day13.jpg";

export const Day1 = () => {
  const { id } = useParams();
  const course = getById(id);

  return (
    <>
      <h3 className="course-contents__title">{course.title}</h3>
      <ContentContainer>
        <CardContent>
          {<Picture url={day1} />}

          <h1>Что такое фриланс</h1>
          <p>
            Рады представить вам наш новый курс, посвященный фрилансу. Он
            предназначен и тем, кто давно решил, что рутинная работа в офисе –
            это не его, но не знает, с чего начать, и тем, кто совсем недавно
            стал задумываться о том, что неплохо было бы работать на самого себя
            по своему собственному графику. Также наш курс будет полезен тем
            людям, которые уже имеют небольшие представления о фрилансе, но еще
            не вполне определились с направлением. И тем, кто уже успел сделать
            пробный шаг в эту сторону и хотел бы узнать больше.
          </p>
          <div className="bb">
            <p>
              В этом курсе мы подробно разберем, что такое фриланс, каковы его
              плюсы и минусы, кем именно можно работать на фрилансе, какими
              качествами должен обладать успешный фрилансер, познакомим вас с
              основными инструментами и площадками для эффективной работы,
              поделимся с вами правилами, которые помогут вам обезопасить себя
              от нечестных заказчиков и др.{" "}
            </p>
          </div>
          <h3>
            В качестве основного способа заработка фриланс выбирает всё большее
            количество людей.
          </h3>
          <p>У этого явления есть несколько основных причин:</p>
          <p>
            1) Развитие интернета и различных онлайн-инструментов для работы,
            что позволило отдельным категориям работников реже появляться в
            офисе или полностью переходить на удалёнку (об отличиях фриланса и
            удалённой работы читайте далее);{" "}
          </p>
          <p>
            2) Изменение личностных ценностей. Тут всё просто: если наши бабушки
            и дедушки, мамы и папы были воспитаны так, что хотели ходить на одну
            и ту же работу десятилетиями, то последующие поколения растут уже в
            более динамичном и быстро меняющемся мире, где распространённой
            мечтой является уже не оседлость, а возможность кочевать, то есть
            срываться с места в любой нужный момент;{" "}
          </p>
          <p>
            3) Пандемия коронавируса, которая показала, что работа в офисе (и
            «на местах» вообще) может оказаться не такой стабильной, как всегда
            считалось. Тебя могут внезапно уволить из-за какого-нибудь
            форс-мажора, оставив без средств к существованию;
          </p>
          <p>
            4) И, в целом, непредсказуемость и изменчивость современного мира.
            Кризисы, скачки курсов, инфляция… Некогда важнейшие профессии,
            которые вдруг оказываются устаревшими и невостребованными. Когда
            реальность не дает ощущения твердой земли под ногами, то люди
            ожидаемо будут тянуться к разнообразным способам оставаться на
            плаву, имея крепкую подстраховку, какой, при грамотном отношении,
            обязательно окажется и фриланс.{" "}
          </p>
        </CardContent>
        <CardContent>
          {<Picture url={day2} />}
          <h2>Так что же такое фриланс? </h2>
          <p>
            Говоря коротко, фриланс представляет собой проектную работу. А
            человека, который работает на фрилансе, называют фрилансером.{" "}
          </p>
          <div className="bb">
            <p>
              Фриланс – это русскоязычное написание английского слова freelance.
              Оно состоит из двух частей: free (свободный) + lance (копьё,
              пика). Принято считать, что изобретение слова «фрилансер» было
              совершенно писателем Вальтером Скоттом в романе «Айвенго» (1819
              год), где описывался «вольный копейщик», средневековый
              вольнонаёмник, который сам решал, кому будет служить для охраны
              торгового каравана, осады крепости или в период военного похода.
              Но, если бы действительно честными, прослеживая историю этого
              слова, то оно употреблялось и до Вальтера Скотта, и его следы
              легко находятся в самом начале 19-го века.
            </p>
          </div>
          <p>
            В наши дни фрилансерами называют работников, которые оказывают
            профессиональные услуги без заключения с работодателем (заказчиком)
            долговременного договора. Но стоит знать, что фрилансерами считаются
            не только работники «вне штата», но и те, кто приглашены в компанию
            для выполнения какого-то проекта (задания) по «аутстаффингу».
            Простыми словами, это – оформление сотрудников в штат другой
            организации, то есть фактически они работают в одной компании, но
            числятся в другой, продолжая выполнение своих прежних трудовых
            обязанностей).
          </p>
          <p>
            В этом курсе мы не будем погружаться в тонкости и нюансы аустаффинга
            и будем говорить только о фрилансе в его самом распространненнном
            значении, где фрилансер – это специалист, работающий сам на себя.{" "}
          </p>
          <div className="bb">
            <p>
              Основное отличие фрилансера от того, кто имеет удаленную работу –
              тот факт, что фрилансер не является штатным сотрудником, а,
              следовательно, его отношения с работодателем (клиентом,
              заказчиком) не попадают под действие Трудового кодекса, что
              означает, например, отсутствие оплачиваемого отпуска и законного
              права уйти на больничный.{" "}
            </p>
          </div>
          <p>
            Так как фрилансер – это человек, который работает сам на себя, то
            ему необходимо самому искать заказчиков – по крайней мере, до тех
            пор, пока фрилансер не становится востребованным специалистом с
            высоко профессиональным портфолио, которое включает в себя
            разнообразные удачные «кейсы» (выполненные проекты). Решение,
            работать или нет с каждым конкретным заказчиком фрилансер принимает
            самостоятельно, исходя из своих желаний и возможностей. График
            работы фрилансер так же устанавливает себе сам, то есть время его
            работы может без каких-либо проблем начинаться, например, в обед или
            даже под вечер, а заканчиваться далеко за полночь, если какие-то
            ночные часы кажутся ему наиболее продуктивными для работы.{" "}
          </p>
          <p>
            Ограничений на количество заказчиков у фрилансера тоже нет, кроме
            личных возможностей, и работа сразу над несколькими проектами – это
            для фриланса самое обычное дело. Одного постоянного работодателя у
            фрилансера нет, но у него могут быть постоянные клиенты, которые
            прибегают к его услугам по мере необходимости.{" "}
          </p>
          <p>
            Резюмируя вышесказанное, можно сказать, что фрилансер – это
            работник, который имеет частную практику и «предоставлен сам себе».
            Решение о количестве рабочих часов и загруженности он принимает
            самостоятельно. За спиной фрилансера не стоит начальник, сурово
            наблюдающий за всеми этапами работы, и у фрилансера нет обязательств
            начинать работу в какие-то жестко зафиксированные часы. Из-за того,
            что рабочие отношения между ним и заказчиком краткосрочны, они
            заканчиваются сразу после успешного выполнения проекта. То есть у
            фрилансера нет необходимости годами терпеть начальника-самодура или,
            например, болтливого коллегу.{" "}
          </p>
          <p>
            Еще одним отличием фрилансера от штатного сотрудника является
            отсутствие фиксированной зарплаты за месяц либо почасовой оплаты
            труда, так как фрилансер получает деньги за выполненный проект
            (задание).
          </p>
        </CardContent>
        <CardContent>
          {<Picture url={day3} />}
          <h2>А что же работодатель?</h2>
          <p>
            Надо сказать, что многие работодатели любят нанимать именно
            фрилансеров и привлекать их для работы над актуальными задачами
            компании. И причина этого далеко не только лишь в том, что они
            просто хотят идти навстречу людям, желающим садиться за работу в те
            часы, в которые пожелают. Дело в том, что наём фрилансеров часто
            помогает компаниям сэкономить, сократив сумму расходов на персонал,
            так как фрилансер не обязан присутствовать в офисе и легко может
            находиться в другом городе или даже стране.{" "}
          </p>
          <div className="bb">
            <p>
              Многие думают, что хороший фриланс можно найти только в сфере IT,
              но это очень вредный стереотип. На самом деле фриланс-работа
              существует почти что во всех трудовых областях – от маркетинга и
              рекламы до разнообразных видов творчества. В целом, стать
              фрилансером можно и вовсе без особенного профессионализма в
              какой-либо области и просто начать зарабатывать, оказывая простые
              фриланс-услуги, вроде расшифровки аудио. Но по-настоящему хорошие
              заработки на фрилансе бывают у специалистов, которые имеют
              востребованную специализацию (тут никакой разницы с «обычной»
              работой нет).
            </p>
            <p>
              В следующих статьях курса мы вместе с вами разберемся, как выбрать
              свое направления фриланса, какие у него есть недостатки и
              преимущества и где вы можете найти свой первый заказ, чтобы
              получить за него ваши первые деньги.
            </p>
          </div>
        </CardContent>
      </ContentContainer>
    </>
  );
};
