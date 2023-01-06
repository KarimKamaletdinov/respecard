import Image from 'next/image'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { Field } from '../types/field'
import { FieldGroup } from '../types/field-group'
import { Item } from '../types/item'
import { Dtd } from './dtd'

export type IcProps = {
    data: Item
}

function renderField(field: Field) {
    function BBr(){
        return <><b>{field.name}</b><br/></>
    }
    if(field.value == ""){
        return <BBr key={field.name}/>
    }
    return <Dtd k={field.name + ": "} key={field.name}>{field.value}</Dtd>;
}

export default function ItemCard({ data }: IcProps) {
    let [selectedGroup, setSelectedGroup] = useState<FieldGroup | null>(null);
    return <div className='icard'>
        <div className='icard-main'>
            <div className='icard-image-placetaker'>
                <div className='icard-image-container'>
                    <Image src={'/card-images/' + data.name + '.jpg'} width="100" height="100" alt="Картинка почему-то не подгрузилась" className='icard-image' />
                </div>
            </div>
            <div className='icard-text'>
                <h2>{data.name}</h2>
                <div>{data.shortDescription.map(renderField)}</div>
            </div>
        </div>
        <div className='icard-buttons'>
            {data.groups.map(group =>
                <div key={group.title} onClick={e => setSelectedGroup(selectedGroup == group ? null : group)} 
                className={"icard-button" +(selectedGroup == group ? " icard-button-selected" : "")}>
                    <Image src="bottom-arrow.svg" width="0" height="0" alt=">"/>{group.title}
                </div>)}
        </div>
        {selectedGroup == null ? "" : <div className='icard-footer-content'>{selectedGroup.fields.map(renderField)}</div>}
    </div>
}
