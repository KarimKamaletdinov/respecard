import Layout from '../components/base-layout'
import { getAllGroups, getGroupData } from '../services/data-service'
import { Group } from '../types/group'
import { GroupData } from '../types/group-data'
import ItemCard from '../components/item-card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'

export type GroupProps = {
    group: GroupData,
    groups: Group[],
    selectedSort: string
}

export default function GroupPage({ group, groups, selectedSort }: GroupProps) {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState("main");
    return <Layout groups={groups} selectedGroup={group} title={group.title + " - RESPECARD"}>
        <Dropdown>
            <Dropdown.Toggle id="dropdown" variant="secondary">
                {selectedSort == "" ? "Сортировка" : selectedSort.replace('!', '')}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {group.sortableFields.map(field =>
                    <Dropdown.Item key={field} as={"div"}>
                        <Link href={"/" + group.name + "/order/" + field}>
                            {field.replace('!', '')}
                        </Link>
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
        <div className='cards-container'>
            {group.content.map(item =>
                <ItemCard data={item} key={item.name} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            )}
        </div>
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