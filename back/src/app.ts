import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/books', (_: Request, res: Response)  => {
    const books = [
        {
            id: 1,
            title: 'THE LITTLE PRINCE',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 2,
        },
        {
            id: 2,
            title: 'THE LORD OF THE RINGS',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 1,
        },
        {
            id: 3,
            title: 'Title 2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 2,
        },
        {
            id: 4,
            title: 'Title 3',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 2,
        },
        {
            id: 5,
            title: 'Title 4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 3,
        },
        {
            id: 6,
            title: 'Title 4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 2,
        },
        {
            id: 7,
            title: 'Title 4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 2,
        },
        {
            id: 8,
            title: 'Title 4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo recusandae nulla culpa rem fuga iste inventore fugit beatae ut dolores sed accusantium ratione obcaecati reprehenderit vel, magnam, cupiditate laudantium.',
            authorId: 1,
        },
    ];
    res.json(books);
});
app.get('/authors', (_: Request, res: Response)  => {
    const authors = [
        {
            id: 1,
            name: 'Antoine de Saint-Exupéry'
        },
        {
            id: 2,
            name: 'J. R. R. Tolkien'
        },
        {
            id: 3,
            name: 'Paulo Coelho'
        },
    ];
    res.json(authors);
});
const PORT = 9000;
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));