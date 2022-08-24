import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {appsheetSkills, appsheetExperiences, reactProjects, reactNativeProjects, powerappsProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Appsheet = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="appsheet1.png" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Appsheet  </h1>
                    <h3>Front end Framework</h3> 
                    <h6 style={{paddingTop:'8px'}}>AppSheet provides a no-code development platform for application software, which allows users to create mobile, tablet, and web applications using data sources like Google Drive, DropBox, Office 365, and other cloud-based spreadsheet and database platforms. The platform can be utilized for a broad set of business use cases including project management, customer relationship management, field inspections, and personalized reporting.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skillsElectron">
                          <h3>Skills</h3>
                            {
                                appsheetSkills.map(({skill,percentage},i) => (
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
                    <div className="card-body card-body-experienceElectron">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              appsheetExperiences.map (({title,description,from,to,url},i) => ( 
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
                            <h3 className="text-center text-light"> Appsheet</h3>
                            <hr className="bg-white "/>
                        </div>        
                        <div className="col-md-3 p-2" />

                        {
                              nocodeProjects.map(({name,description,image,url,github},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card"  href ={url}>Demo</a>
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
export default Appsheet; 


        
