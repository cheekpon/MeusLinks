function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute('src', 'https://scontent.faju2-1.fna.fbcdn.net/v/t39.30808-6/277178562_1828058690733438_2298718259094363290_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHmGUn4TUARGdR4xcnB8QH1sM99oBIBvYuwz32gEgG9i0bO3UnReHIemTdWq4ZxWysMwVKshFb3RAW0IJmweuVF&_nc_ohc=1v7NKkb2NB4Q7kNvgFo8R07&_nc_ht=scontent.faju2-1.fna&oh=00_AYBdudf07kbk9eqvd1hGgWmRA0KKQ6PBd7U9M7SDqUtbZg&oe=66713A36')
  }else {
    img.setAttribute('src', 'https://avatars.githubusercontent.com/u/69352668?s=100&v=4')
  }
}