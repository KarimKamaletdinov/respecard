import Layout from '../../../components/base-layout'
import { getAllGroups, getGroupData } from '../../../services/data-service'
import { Group } from '../../../types/group'
import { GroupData } from '../../../types/group-data'
import ItemCard from '../../../components/item-card'
import GroupPage, { GroupProps } from '../../[group]'


export default function OrderPage({ group, groups, selectedSort }: GroupProps) {
    return <GroupPage group={group} groups={groups} selectedSort={selectedSort}/>
}

export async function getStaticPaths() {
    return {
        paths: getAllGroups().flatMap(group => group.sortableFields.map(field => {
            return {
                params: {
                    group: group.name,
                    order: field
                }
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }: any) {
    return {
        props: {
            group: getGroupData(params.group, params.order),
            groups: getAllGroups(),
            selectedSort: params.order
        },
    }
}