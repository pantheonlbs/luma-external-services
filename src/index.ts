import Koa from 'koa'
import Router from 'koa-router'
import { config } from 'dotenv'
import { requiresKey } from './utils'

import SearchRoute from './search.service'

config()

const app = new Koa()
const API = new Router()

API.get('/ping', (ctx: Koa.Context) => ctx.body = 'OK')
API.get('/google', requiresKey, SearchRoute)

app.use(API.routes()).use(API.allowedMethods())
app.listen(process.env.PORT)