const templatePage = `https://static-links-page.signalnerve.workers.dev`
// const linksdata = require("./links")
const avatarurl = "https://www.kindpng.com/picc/b/22/223941.png"
// var data 

const init = {
    headers: { 'content-type': 'text/html' }
}

var socialdata = ["https://www.facebook.com/parth.sarthi.543",
                  "https://www.linkedin.com/in/parth-sarthi-prasad-510600185/",
                  "https://github.com/parthsarthiprasad",
                  "https://www.instagram.com/sarthparthi/",
                  "mailto: parthp.co18@nsut.ac.in"];
var svglinks = ["https://simpleicons.org/icons/facebook.svg",
                "https://simpleicons.org/icons/linkedin.svg",
                "https://simpleicons.org/icons/github.svg",
                "https://simpleicons.org/icons/instagram.svg",
                "https://simpleicons.org/icons/gmail.svg"];
// async function fetchData(){
//     let response = linksdata();
//     let data = await response.json();
//     data = JSON.stringify(data);
//     data = JSON.parse(data);
//     return data;
// }

// class LinksHandler {
//     if(data){
//         data =  fetchData();
//     }
    
//     element(element) {
//         data.forEach(linkdata =>{
//             var el = document.createElement('a')
//             el.setAttribute('href', linkdata.url)
//             el.innerText = linkdata.name
//             element.appendChild(el)
//         })
//     }
// }




// class SocialHandler {
//     // socialdata: [];
//     // svglinks: [];
//     constructor(socialdata = [], svglinks= []){
//         this.socialdata = socialdata
//         this.svglinks = svglinks
//     }
//     element(element) {
//         element.setAttribute("style", "display: flex")
//     if(element.childElementCount!=this.socialdata.length)
//     for(var i =element.childElementCount; i<this.socialdata.length; i++){
//         var el = document.createElement('a')
//         el.setAttribute('href', this.socialdata[i])
//         el.innerHTML = this.svglinks[i];
//         console.log(el)
//         element.append(el)   
//     }
//     }
// }

class TitleEditor {
    element(element){
        element.setInnerContent(`Parth Sarthi Prasad`)
    }
} 



class AttributeSetHandler{
    constructor(attributeName, attributeValue){
        this.attributeName = attributeName
        this.attributeValue = attributeValue
    }
    element(element){
        element.setAttribute(this.attributeName, this.attributeValue)
    }
}
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
    const { headers } = response
    const contentType = headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      return JSON.stringify(await response.json())
    }
    else if (contentType.includes("application/text")) {
      return await response.text()
    }
    else if (contentType.includes("text/html")) {
      return await response.text()
    }
    else {
      return await response.text()
    }
  }



const rewriter = new HTMLRewriter()
    .on('#avatar', new AttributeSetHandler("src", avatarurl))
    .on('title', new TitleEditor())
    .on('body', new AttributeSetHandler('style', "background-color: blue"))
    .on('#profile', new AttributeSetHandler('style', ' display: flex'))
    .on('#social', new SocialHandler(socialdata, svglinks))
    // .on("#profile", new ProfileHandler())
// const rewriter = new HTMLRewriter()
//     .on('#links', new LinksHandler())
//     .on("div $profile" , new ProfileHandler())

//     .on("#social", new SocialHandler(socialdata, svglinks))



const handler = async () => {
  
    const response = await fetch(templatePage,init)
    // var results = await gatherResponse(response)
    var template = rewriter.transform(response)
    // return new Response(results,init)
    // return results;
    return template;
}
module.exports = handler
