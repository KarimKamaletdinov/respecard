import data from "./data";
import { Group } from "../types/group";
import { GroupData } from "../types/group-data";
import { Item } from "../types/item";
import { Field } from "../types/field";

export function getAllGroups():Group[]  {
    return Object.getOwnPropertyNames(data.groups).map(key => {
        return { name: key, title: (data.groups as any)[key].title }
    });
}

function parseField(line: string): Field{
    let eqIndex = line.indexOf('=');
    if(eqIndex == -1) eqIndex = line.length - 1;
    const beforeEq = line.substring(0, eqIndex);
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
    lines.forEach(line => {
        const tline = line.trim();
        if(tline.startsWith('#')){
            const normalizedLine = tline.substring(1);
            shortDescriptionLines.push(prepareLineForShortDescription(normalizedLine));
            normalizedLines.push(normalizedLine.replace('[', '').replace(']', ''));
        } else {
            normalizedLines.push(tline.replace('[', '').replace(']', ''));
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
        })
    };
}

export function getGroupData(groupName: string): GroupData{
    const group = (data.groups as any)[groupName];
    return {
        name: groupName,
        title: group.title,
        sortableFields: Object.getOwnPropertyNames(group.sort).map(f => f.startsWith('!') ? f.substring(1) : f),
        content: Object.getOwnPropertyNames(group.items).map(item => parseItem(item, group.items[item], group.groups)),
    };
}