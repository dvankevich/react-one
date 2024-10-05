// src/App.jsx
import { useState } from 'react';
import Product from './Product';
import BookList from './BookList';
import { Alert } from "./Alert";
import UserMenu from './UserMenu';


const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "React for beginners" }
];

const CustomButton = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
};

export default function App() {
  const handleClick = (evt) => {
    console.log(evt);
    alert("I'm a button! See console log.");
  };
  
  // let clicks = 0;
  const [ clicks, setClicks ] = useState(10);

  const handleClickR = () => {
    //clicks = clicks + 1;
    setClicks(clicks + 1);
  };

  return (
    <div>
      <div>
        <h2>reactive</h2>

        <button onClick={handleClickR}>Current: {clicks}</button>

      </div>
      <div>
        <h2>reading props</h2>
        <CustomButton message="Playing music!">
        Play some music
        </CustomButton>
        <CustomButton message="Uploading your data!">
        Upload data
        </CustomButton>
      </div>
      <div>
        <h2>Button event handler</h2>
        
        <button onClick={handleClick}>Click me!</button>

        <button onClick={() => alert("I'm a button. Anonymous inline function!")}>Click me!</button>

        <button onClick={evt => console.log(evt)}>Second button</button>
      </div>

      <h2>User icon</h2>
      <UserMenu name="User Name" />
      
      <h2>Alerts</h2>

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated >
        Please update your profile contact information
      </Alert>
    
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
