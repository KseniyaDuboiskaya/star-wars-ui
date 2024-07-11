import { Descriptions } from "antd";

import { Character as CharacterType, Gender } from "../../../common/types/character";
import { formatDate } from "../../../common/utils";
import { Input } from "./controls/Input";
import { InputNumber } from "./controls/InputNumber";
import { Select } from "./controls/Select";
import { EditableInfo } from "./EditableInfo";

interface Props {
    character: CharacterType
}

interface EditableViewProps {
    value: string;
    updateValue: (value: string) => void;
}

const Character = ({ character }: Props) => {
    const descriptionItems = [
        {
            label: 'Birth Year',
            value: character.birth_year,
            renderEditableView: (props: EditableViewProps) => <Input {...props} />,
        },
        {
            label: 'Gender',
            value: character.gender,
            renderEditableView: (props: EditableViewProps) =>
                <Select
                    {...props}
                    options={Object.values(Gender).map(gender => ({ label: gender, value: gender }))}
                />
        },
        {
            label: 'Eye color',
            value: character.eye_color,
            renderEditableView: (props: EditableViewProps) => <Input {...props} />,
        },
        {
            label: 'Mass',
            value: character.mass,
            renderEditableView: (props: EditableViewProps) => <InputNumber {...props} />,
        },
        {
            label: 'Height',
            value: character.height,
            renderEditableView: (props: EditableViewProps) => <InputNumber {...props} />,
        },
        {
            label: 'Skin Color',
            value: character.skin_color,
            renderEditableView: (props: EditableViewProps) => <Input {...props} />,
        },
        {
            label: 'Hair color',
            value: character.hair_color,
            renderEditableView: (props: EditableViewProps) => <Input {...props} />,
        },
        {
            label: 'Created',
            value: formatDate(character.created),
            notEditable: true,
        },
        {
            label: 'Edited',
            value: formatDate(character.edited),
            notEditable: true,
        },
    ]

    return (
        <Descriptions title={`Info ${character.name}`}>
            {descriptionItems.map(({ value, label, renderEditableView, notEditable  }) => (
                <Descriptions.Item contentStyle={{ height: 30 }} label={label} key={label}>
                    {notEditable ? value : <EditableInfo initialValue={value} renderEditableView={renderEditableView!} />}
                </Descriptions.Item>
            ))}
        </Descriptions>
    )
}

export { Character }