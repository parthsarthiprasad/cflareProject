const templatePage = `https://static-links-page.signalnerve.workers.dev`
const template = await fetch(templatePage)
const linksdata = require("./links")
cont avatarurl = "https://github.com/parthsarthiprasad/parthsarthiprasad.github.io/blob/master/public/images/myimage.jpeg"
var data = linksdata();
const init = {
    headers: { 'content-type': 'text/html' },
}

var socialdata = ["https://www.facebook.com/parth.sarthi.543",
                  "https://www.linkedin.com/in/parth-sarthi-prasad-510600185/",
                  "https://github.com/parthsarthiprasad",
                  "https://www.instagram.com/sarthparthi/",
                  "mailto: parthp.co18@nsut.ac.in"]
var svglinks = ["https://simpleicons.org/icons/facebook.svg",
                "https://simpleicons.org/icons/linkedin.svg",
                "https://simpleicons.org/icons/github.svg",
                "https://simpleicons.org/icons/instagram.svg",
                "https://simpleicons.org/icons/gmail.svg"]
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

class SocialHandler {
    element(element) {
        element.setAttribute("display", "flex")
    }
    for(var i =0; i<socialdata.length; i++){
        var el = document.createElement('a')
        el.setAttribute('href', socialdata[i])
        el.innerHTML = svglinks[i];
        element.appendChild(el)   
    }
}

class TitleEditor {
    element(element){
        element.innerText = `Parth Sarthi Prasad`
    }
} 

class BgEditor {
    element(element){
        element.setAttribute('background-color', "rgba(126,32,144,var(--bg-opacity))")
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
    .on("#social", new SocialHandler())
    .on("title", new TitleEditor())
    .on("body", new BgEditor())
module.exports = handler
