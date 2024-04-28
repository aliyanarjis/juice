'use client'
import { useEffect } from 'react';
import './style.css'
export default function Spinner() {
    useEffect(() => {

    const spinnerTimeout = setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1);
  
      return () => clearTimeout(spinnerTimeout);
    }, []);
    return(
        <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary_orange" role="status"></div>
    </div>
    )
}