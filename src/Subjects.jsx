import React from 'react';
import SubjectData from "./SubjectData";

import Card from './Card';

const Subjects = () => {
    return (
        <> 
        <div className = "my-5" >
             <h1 className="text-center">SUBJECTS</h1>
        </div>

        <div className="container-fluid mb-5 ">
            <div className="row">
                <div className="col-10 mx-auto">

                    <div className="row gy-4">

                    {
                        SubjectData.map((val , index) =>{
                            return <Card
                                        imgsrc = {val.imgsrc} 
                                        title = {val.title}
                                        key={index}
                                        code={val.code}
                                        link={val.link}
                            ></Card>
                        })
                    }
                        {/* <Card></Card> */}

                    </div>

                </div>

            </div>
        </div>

</>
    )
}

export default Subjects;
