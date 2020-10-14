const Router = require('./router')
const links = require('./handlers/links')
const layout = require('./handlers/layout')


/**
 * Example of how router can be used in an application
 *  */

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})



async function handleRequest(request) {
    // Replace with the appropriate paths and handlers

    try{
    const r = new Router()
    r.get('.*/links', links)
    r.get('.*/*', layout)
    const  resp = await r.route(request)
    return resp;
    }
    catch(err){
        return new Response(err)
    }
}
