import data from "./data";
import { Group } from "../types/group";
import { GroupData } from "../types/group-data";
import { Item } from "../types/item";
import { Field } from "../types/field";

export function getAllGroups():Group[]  {
    return Object.getOwnPropertyNames(data.groups).map(key => {
        return { 
            name: key, 
            title: (data.groups as any)[key].title, 
            sortableFields: Object.getOwnPropertyNames((data.groups as any)[key].sort)
        }
    });
}

function parseField(line: string): Field{
    let eqIndex = line.indexOf('=');
    if(eqIndex == -1) eqIndex = line.length - 1;
    const beforeEq = line.substring(line.includes('::') ? line.indexOf('::') + 2 : 0, eqIndex);
    const afterEq = line.substring(eqIndex + 1);
    return {
        name: beforeEq.trim(),
        value: afterEq.trim()
    }
}

function prepareLineForShortDescription(line: string): string{
    if(line.includes('[') && line.includes(']')){
        return line.substring(0, line.indexOf('[')) + line.substring(line.indexOf(']') + 1);
    }
    return line;
}

function parseItem(name: string, text: string, groups: string[]): Item{
    const lines = text.split('\n');
    const shortDescriptionLines = ([] as string[]);
    const normalizedLines = ([] as string[]);
    let additionalInfo = (null as Field|null);
    let link = 'error';
    lines.forEach(line => {
        const tline = line.trim();
        if(additionalInfo == null){
            if(tline.startsWith('#')){
                const normalizedLine = tline.substring(1);
                shortDescriptionLines.push(prepareLineForShortDescription(normalizedLine));
                normalizedLines.push(normalizedLine.replace('[', '').replace(']', ''));
            } else if(tline.startsWith('?')) {
                additionalInfo = {
                    name: tline.substring(1).trim(),
                    value: ''
                };
            } else if(tline.startsWith('*')){
                link = tline.substring(1).trim();
            }else {
                normalizedLines.push(tline.replace('[', '').replace(']', ''));
            }
        } else {
            additionalInfo.value += tline + '\n';
        }
    });
    return {
        name: name,
        shortDescription: shortDescriptionLines.map(parseField),
        groups: groups.map(group => {
            return {
                title: group,
                fields: normalizedLines.filter(l => l.startsWith(group)).map(parseField)
            }
        }),
        additionalInfo: additionalInfo,
        link: link
    };
}

export function getGroupData(groupName: string, sortBy: string|undefined = undefined): GroupData{
    const group = (data.groups as any)[groupName];
    const result = {
        name: groupName,
        title: group.title,
        sortableFields: Object.getOwnPropertyNames(group.sort),
        content: Object.getOwnPropertyNames(group.items).map(item => parseItem(item, group.items[item], group.groups)),
    };
    if(sortBy == undefined) return result;

    function valueOf(field: Field): number{
        const regExp = /[^0-9]/g
        const intContent = field.value.replaceAll(regExp, '');
        let result = parseInt(intContent);
        if(/[Д,д]о /.test(field.value)) result -= 0.0001;
        return isNaN(result) ? 0 : result;
    }

    const sortField = group.sort[(sortBy as string)] as RegExp;
    function includesOf(item: Item): number{
        const totalFields = item.groups.flatMap(group => group.fields);
        totalFields.push(...item.shortDescription);
        const sortingFields = totalFields.filter(field => sortField.test(field.name));
        const result = sortingFields.map(field => valueOf(field)).reduce(((acc, current) => acc + current), 0);
        console.log(item.name, result)
        console.log();
        return result;
    }

    result.content = result.content.sort((a, b) => includesOf(a) - includesOf(b));
    if(sortBy.startsWith('!')){
        result.content = result.content.reverse();
    }
    return result;
}