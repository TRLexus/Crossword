// App.js
import React from 'react';
import Crossword from './components/Crossword';
import CrosswordHints from './components/CrosswordHints';
import './App.css'; // Sesuaikan jika ada perubahan pada file CSS aplikasi

function App() {
    return (
        <div className="App">
            <h1>Crossword Puzzle</h1>
            <Crossword />
            {/* Posisikan komponen CrosswordHints sesuai kebutuhan */}
            <CrosswordHints hints={['Petunjuk 1', 'Petunjuk 2', 'Petunjuk 3']} />
        </div>
    );
}

export default App;