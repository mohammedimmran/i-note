import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Card.css";


const Card = (props) => {
    return (
        <> 
        
                    <div className="col-md-3 col-sm   mx-auto">
                        <div className="card w-2"  >
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                            <div className="card-body my-4" >
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                                <p className="card-text">{props.code}</p>
                                <a href={props.link} target="_blank" className="btn btn-primary">Click Here</a>
                            </div>
                        </div>
                    </div>

                    
                
</>
    )
}

export default Card;
