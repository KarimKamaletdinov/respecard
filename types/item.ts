import { Field } from "./field"
import { FieldGroup } from "./field-group"

export type Item = {
    name: string,
    shortDescription: Field[]
    groups: FieldGroup[]
}