import React, { useState } from "react";
import people from "../data";
//  the below import is react icon from react-icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
    const [index, setIndex] = useState(0)
    // in our array we have 5 objects , we use distracturing for us to target each object as the index changes so does the people
    const {name,job,image,text} = people[index]

    // our array object only contains 5 items and by creating 2 button that either go pre or next we get an error after the last item or pre 1st ,so to tackle this we create a function
    const checkNumber = (number) =>{
        // if the number is bigger than the  index last people array then return  the 1st
        if(number> people.length -1){
            return 0
        }
        // if number is less than 0 then return the last item
        if (number < 0) {
          return people.length - 1;
        } else{
            return number
        }
    }

    // making the pre & next button functional
    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1
            return checkNumber (newIndex)
        })
    }

     const prevPerson = () => {
       setIndex((index) => {
         let newIndex = index -1;
         return checkNumber(newIndex);
       });
     };

    //  randomperson button function
    const randomPerson = () =>{
        let randomNumber =Math.floor(Math.random() * people.length)
        // to avoide repetetion give a condition
        if(randomNumber === index){
            randomNumber = index + 1
        }
        //  setIndex koz we  dont want the number to be bigger than thr index
        setIndex(checkNumber(randomNumber))
        // console.log(randomNumber)
    }

    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson} >suprise me</button>
      </article>
    );
}

export default Review;
