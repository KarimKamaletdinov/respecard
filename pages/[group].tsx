import Image from 'next/image'
import { Accordion, Button, Container, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Dl from '../components/dl'
import { Dtd } from '../components/dtd'
import Layout from '../components/base-layout'
import image from '../../public/tinkoff_black.jpg'
import { getAllGroups, getGroupData } from '../services/data-service'
import { Group } from '../types/group'
import { GroupData } from '../types/group-data'
import ItemCard from '../components/item-card'

export type GroupProps = {
    group: GroupData,
    groups: Group[]
}

export default function GroupPage({ group, groups }: GroupProps) {
    return <Layout groups={groups}>
        {group.content.map(item => 
        <ItemCard data={item} key={item.name}/>
        )}
    </Layout>
}

export async function getStaticPaths() {
    return {
        paths: getAllGroups().map(group => {
            return { params: { group: group.name } }
        }), fallback: false
    }
}

export async function getStaticProps({ params }: any) {
    return {
        props: {
            group: getGroupData(params.group),
            groups: getAllGroups()
        },
    }
}