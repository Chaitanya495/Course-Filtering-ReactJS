import React from 'react';
import './Card.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses; 

    const clickHandler = () => {
        //logic
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id) ));
            toast.warning("Like Removed!");
        }
        else{
            //pehle se like nhi hai ye course
            //insert karna hai ye course liked courses me
            if(likedCourses.length === 0) {
                setLikedCourses( [course.id] );
            }
            else{
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Succecfully!");
        }
    };

    return(
        <div className='card'>
            <div className='image-icon-box'>
                <img src={course.image.url} className='image'></img>

                <div className='icon'>
                    <button className='icon-btn' onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)? 
                            <FcLike size={24} color='red'/> : 
                            <FcLikePlaceholder size={24} color='gray'/>
                        }
                    </button>
                </div>
            </div>
            <div className='info'>
                <p className='course-title'>{course.title}</p>
                <p className='course-description'>
                    {
                        course.description.length > 100? 
                        course.description.substr(0, 100) + '...' : 
                        course.description
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;