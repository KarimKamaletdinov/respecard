import Layout from '../components/base-layout'
import { getAllGroups, getGroupData } from '../services/data-service'
import { Group } from '../types/group'
import { GroupData } from '../types/group-data'
import ItemCard from '../components/item-card'
import Link from 'next/link'

export type GroupProps = {
    group: GroupData,
    groups: Group[],
    selectedSort: string
}

export default function GroupPage({ group, groups, selectedSort }: GroupProps) {
    return <Layout groups={groups} selectedGroup={group} title={group.title + " - RESPECARD"}>
        {group.sortableFields.map(field =>
            <Link key={field} href={`/${group.name}/order/${field}`} className={"btn btn-secondary sort-button" + (selectedSort == field ? " btn-highlighted" : "")}>
                {field.startsWith('!') ? field.substring(1) : field}
            </Link>
        )}
        {group.content.map(item =>
            <ItemCard data={item} key={item.name} />
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
            groups: getAllGroups(),
            selectedSort: ""
        },
    }
}