import Koa from 'koa'
import google from 'google-it'

interface SearchResult {
    title:  string,
    link:    string
}

/**
 * Faz uma pesquisa no Google.
 * /google?query=...&key=...
 * @param query Os parâmetros de pesquisa no Google
 */
const Search = async (query: string) : Promise<SearchResult[]> => {
    let results = await google({ 
        query: query, 
        options: { url: 'http://www.google.com.br/search' } 
    })

    return results
}

const SearchRoute = async (ctx: Koa.Context) => {
    let query: string = ctx.query.query

    if (!query) {
        // Bad Request
        ctx.status = 400
        ctx.body = {
            'success': false,
            'code': 400,
            'msg': 'Query não especificada',
            'data': {}
        }
        return
    }

    let results = await Search(query)

    ctx.status = 200
    ctx.body = {
        'success': true,
        'code': 200,
        'msg': '',
        'data': {
            'results': results
        }
    }
}

export default SearchRoute