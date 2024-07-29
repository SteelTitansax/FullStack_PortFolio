import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {cSharpSkills, fullstackExperiences, cSharpProjects, reactNativeProjects, Otherprojects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const CSharp = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="c_sharp.jpeg" className="mt-1" height="95px" alt="c_sharp logo"/>
                </div>
                <div className="col-md-10">
                    <h1 >C Sharp   </h1>
                    <h3>Fullstack Code Language </h3> 
                    <h6 style={{paddingTop:'8px'}}>C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It is part of the .NET framework and is designed for building a wide range of applications, from web and mobile apps to desktop software and games. C# is known for its simplicity, versatility, and strong type safety, making it a popular choice among developers. It supports features like garbage collection, exception handling, and asynchronous programming, which help streamline the development process.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skillsFullStack">
                          <h3 className="text-dark">Skills</h3>
                            {
                                cSharpSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-primary">{skill}</h6>
                                        <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             role="progressbar"
                                             style={{width:`${percentage}%`}}></div>
                                        </div>
                                    </div>
                                ))
                            }


                          
                    </div>
                </div>
        </div>

        <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body card-body-experienceFullstack">
                          <h3 className="text-dark">Experience</h3>
                           
                          <ul>
                          {
                              fullstackExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4 className="text-primary">{title}</h4>
                                    <h6 className="text-secondary">{from}-{to}</h6>
                                    <p className="text-primary">{description}</p>
                                 </li>   
                                    <a className="btn btn-primary border know-more" href={url}>
                                        Know more 
                                    </a> 
                                
                               </div>
                               


                              ))
                           
                          }
                              
                          </ul>
                    </div>
                </div>
        </div>
     </div>
    
    
    

    {/** Portfolio */}
    <div className="row mt-5">

          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-light"> Portfolio</h1>
                        </div>
                            


                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-light"> Full Stack</h3>
                            <hr className="bg-white "/>
                        </div>        
                        

                        {
                              cSharpProjects.map(({name,description,image,github,url},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Demo</a>
                                            <a className="btn btn-secondary border button-card" href ={github}>Code</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default CSharp; 


        
