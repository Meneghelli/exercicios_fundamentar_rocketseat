/*
  BUSCANDO E ENCONTRANDO ARRAYS

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    1. Contar o número de categorias e o número de livros em cada categoria
    2. Contar o número de autores
    3. Mostrar livros do autor Augusto Cury
    4. Transformar a função acima em uma função que irá receber do autor e devolver os livros desse autor.
  */

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilôia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai Rico e Pai Pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

//1. Contar o número de categorias e o número de livros em cada categoria
const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory) {
  console.log('Total de livros da categoria:', category.category)
  console.log(category.books.length)
}

//2. Contar o número de autores
/*
const totalAuthores = booksByCategory.length

console.log(totalAuthores)
for (let author of booksByCategory) {
  console.log('Total de Autores:', author.category)
  console.log(author.category.length)
}
*/
//2. RESULOÇÃO
function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('Total de autores:', authors.length)
}
countAuthors()

//3. Mostrar livros do autor Augusto Cury
/*
function countTitles() {
  let titles = []

  for (let titles of booksByCategory) {
    for (let book of titles.books) {
      if (titles.indexOf(book.title) == -1) {
        titles.push(book.title)
      }
    }
  }
  console.log('Livros do autor Augusto Cury:', titles.length)
}
countTitles()
*/

//3. RESOLUÇÃO
function booksOfAugustoCury() {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === 'Augusto Cury') {
        books.push(book.title)
      }
    }
  }
  console.log('Livros do Autor:', books)
}
booksOfAugustoCury()

//4. Transformar a função acima em uma função que irá receber do autor e devolver os livros desse autor.
function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do autor: ${author}:, ${books.join(', ')}`)
}
booksOfAuthor('Augusto Cury')
