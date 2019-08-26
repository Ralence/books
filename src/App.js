import React from 'react';
import NavBar from './components/NavBar/NavBar';
import BookList from './components/BookList/BookList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
