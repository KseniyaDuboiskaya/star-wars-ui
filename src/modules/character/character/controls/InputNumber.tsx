import { InputNumber as InputNumberAntd } from "antd";

interface InputNumberProps {
    value: string
    updateValue: (value: string) => void
}

const InputNumber = ({ value, updateValue }: InputNumberProps) => {
    return (
        <InputNumberAntd
            size="small"
            value={value}
            onChange={(updatedValue) => {
                updateValue(updatedValue as string)
            }}
        />
    )
}

export { InputNumber };
