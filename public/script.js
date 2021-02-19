const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    const formData = new FormData(form)
    const query = formData.get('search')
    window.open(`https://duckduckgo.com/?q=${query}`)
    form.reset()
    event.preventDefault()
})