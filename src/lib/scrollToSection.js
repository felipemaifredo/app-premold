export function scrollToSection(event) {
    event.preventDefault()
    let element = event.target.getAttribute("href")
    let toSection = document.querySelector(element).offsetTop
    window.scroll({
        top: toSection - 100,
        behavior: "smooth",
    })
}