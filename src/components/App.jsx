// src/App.jsx
import Product from './Product';
import BookList  from './BookList';

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "React for beginners" }
];

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
    <h2>Books</h2>
      <BookList books={favouriteBooks} />
    <h2>Products</h2>
      <Product
        name="Tacos With Lime"
        price={10.99}
      />

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    <p
      style={{
        margin: 8,
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "gray",
        color: "white",
      }}
    >
      Please update your email!
    </p>
    </div>
 );
}
