import { useEffect, useState } from 'react'

function App() {

  interface Book {
    id: number;
    title: string;
    description: string;
    authorId: number;
  }

  interface Author {
    id: number;
    name: string;
  }

  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchBook, setSearchBook] = useState<string>('');
  // const [errorFetch, setErrorFetch ] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResult, authorsResult] = await Promise.all([
          fetch(import.meta.env.VITE_BACKEND_PROXY_BOOKS),
          fetch(import.meta.env.VITE_BACKEND_PROXY_AUTHORS)
        ]);
  
        const booksData = await booksResult.json();
        const authorsData = await authorsResult.json();
        setBooks(booksData);
        setAuthors(authorsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        // setErrorFetch(true);
      }
    };
    fetchData();
  }, [ ]);

  // computed properties
  const booksFiltered = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(searchBook.trim());
  });

  return (
    <div className='mx-14 my-4 p-6 bg-[#f7f8fc]'>
        {/* header */}
        <header className='flex flex-col sm:flex-row sm:justify-between mb-2 p-2 gap-2'>
          <div>
            <h2 className='text-[#e93345] font-bold text-4xl'>Best sellers all times</h2>
          </div>
          <div className='border-2 w-full sm:w-1/5'>
            <input type="text" className='p-3 w-full focus:outline-none' placeholder='write something to search...'
            value={searchBook}
            onChange={e => setSearchBook(e.target.value)}
            />
          </div>
        </header>
      {/* main */}
      <main className='flex flex-col gap-2'>
        {
          booksFiltered.length? booksFiltered.map(book => {
            const author =  authors.find(author => author.id === book.authorId)!;
            const element = (
            <div className='rounded-xl p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' key={book.id}>
              <div className='flex flex-col sm:flex-row gap-2 justify-between'>
                <div>
                  <h1 className='font-bold'>{ book.title.toUpperCase() }</h1>
                </div>
                <div>
                  <span className='text-[#abcba4] font-semibold text-xs bg-green-200 border rounded-3xl py-2 px-1'>AUTHORID: { author.id }</span>
                </div>
              </div>
              <div className='mt-2'>
                <h2 className='font-bold'>{ author.name }</h2>
                <p className='font-normal'>{ book.description }</p>
              </div>
              <div className='flex justify-end'>
                <div className='text-[#bcc1dc]'>SHOW BOOK</div>
              </div>
            </div>
            );
            return element;
          }): (
            <h2>Book not found!</h2>
          )
        }
      </main>
    </div>
  )
}

export default App;