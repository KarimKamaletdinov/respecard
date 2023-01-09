import Image from 'next/image'
import { useState } from 'react'
import { Accordion, Button, OverlayTrigger, Tab, Tabs, Tooltip } from 'react-bootstrap'
import { Field } from '../types/field'
import { FieldGroup } from '../types/field-group'
import { Item } from '../types/item'
import { Dtd } from './dtd'

export type IcProps = {
    data: Item,
    selectedTab: string,
    setSelectedTab: (value: string) => void
}



export default function ItemCard({ data, selectedTab, setSelectedTab }: IcProps) {
    function replaceOurLink(text: string) {
        return text.replaceAll("по нашей ссылке", `<a href="${data.link}">по нашей ссылке</a>`);
    }


    function renderField(field: Field) {
        function BBr() {
            return <><b dangerouslySetInnerHTML={{ __html: replaceOurLink(field.name) }}></b><br /></>
        }
        if (field.value == "") {
            return <BBr key={field.name} />
        }
        return <Dtd key={field.name} k={replaceOurLink(field.name) + ": "} v={replaceOurLink(field.value)}></Dtd>;
    }

    return <div className='icard'>
        <div className='icard-left'>
            <Image src={'/card-images/' + data.name + '.jpg'} width="300" height="200" alt="Картинка почему-то не подгрузилась" className='icard-image' />
        </div>
        <div className='icard-right'>
            <h2>{data.name}</h2>
            <Button href={data.link} className="icard-action">Оформить</Button>
        </div>
        <Tabs activeKey={selectedTab} onSelect={v => setSelectedTab(v as string)} className="mb-3" transition={false}>
            <Tab eventKey="main" title="Основные">{data.shortDescription.map(renderField)}</Tab>
            {data.groups.map(group => 
                <Tab eventKey={group.title} title={group.title} key={group.title}>{group.fields.map(renderField)}</Tab>
            )}
        </Tabs>
    </div>
}
