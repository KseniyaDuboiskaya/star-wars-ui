import { useReducer } from 'react'
import { Flex, Input, Pagination } from "antd";
import useSWR from "swr";

import { Spinner } from '../../common/components'
import { ErrorMessage } from "../../common/components";
import { Character } from "../../common/types/character";
import { fetcher } from "../../common/service/fetcher";
import { CharacterList } from "./characterList/CharacterList";

import { CHARACTER_LIST_INITIAL_STATE, CharacterListAction, characterListReducer } from "./reducer";
import styles from './CharacterListContainer.module.css'

const { Search } = Input;

interface CharacterListResponse {
    count: number
    results: Character[]
}

const CharacterListContainer = () => {
    const [characterListState, dispatch] = useReducer(characterListReducer, CHARACTER_LIST_INITIAL_STATE)
    const { pagination, search, initialized} = characterListState

    const onSuccessFetch = (data: CharacterListResponse) => {
        if (!initialized) {
            dispatch({ type: CharacterListAction.INITIALIZE })
        }
        if (pagination.totalItems !== data.count) {
            dispatch({ type: CharacterListAction.SET_PAGINATION, pageSize: data.results.length, totalItems: data.count })
        }
    }

    const { data, error, isLoading } = useSWR<CharacterListResponse>(`https://swapi.dev/api/people?page=${pagination.currentPage}&search=${search}`, (url: string) => fetcher(url, onSuccessFetch));

    if (isLoading && !initialized) {
        return <Spinner />
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return (
        <Flex vertical={true} gap="large" align="flex-end">
            <Search
                placeholder="Search..."
                className={styles.searchInput}
                onSearch={(value) => dispatch({ type: CharacterListAction.SET_SEARCH, search: value })}
            />
             <Flex gap="large" wrap className={styles.characterList}>
                 <CharacterList
                    list={data?.results || []}
                    search={characterListState.search}
                    isLoading={isLoading}
                />
            </Flex>
            {pagination.totalItems > pagination.pageSize && <Pagination
                showSizeChanger={false}
                current={pagination.currentPage}
                total={pagination.totalItems}
                defaultPageSize={pagination.pageSize}
                onChange={(pageNumber) => dispatch({ type: CharacterListAction.SET_CURRENT_PAGE, currentPage: pageNumber})}
            />}
        </Flex>
    )
}

export { CharacterListContainer }