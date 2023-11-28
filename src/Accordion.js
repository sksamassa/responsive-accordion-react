import React, { useState } from 'react';
import './accordion.css';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";


export default function Accordion({ sections }){
    const [activeIndex, setActiveIndex] = useState(null);

    function handleToggle(index){
        setActiveIndex((prevIndex) => (prevIndex === index ? 'null' : index));
    }

    return (
        <div className='accordion'>
            { sections.map((section, index) => (
                <div key={index} className='accordion-section'>
                    <div
                    className={`accordion-header ${activeIndex === index ? 'active' : '' }`}
                    onClick={() => handleToggle(index)}
                    >
                        <div className='accordion-title'>
                            {section.title}
                        </div>
                        <div className='accordion-icon'>
                            { 
                                activeIndex === index ? <IoIosArrowDown /> 
                                : <IoIosArrowForward />
                             }
                        </div>
                    </div>

                    {
                        activeIndex === index && (
                            <div className='accordion-content'>
                                {section.content}
                                <hr />
                            </div>
                        )
                    }
                </div>
            )) }
        </div>
    );
}