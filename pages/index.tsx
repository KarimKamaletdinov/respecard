import Layout from '../components/base-layout'
import { getAllGroups } from '../services/data-service'
export default function Home({groups}: any) {
    return <Layout groups={groups} selectedGroup={undefined}>
        <h1>Поможем с выгодой выбрать дебетовые и кредитные карты, кредиты, каско</h1>
    </Layout>
}

export async function getStaticProps() {
    return {
      props: {
        groups: getAllGroups()
      },
    }
  }