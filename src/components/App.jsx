// src/App.jsx
import { useState } from 'react';
import Product from './Product';
import BookList from './BookList';
import { Alert } from "./Alert";
import UserMenu from './UserMenu';
import { ClickCounter } from './ClickCounter';
import { ClickCounterDeep } from './ClickCounterDeep';
import NewComponent from './NewComponent';


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
  
  const [clicks, setClicks] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickR = () => {
    //clicks = clicks + 1;
    setClicks(clicks + 1);
  };

    const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [clicksDeep, setClicksDeep] = useState(0);

	// Функція, яку будемо передавати в ClickCounterDeep
	// для виклику під час кліку
	const handleClickDeep = () => {
    setClicksDeep(clicksDeep + 1);
  };

  const [values, setValues] = useState({
    x: 0,
    y: 0,
	  });
	
	const updateX = () => {
			setValues({
			...values,
			x: values.x + 1
		});
	};

	const updateY = () => {
		setValues({
			...values,
			y: values.y + 1
		});
	};

  return (
    <div>
      <div>
        <NewComponent/>
        <h2>objects update</h2>
          <p>
             x: {values.x}, y: {values.y}
          </p>

           <button onClick={updateX}>Update x</button>
           <button onClick={updateY}>Update y</button>
        </div>
      <div>
        <h2>raising states</h2>
        <ClickCounterDeep value={clicksDeep} onUpdate={handleClickDeep} />
			  <ClickCounterDeep value={clicksDeep} onUpdate={handleClickDeep} />
      </div>
      <div>
        <h2>states isolation</h2>
        <ClickCounter />
			  <ClickCounter />
      </div>
      <div>
        <h2>States</h2>
        <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && <p>Now you can see me!</p>}
      </div>
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
