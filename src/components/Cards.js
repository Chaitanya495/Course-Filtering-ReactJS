import React, { useState } from "react";
import './Cards.css';
import Card from './Card.js';

const Cards = (props) => {

    let category = props.category;

    //putting all courses data in a single array
    //returns a list of courses received from the api response
    let courses = props.courses;

    //for like button
    const [likedCourses, setLikedCourses] = useState([]);


    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( courseCategory => {
                courseCategory.forEach( courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //main sirf specific category ka data pass karunga
            return courses[category];
        }
    }


    return(
        <div className="cards">
            {!courses ? 
                (
                    <div>
                        <p>No Data Found</p>
                    </div>
                ) : 
                (
                    getCourses().map((course) => {
                        return(
                            <Card key={course.id} 
                            course={course} 
                            likedCourses={likedCourses}
                            setLikedCourses={setLikedCourses}/>
                        )
                    })
                ) 
            }
        </div>
    );
};

export default Cards;