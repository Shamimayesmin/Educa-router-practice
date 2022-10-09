import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const loadData = useLoaderData()
    // console.log(loadData)
    return (
        <div className='grid grid-cols-3 p-10 gap-5'>
           
            {
                loadData.map(data => <Course key={data.id} data ={data}></Course>)
            }
        </div>
    );
};

export default Courses;