import Koa from 'koa'

/**
 * Middleware que verifica se uma requisição pode acessar uma determinada rota.
 * Procura um parâmetro `key` nos parâmetros da URL e compara com process.env.KEY
 */
const requiresKey = async (ctx: Koa.Context, next: any) => {
    if (ctx.query.key === process.env.KEY)
        return next()

    // Não autorizado!
    ctx.status = 401
    ctx.body = {
        'success': false,
        'code': 401,
        'msg': 'Não autorizado! Chave incorreta?',
        'data': {}
    }
}

export { requiresKey }