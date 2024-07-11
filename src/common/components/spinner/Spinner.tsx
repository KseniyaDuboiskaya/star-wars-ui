import { Flex, Spin } from "antd";

import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <Flex justify="center" align="center" className={styles.spinner}>
            <Spin size="large" />
        </Flex>
    )
}

export { Spinner }