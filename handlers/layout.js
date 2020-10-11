const templatePage = `https://static-links-page.signalnerve.workers.dev`
const template = await fetch(templatePage)
const linksdata = require("./links")
cont avatarurl = "https://github.com/parthsarthiprasad/parthsarthiprasad.github.io/blob/master/public/images/myimage.jpeg"
var data = linksdata();
const init = {
    headers: { 'content-type': 'text/html' },
}

class LinksHandler {
    element(element) {
        data.forEach(linkdata =>{
            var el = document.createElement('a')
            el.setAttribute('href', linkdata.url)
            el.innerText = linkdata.name
            element.appendChild(el)
        })
    }
}

class ProfileHandler {
    element(element){
        element.setAttribute("display", "flex")
        if(!element.getAttribute("loading")){
            element.setAttribute('loading', 'laxy')
        }
    }
}

class AvatarHandler {
    element(element){
        if(!element.getAttribute("src")){
            element.setAttribute('src', avatarurl)
        }
    }
}
const handler = async () => {
    try{
        
        return rewriter.transform(template)
        // return new Response(template, init)
    }catch(err){
        return new Response(err)
    }
}

const rewriter = new HTMLRewriter()
    .on('#links', new LinksHandler())
    .on("div $profile" , new ProfileHandler())
    .on("#avatar", new AvatarHandler())
module.exports = handler
