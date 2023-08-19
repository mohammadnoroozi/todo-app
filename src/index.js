import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <App />
        <Toaster />
    </>
);