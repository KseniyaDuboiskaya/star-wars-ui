import { Card, Flex, Result} from "antd";
import { Link } from "react-router-dom";

import { Spinner } from "../../../common/components";
import { Character } from "../../../common/types/character";

import styles from "./CharacterList.module.css";

interface Props {
    isLoading: boolean,
    list: Character[],
    search: string
}

const CharacterList = ({ isLoading, list, search }: Props) => {
    if (isLoading) {
        return <Spinner />
    }

    if (!isLoading && !list.length) {
        return (
            <Flex justify="center" align="center" className={styles.emptyResult}>
                <Result title={search ? "No result for this search input": "There is no characters"}/>
            </Flex>
        )
    }

    return list.map((character) => {
        const [, id] = character.url.match(/\/people\/(\d+)\//) as RegExpMatchArray;
        return (
            <Card
                title={character.name}
                key={id}
                className={styles.card}
            >
                <Link to={`/character/${id}`}>Open Character</Link>
            </Card>
        )
    })
}

export { CharacterList }