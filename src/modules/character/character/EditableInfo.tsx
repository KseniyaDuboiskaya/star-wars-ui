import {  useState } from "react";
import { CheckSquareFilled, CloseSquareFilled, EditFilled } from "@ant-design/icons";
import { Flex } from "antd";

import { useClickOutside } from "../../../common/hooks/useClickOutside";

interface EditableInfoProps {
    initialValue: string;
    renderEditableView: (props: { value: string; updateValue: (value: string) => void }) => React.ReactNode;
}

const EditableInfo = ({ initialValue, renderEditableView }: EditableInfoProps) => {
    const [editableActive, setEditableActive] = useState<boolean>(false)
    const [value, setValue] = useState<string>(initialValue)
    const [inputValue, setInputValue] = useState<string>(initialValue)

    const reset = () => {
        setEditableActive(false)
        setInputValue(value)
    }

    const ref = useClickOutside({ callback: () => reset()});

    const renderEditableActiveView = () => {
        return (
            <>
                {renderEditableView({ value: inputValue, updateValue: setInputValue})}
                <CheckSquareFilled onClick={() => {
                    setEditableActive(false)
                    setValue(inputValue)
                    }}
                />
                <CloseSquareFilled onClick={() => reset()}
                />
            </>
        )
    }

    const renderEditableNotActiveView = () => {
        return (
            <>
                {value}
                <EditFilled onClick={() => setEditableActive(true)} />
            </>
        )
    }

    return (
        <Flex gap="small" ref={ref}>
            {editableActive ? renderEditableActiveView() : renderEditableNotActiveView()}
        </Flex>
    );
}

export { EditableInfo }