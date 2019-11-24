interface SearchResult {
    title:  string,
    url:    string
}

/**
 * Faz uma pesquisa no Google.
 * @param query Os parâmetros de pesquisa no Google
 */
const Search = async (query: string) : Promise<SearchResult[]> => {
    return null
}

export default Search