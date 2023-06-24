import React, { Fragment } from "react";
import './Home.css';
import HomeItem from "./HomeItems";

const data = [
    {date:'July 16' , name: 'DETROIT, MI' , activity:'DTE ENERGY MUSIC THEATRE'},
    {date:'July 18' , name: 'TORONTO,ON' , activity:'BUDWEISER STAGE'},
    {date:'July 28' , name: 'BRISTOW, VA' , activity:'JIGGY LUBE LIVE'},
    {date:'July 30' , name: 'PHOENIX, AZ' , activity:'AK-CHIN PAVILION'},
    {date:'Aug 6' , name: 'LAS VEGAS, NV' , activity:'T-MOBILE ARENA'},
    {date:'Aug 10' , name: 'CONCORD, CA' , activity:'CONCORD PAVILION'}
]



const Home = () => {

    return(
        <Fragment>
            <div >
            <div className="d-flex flex-column head align-items-center">

                <div className="head1 d-flex flex-column align-items-center"> 
                    <h2>Get our Latest Album</h2>
                    <i class="fa-regular fa-circle-play"></i>
                </div>

                <br />
                <br />

                <div>
                    <h1>TOURS</h1>
                </div>

                <br />

                <div>
                    {data.map((data)=>(<HomeItem date={data.date} name={data.name} activity={data.activity}/>))}
                </div>

                
           
            </div>

            </div>
        </Fragment>
    )

}
export default Home