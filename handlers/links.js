var data = [
    {
        "name": 
        "url":
    },
    {
        "name": 
        "url":
    },
    {
        "name": 
        "url":
    }
]
const init = {
    headers: { 'content-type': 'application/json; charset=UTF-8' },
}
const body = JSON.stringify(data)
const handler = request =>{
    try{
        return new Response(body, init)
    }catch(err){
        return new Response(err)
    }
}

module.exports = handler