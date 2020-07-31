const section = document.querySelector('section')
const links = document.querySelectorAll('#nav-links a')
const title = document.querySelector('#title')

links.forEach(link => {

    link.onclick = e => {
        e.preventDefault()
        fetch(link.href)
            .then(res => res.text())
            .then(html => section.innerHTML = html)
    }
})

title.onclick = e => {
    window.location.pathname = "./admin"
}
