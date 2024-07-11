import useSWR from "swr"
import { useParams } from 'react-router-dom';
import { Breadcrumb, Flex } from "antd";

import { Character as CharacterType } from "../../common/types/character";
import { Spinner } from "../../common/components";
import { ErrorMessage } from "../../common/components";
import { Character } from "./character/Character";
import { fetcher } from "../../common/service/fetcher";

const CharacterContainer = () => {
    const { id } = useParams<{ id: string }>();
    const { data: character, error, isLoading } = useSWR<CharacterType>(`https://swapi.dev/api/people/${id}`, fetcher);


    const renderContent = () => {
        if (error) {
            return <ErrorMessage error={error}/>
        }

        if (isLoading) {
            return <Spinner/>
        }

        if (!character) {
            return null
        }

        return <Character character={character} />
    }

    return (
        <Flex vertical={true} gap="large">
            <Breadcrumb
                items={[{
                    title: 'Character List',
                    href: '/character-list'
                }, {
                    title: character?.name || '--'
                }]}
            />
            {renderContent()}
        </Flex>
    )
}

export { CharacterContainer }