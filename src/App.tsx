import { Outlet } from "react-router-dom";
import { Typography, Layout } from 'antd';

import styles from './App.module.css'

const { Title } = Typography;
const { Header, Content} = Layout

const App = () => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <Title className={styles.headerTitle}>STAR WARS</Title>
            </Header>
            <Content className={styles.content}>
                <Outlet/>
            </Content>
        </Layout>
    )
}

export { App }