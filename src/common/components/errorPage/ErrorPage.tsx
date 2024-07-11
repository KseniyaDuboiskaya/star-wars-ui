import {useNavigate, useRouteError} from "react-router-dom";
import {Button, Flex, Result} from "antd";

import styles from './ErrorPage.module.css'

interface RouteError {
    statusText?: string;
}

const ErrorPage = () => {
    const error = useRouteError() as RouteError
    const navigate = useNavigate()

    return (
        <Flex justify="center" className={styles.errorPage} align="center">
            <Result
                title="Sorry, something went wrong."
                subTitle={error.statusText}
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />
        </Flex>
    )
}

export { ErrorPage }