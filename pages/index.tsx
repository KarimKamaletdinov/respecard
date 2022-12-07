import Image from 'next/image'
import { Accordion, Button, Container } from 'react-bootstrap'
import Dl from '../components/dl'
import { Dtd } from '../components/dtd'
import Layout from '../components/base-layout'
import styles from '../styles/app.module.css'
import image from '../public/tinkoff_black.jpg'
import Link from 'next/link'


export default function Home() {
  return <Layout>
    <Container className='p-2'>
      <h1>Tinkoff Black</h1>
      <div className={`d-inline-block ${styles.pictureContainer}`}>
        <Image src={image} alt='тут должна быть картинка карты Тинькофф' className={`w-100 ${styles.picture}`} />
      </div>
      <ul>
        <li>Процент на остаток – до 6% годовых.</li>
        <li>Кэшбэк – до 15% в четырех категориях выбранными вами.</li>
        <li>Обслуживание – 99 ₽ в месяц.</li>
        <li>Оформляя карту <a href="https://www.tinkoff.ru/sl/1bAw1sHkCNh">по нашей ссылке</a>, вы получаете
          бесплатное обслуживание навсегда.</li>
      </ul>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Как заказать карту
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Перейдите по ссылке ниже.</li>
              <li>Заполните анкету.</li>
              <li>Вам позвонит сотрудник банка.</li>
              <li>Сотрудник банка спросит адрес, и в какое время вы бы хотели встретиться с представителем
                Tinkoff.
                (Представитель Tinkoff – человек, который доставит вам карту)</li>
              <li>В назначеное вами время представитель Tinkoff будет на назначеном вами адресе.</li>
              <li>Вы должны прийти на встречу <b>с паспортом</b>.</li>
              <li>Вам отдадут карту, и вы подпишете договор с банком.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>О карте</Accordion.Header>
          <Accordion.Body>
            <Dl>
              <Dtd k={"Тип карты"}>
                <ul>
                  <li>Мир</li>
                  <li>Классическая</li>
                </ul>
              </Dtd>
              <Dtd k="Варианты выпуска">Физическая именная</Dtd>
              <Dtd k="Бесконтактная оплата">Samsung Pay (не точно)</Dtd>
              <Dtd k="Мультивалютная">Да</Dtd>
            </Dl>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Привилегии для держателей карты</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Возможность оформить финансовую подписку Tinkoff Pro (199 ₽/мес. начиная со 2–го
                месяца),
                Tinkoff Premium (1990 ₽/мес., бесплатно при выполнении ряда условий)</li>
              <li>Возможно оформить виртуальную карту, но до подписания договора будет действовать ряд
                ограничений</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Тарифы</Accordion.Header>
          <Accordion.Body>
            <Dl>
              <Dtd k="Стоимость выпуска">бесплатно</Dtd>
              <Dtd k="Стоимость обслуживания">99 ₽ в месяц</Dtd>
              <Dtd k="Стоимость СМС информирования">бесплатно</Dtd>
              <Dtd k="Стоимость выпуска">59 ₽ в месяц</Dtd>
              <Dtd k="Снятие наличных">
                в банкоматах банка
                <ul>
                  <li>бесплатно при снятии до 500 000 ₽ </li>
                  <li>2% от суммы (мин. 90 ₽), превышающей 500 000 ₽/мес.</li>
                </ul>
                в сторонних банкоматах
                <ul>
                  <li>бесплатно при снятии от 3 000 ₽, но не более 100 000 ₽/мес. </li>
                  <li>2% от суммы (мин. 90 ₽) от суммы, превышающей 100 000 ₽/мес.</li>
                </ul>
              </Dtd>
            </Dl>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>Бонусы</Accordion.Header>
          <Accordion.Body>
            <h3>Кэшбэк</h3>
            <Dl>
              <Dtd k="Максимальный кэшбэк">15%</Dtd>
              <Dtd k="Покупки у партнеров">30%</Dtd>
              <Dtd k="Сумма начислений в месяц">3 000 ₽/мес</Dtd>
              <Dtd k="Категории покупок">
                <ul>
                  <li>Супермаркеты</li>
                  <li>Транспорт и такси</li>
                  <li>Аптеки и медицина</li>
                  <li>Путешествия и активный отдых</li>
                  <li>Авто и заправки</li>
                  <li>Игры и хобби</li>
                  <li>Дом и ремонт</li>
                  <li>Кафе и рестораны</li>
                  <li>Кино и развлечения</li>
                  <li>Красота и здоровье</li>
                  <li>Одежда и обувь</li>
                  <li>Детские товары</li>
                  <li>Домашние животные</li>
                  <li>Спорттовары</li>
                  <li>Электроника</li>
                </ul>
              </Dtd>
            </Dl>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className={styles.plh}></div>
    </Container>
    <div className={`fixed-bottom ${styles.btnContainer} w-100`}>
        <Button as="a" className={styles.buyBtn} href="https://www.tinkoff.ru/sl/1bAw1sHkCNh" variant='light'>Оформить карту</Button>
    </div>
  </Layout>
}
