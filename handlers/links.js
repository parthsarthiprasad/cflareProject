var data = [
    {
        "name": "First Link",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
    },
    {
        "name": "Second Link",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
    },
    {
        "name": "my resume",
        "url": "https://parthsarthiprasad.github.io/"
    }
]

const handler = () =>{
    try{
        const body = JSON.stringify(data)
        const init = {
            headers: { 'content-type': 'application/json; charset=UTF-8' },
        }
        return new Response(body, init)
    }catch(err){
        return new Response(err)
    }
}

module.exports = handler