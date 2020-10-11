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
    const r = new Router()
    // Replace with the appropriate paths and handlers

    try{
    r.get('./links', links)
    r.get('./*', layout)
    return r.route(request)
    }
    catch(err){
        return new Response(err)
    }
}