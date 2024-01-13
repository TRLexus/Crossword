// CrosswordHints.js
import React from 'react';

const CrosswordHints = ({ hints }) => {
    return (
        <div>
            <h2>Petunjuk:</h2>
            <ul>
                {hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                ))}
            </ul>
        </div>
    );
};

export default CrosswordHints;