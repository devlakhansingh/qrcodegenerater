let btn = document.querySelector("button")
let input = document.querySelector("input")
let form = document.querySelector("form")
let img = document.querySelector("img")
let select= document.querySelector("select")
console.log(select)


async function getQr(e) {
    e.preventDefault()
   let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${name.value}&data= ${input.value}`)
let qrimageurl = response.url
img.setAttribute( 'src',qrimageurl )
form.reset


}
form.addEventListener('submit', getQr)




