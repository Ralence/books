import React from 'react';
import NavBar from './components/NavBar/NavBar';
import BookList from './components/BookList/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggler from './components/ThemeToggle/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggler />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
