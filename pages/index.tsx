import { Accordion, Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import styles from '../styles/app.module.css'

export default function Home() {
  return <Layout>
    <Container className='p-2'>
      <h1>Tinkoff Black</h1>
      <Accordion>
        <div className={`d-inline-block ${styles.pictureContainer}`}>
          <img src="./tinkoff_black.jpg" className={`v-100 ${styles.picture}`} />
        </div>
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
      </Accordion>
    </Container>
  </Layout>
}
