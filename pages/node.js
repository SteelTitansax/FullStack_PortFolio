import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {nodeSkills, nodeExperiences, reactProjects, reactNativeProjects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Node = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="nodejs.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Node JS  </h1>
                    <h3>Front end Framework</h3> 
                    <h6 style={{paddingTop:'8px'}}>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment 
                    that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line 
                    tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page 
                    is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying 
                    web-application development around a single programming language, rather than different 
                    languages for server-side and client-side scripts.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skillsReact">
                          <h3>Skills</h3>
                            {
                                nodeSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6>{skill}</h6>
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
                    <div className="card-body card-body-experienceReact">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              nodeExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4>{title}</h4>
                                    <h6>{from}-{to}</h6>
                                    <p>{description}</p>
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
                            <h3 className="text-center text-light"> NodeJS</h3>
                            <hr className="bg-white "/>
                        </div>        
                        <div className="col-md-3 p-2" />
                        {
                              nodeProjects.map(({name,description,image,github,url},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Demo</a>
                                            <a className="btn btn-secondary border button-card" href ={github}>Code</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }

                        <div className="col-md-3 p-2" />

                        

                        
                        

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default Node; 


        
