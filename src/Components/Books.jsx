import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import Book from './Pages/Book';


const Books = ({data}) => {
    const [allbooks, setAllBooks]= useState([]);

    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data => {
    //        setAllBooks(data)
            
    //     })
    // },[])

    // const bookPromise=fetch('./booksData.json').then(res=>res.json())

    return (
        <div>
            <h1 className='text-3xl text-center'>Books</h1>
            <Suspense fallback={<span>Loading...</span>} >
           
                <Book data={data}></Book>
            
            </Suspense>
            
        </div>
    );
};

export default Books;