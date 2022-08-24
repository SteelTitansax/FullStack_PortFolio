import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {skills, experiences, projects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


console.log(skills);
console.log(experiences);

const Index = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="perfil.jpeg"  className="img-fluid" alt="Imagen perfil"/>
                    <a className="btn btn-light border" id="hire-button" href="/hireme" >Hire Me</a>
                </div>
                <div className="col-md-10">
                    <h1 >Manuel Portero </h1>
                    <h3 >Full Stack Developer</h3> 
                    <h6 style={{paddingTop:'8px'}}> I am a well educated self starter looking for work as a Front End Developer. I am an analytical,
                    good problem solver, effective in meeting deadlines as well as managing and motivating
                    others. I speak six languages and have experience of working in different countries and
                    working environments. I can communicate well and share ideas with others who do not have a
                    scientific or engineering background.</h6>
                   
                </div>
            </div>
        </div>
    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skills">
                          <h3>Skills</h3>
                            {
                                skills.map(({skill,percentage},i) => (
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
                    <div className="card-body card-body-experience">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              experiences.map (({title,description,from,to,url},i) => ( 
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
    <div className="row">
          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-light"> Portfolio</h1>
                        </div>
                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-light"> Technologies</h3>
                            <hr className="bg-white "/>
                        </div>        


                        {
                              projects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <div className="button" id="button-5">
                                                <div id="translate"></div>
                                                <a className="text-white" href ={url}>Enter</a>
                                                </div>
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

    <div className="row">
   
        <div className="col-md-5"/>

        <div className="col-md-2"> 
                <a className="ml-4 mt-3 bottom-link btn btn-danger border button-bottom"   href="https://rpa-portfolio.vercel.app/" >RPA Portfolio</a>
        </div>
   
        <div className="col-md-5"/>

</div>
</Layout>

</>
export default Index; 


        
