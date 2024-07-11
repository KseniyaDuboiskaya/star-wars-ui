import { Select as SelectAntd } from "antd";

interface SelectProps {
    value: string,
    updateValue: (value: string) => void,
    options: { label: string, value: string }[]
}

const Select = ({ value, updateValue, options }: SelectProps) => {
    return (
        <SelectAntd
            value={value}
            size="small"
            style={{ width: 120 }}
            onChange={(updatedValue) => {
                updateValue(updatedValue)
            }}
            getPopupContainer={triggerNode => triggerNode.parentElement}
            options={options}
        />
    )
}

export { Select };
