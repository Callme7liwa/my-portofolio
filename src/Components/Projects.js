import { useState } from "react"
import Images from "../Images"

const Projects = ({mode}) => {

    const [showMoreInfo , setShowMoreInfo] = useState(false);
    const [showImage , setShowImage] = useState(false);
    const [currentImage , setCurrentImage] = useState(null);
    const [currentProject , setCurrentProject] = useState(null);


    const listProjects = [
        {
          image : Images.web_dev_6,
          name : "Streaming Pro",
          description : "As part of my ongoing professional development, I am working on a new iteration of a full-stack web development project that I previously completed. The project involves creating an audio streaming platform with advanced marketing capabilities, using a different set of technologies than the previous version. I am developing the platform using a variety of languages and frameworks, including React.js, Spring boot and MongoDB, and incorporating new features such as user analytics, custom branding options, and targeted advertising. This project is being undertaken in conjunction with my other coursework and professional commitments, and is a testament to my ongoing dedication to staying up-to-date with the latest trends and technologies in web development .",
          duration : "Currently Working",
          technologies : ["java","spring boot","react js" , "redux" , "mongodb","dockers" , "git" , "github"],
          images : [Images.rap_1 , Images.rap_2,Images.rap_3,Images.rap_4,Images.rap_5,Images.rap_6,Images.rap_7,Images.rap_8,Images.rap_9,Images.rap_10]
        },
        {
          image : Images.mobil_dev_1,
          name : "Baby Monitoring",
          description : "currently working on a baby monitoring project that utilizes Android Studio, Machine Learning (ML), and Internet of Things (IoT) technologies. The aim of this project is to develop a baby monitoring system that can detect baby behaviors using motion and temperature sensors, and send real-time alerts to a mobile application. This project provides an excellent opportunity for us to deepen our skills in Android app development, ML, and IoT, while contributing to improving the safety and well-being of babies",
          duration : "Currently Working",
          technologies : ["java","android","arduino" , "redux" , "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_4,
          name : "School Mate",
          description : "I designed and developed a web-based school management application that provides a centralized solution for managing student data, teacher information, grades, and absences. My application allowed the school to effectively manage their academic processes, improve communication between students and teachers, and track student progress in real-time. I worked closely with the school administrators to understand their needs, which enabled me to design a user-friendly and intuitive interface that met their specific requirements.",
          duration : "oct. 2022 - janv. 2023",
          technologies : ["java","Jee","js" , "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_1,
          name : "Project Vision",
          description : "I designed and developed a web-based project management application for a company, offering a centralized solution for project planning, collaboration, and tracking. My application enabled the company to efficiently manage projects, improve communication and collaboration among team members, and track progress in real-time. I worked closely with team members to understand their needs, which allowed me to design a user-friendly and intuitive interface that met their specific requirements.",
          duration : "Jul. 2022 - août 2022 · 2 month",
          technologies : ["java","spring boot","react js" , "redux" ,"git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_3,
          name : "Stream Merch",
          description : "I worked on an ambitious project to create a streaming platform for artists that also includes an online store for selling artist-related products. My project enabled artists to live stream their music, reach a wider audience, and sell their products directly to their fans. I collaborated with a multidisciplinary team to design a user-friendly interface that provides an optimal user experience while allowing artists to easily manage their content and sales. My project was a great success, allowing artists to generate additional revenue through the sale of products related to their music while offering fans a unique music streaming experience.",
          duration : "mars 2022 - juin 2022",
          technologies : ["php","laravel","react js" , "redux" , "mysql", "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_2,
          name : "Patrimoine Maghreb",
          description : "i had the honor of working on a project that focused on the management of moroccan cultural heritage, aiming to preserve and promote the country's cultural treasures. as a web developer, i worked closely with experts in cultural heritage to create an interactive and educational platform for visitors from around the world. this platform allowed users to explore historical sites, museums, and cultural events through photos, videos, and detailed descriptions. it also provided practical information to help visitors plan their trips. through this project, i was able to contribute to the preservation of morocco's cultural heritage and promote its cultural tourism across the globe.",
          technologies : ["php","laravel","react js" , "redux" , "mysql", "git" , "github"],
          duration : "mai. 2021 - jun 2021 · 2 month",
          images : []
        },
        {
          image : Images.web_dev_8 , 
          name  : "IT Equipment Keeper",
          description : "The IT Department Equipment Management project involves the development of a desktop application to manage the inventory and operations of a warehouse that stores various IT equipment such as computers, printers, servers, and other hardware devices. The application aims to provide an efficient solution for managing the equipment inventory, tracking equipment usage, maintenance schedules, and ordering new equipment as necessary. The application is designed to be user-friendly, with features such as equipment categorization, search, and reporting capabilities to allow IT department staff to easily manage the warehouse operations. The goal of the project is to optimize the IT department's equipment management processes, reduce equipment downtime, and ensure the smooth functioning of the organization's IT infrastructure.",
          technologies : ["php","laravel","Html" , "css pure" , "jquery", "js", "git" , "github"],
          duration : "february. 2021 - mars. 2021 . 2 month",
        },
        {
          image : Images.web_dev_9 , 
          name  : "GeoHeritage",
          description : "This project involves developing a web application that will showcase the history, geography, and monuments of a region, country, or even the entire world. The application will provide detailed information on each historical monument or tourist site, interactive maps to help users locate the sites, and images to illustrate the monuments and their history. It will also allow users to plan guided tours, share comments and photos, and discover additional information about the featured sites. The goal is to provide an educational and engaging platform for history enthusiasts and tourists.",
          technologies : ["php","Html" , "css pure" , "jquery", "js", "git" , "github"],
          duration : "oct. 2020 - janv. 2021",
        }
    ]

    const ShowImage = () => {
        return(
            <div className="pop-up-image-container">
                <div className="pop-up-image-content">
                    <i className="fa fa-times" onClick={()=>setShowImage(!showImage)}></i>
                    <img src={currentImage} />
                </div>
            </div>
        )
    }
      
    const ShowMoreInfo = () => {
        return (
            <>
               {showImage == true ?  <ShowImage /> : <> </>}
                <div className="pop-up-moreinfo-container">
                    <div className="pop-up-moreinfo-content">
                        <i className="fa fa-times" onClick={()=>setShowMoreInfo(!showMoreInfo)}></i>
                        <div className="list-technologies">
                            <div className="title"><img  src={Images.flash_back_icon}/> <span>List of technologies</span> </div>
                            {
                                currentProject?.technologies?.map(technologie=>(
                                    <span > {technologie} </span>
                                ))
                            }
                        </div>
                        <div className="list-technologies list-images-container">
                            <div className="title" ><img  src={Images.images_icon}/> <span>Images</span> </div>
                            <div className="list-images-content">
                                {
                                    currentProject?.images?.map(image=>(
                                        <img src={image}  onClick={()=>{setShowImage(!showImage);setCurrentImage(image)}}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    const RenderProject = ({item}) => {
        return (
          <div className={`${mode==1 ? 'project-item-light' : ''} project-item`}>
              <div className="image-container">
                <img src={item.image} />
              </div>
              <div className="project-information">
                <div className={`${mode==1 ? 'text-light' : ''} project-name `}><img src={Images.project_name_icon} /><span>{item.name}</span></div>
                <div className="project-description">
                  <img src={Images.flash_back_icon} />
                  <span className={`${mode==1 ? 'text-light' : ''} `}>
                    {item.description}
                  </span>
                  <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
                </div>
                <div className="project-duration">
                  <img src={Images.period_icon} />
                  <div>
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.duration}
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="project-action">
                <span className={`${mode==1 ? 'light-blue' : ''} `} onClick={()=>{setCurrentProject(item);setShowMoreInfo(true)}}><i className="fa fa-angle-right"></i> More </span>
              </div>
          </div>
        )
    }

    const RenderProjects = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.project_icon} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Projects  </span>
                </div>
                <div className="list-projects">
                    {listProjects.map((item,index)=>(
                      <RenderProject item={item} key={index} />
                    ))}
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }


    return (
        <>
        {showMoreInfo === true ? <ShowMoreInfo /> : <></>}
        <div className="bodysecond-container">
            {/*  */}
            <RenderProjects />
        </div>
        </>
    )
  }

  export default Projects;