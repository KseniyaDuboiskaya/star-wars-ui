import { Input as InputAntd } from "antd";

interface InputProps {
    value: string
    updateValue: (value: string) => void
}

const Input = ({ value, updateValue }: InputProps) => {
    return (
        <InputAntd
            size="small"
            value={value}
            onChange={(updatedValue) => {
                updateValue(updatedValue.target.value)
            }}
        />
    )
}

export { Input };

