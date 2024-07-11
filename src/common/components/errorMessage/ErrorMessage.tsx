import { Flex, Result } from "antd";
import { CustomError } from "../../utils/errors/customError.ts";

import styles from './ErrorMessage.module.css'

interface Props {
    error: CustomError
}

const ErrorMessage = ({ error }: Props) => {
    return (
        <Flex justify="center" className={styles.errorMessage} align="center">
            <Result
                title="Sorry, something went wrong."
                subTitle={error.statusCode}
            />
        </Flex>
    );
}

export { ErrorMessage }