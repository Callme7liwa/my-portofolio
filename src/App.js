import { useState } from "react";
import "./App.css";
import Images from "./Images";

function App() {

  const [mode , setMode] = useState(1);

  const listFormations = [
    {
      universityImage : Images.ensias_logo,
      universityName  : "National School of Computer Science and Systems Analysis of rabat ",
      title           : "Engineering degree, IDSIT: DATA SCIENCE & IOT",
      period          : "sept. 2021 - juil. 2024",
      comptences      : ["php","java",".net","android","jee","js","uml","merise","sql server","oracle database","administration windows" , "administration unix","methodes agile","analays de donnees","datawarehouse"]
    },
    {
      universityImage : Images.logo_fst,
      universityName : "Faculty of Sciences and Techniques of Fes",
      title : "bachelor's degree, computer engineering",
      period          : "sept. 2021 - juil. 2024",
      comptences : ["php","java","C++","Swing","Uml","merise","tcp/ip","unix"],
    },
    {
      universityImage : Images.logo_fst,
      universityName : "Faculty of Sciences and Techniques of Fes",
      title : "Diploma of scientific and technical university studies (DEUST), Mathematics Computer physics",
      period          : "sept. 2021 - juil. 2024",

    }
  ]
  const listExepriences = [
    {
      image : Images.elr12_logo,
      name  : "Elr12",
      title : "Full Stack Enginner",
      mission : " Design and Implementation of a Project Management Application.",
      description : "J'ai développé une application web de gestion de projets sur mesure pour une entreprise, offrant une solution clé en main pour la planification, la collaboration et la supervision de projets. Grâce à une interface utilisateur intuitive et conviviale, les membres de l'équipe peuvent facilement suivre les tâches, les échéances et les budgets, tout en restant informés des mises à jour en temps réel. Cette application a permis d'optimiser la productivité et d'améliorer la communication entre les membres de l'équipe, ce qui a conduit à une réalisation plus efficace et efficiente des projets.",
      period : "Jul. 2022 - août 2022 · 2 month",
      technologies : ["java","spring boot","mongodb","react js","redux","git","github","uml"]
    },
    {
      image : Images.logo_fst,
      name  : "Faculty of Sciences and Techniques of Fes",
      title : "Full Stack Enginner",
      mission : "Development and design of a web platform for Moroccan heritage management",
      description : "This end-of-studies project, carried out within the LSIA (laboratory Intelligent Systems and applications), had as its objective , the implementation of a management system for the  Moroccan cultural heritage. This system aims to automate the registration, querying and accessing information mainly concerning the categories of the following heritage: historic buildings, archaeological sites and cultural objects. " ,
      period : "mai 2021 - Jun 2021 · 2 month",
      technologies : ["php","laravel","js","jquery","mysql","uml"]
    },
  ];
  const listProjects = [
    {
      image : Images.web_dev_6,
      name : "Streaming Pro",
      description : "As part of my ongoing professional development, I am working on a new iteration of a full-stack web development project that I previously completed. The project involves creating an audio streaming platform with advanced marketing capabilities, using a different set of technologies than the previous version. I am developing the platform using a variety of languages and frameworks, including React.js, Spring boot and MongoDB, and incorporating new features such as user analytics, custom branding options, and targeted advertising. This project is being undertaken in conjunction with my other coursework and professional commitments, and is a testament to my ongoing dedication to staying up-to-date with the latest trends and technologies in web development .",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.mobil_dev_1,
      name : "Baby Monitoring",
      description : "currently working on a baby monitoring project that utilizes Android Studio, Machine Learning (ML), and Internet of Things (IoT) technologies. The aim of this project is to develop a baby monitoring system that can detect baby behaviors using motion and temperature sensors, and send real-time alerts to a mobile application. This project provides an excellent opportunity for us to deepen our skills in Android app development, ML, and IoT, while contributing to improving the safety and well-being of babies",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.web_dev_1,
      name : "Project Vision",
      description : "J'ai conçu et développé une application web de gestion de projets pour une entreprise, offrant une solution centralisée pour la planification, la collaboration et le suivi des projets. Mon application a permis à l'entreprise de gérer efficacement les projets, d'améliorer la communication et la collaboration entre les membres de l'équipe et de suivre les progrès en temps réel. J'ai travaillé en étroite collaboration avec les membres de l'équipe pour comprendre leurs besoins, ce qui m'a permis de concevoir une interface utilisateur conviviale et intuitive qui répondait à leurs exigences spécifiques",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.web_dev_2,
      name : "Patrimoine Maghreb",
      description : "J'ai eu l'honneur de travailler sur un projet de gestion de patrimoine culturel marocain, qui visait à préserver et à promouvoir les trésors culturels du Maroc. En tant que développeur web, j'ai travaillé en étroite collaboration avec des experts en patrimoine culturel pour créer une plateforme interactive et éducative pour les visiteurs du monde entier. Cette plateforme a permis aux utilisateurs d'explorer les sites historiques, les musées et les événements culturels à travers des photos, des vidéos et des descriptions détaillées. Elle a également offert des informations pratiques pour aider les visiteurs à planifier leurs voyages. Grâce à ce projet, j'ai pu contribuer à la préservation de l'héritage culturel du Maroc et promouvoir son tourisme culturel à travers le monde.",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.web_dev_3,
      name : "Stream Merch",
      description : "J'ai travaillé sur un projet ambitieux qui consistait à créer une plateforme de streaming pour les artistes, qui intègre également une boutique en ligne pour vendre des produits associés aux artistes. Mon projet a permis aux artistes de diffuser leur musique en direct, d'atteindre un public plus large et de vendre leurs produits directement à leurs fans. J'ai travaillé avec une équipe multidisciplinaire pour concevoir une interface utilisateur conviviale qui offre une expérience utilisateur optimale, tout en permettant aux artistes de gérer facilement leur contenu et leurs ventes. Mon projet a été un grand succès, permettant aux artistes de générer des revenus supplémentaires grâce à la vente de produits associés à leur musique, tout en offrant aux fans une expérience de streaming musicale unique.",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.web_dev_4,
      name : "School Mate",
      description : "J'ai conçu et développé une application web de gestion de scolarité pour une école, qui offre une solution centralisée pour la gestion des données des étudiants, des enseignants, des notes et des absences. Mon application a permis à l'école de gérer efficacement les processus de scolarité, d'améliorer la communication entre les étudiants et les enseignants, et de suivre les progrès des étudiants en temps réel. J'ai travaillé en étroite collaboration avec les encadrants pour comprendre leurs besoins, ce qui m'a permis de concevoir une interface utilisateur conviviale et intuitive qui répondait à leurs exigences spécifiques.",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
    {
      image : Images.web_dev_5,
      name : "SchoolMate",
      description : "J'ai conçu et développé une application web de gestion de scolarité pour une école, qui offre une solution centralisée pour la gestion des données des étudiants, des enseignants, des notes et des absences. Mon application a permis à l'école de gérer efficacement les processus de scolarité, d'améliorer la communication entre les étudiants et les enseignants, et de suivre les progrès des étudiants en temps réel. J'ai travaillé en étroite collaboration avec les encadrants pour comprendre leurs besoins, ce qui m'a permis de concevoir une interface utilisateur conviviale et intuitive qui répondait à leurs exigences spécifiques.",
      duration : "Jul. 2022 - août 2022 · 2 month",
      images : []
    },
  ]
  const myInformations = [
    {
      name : "Birthday",
      image : Images.birthday_icon,
      value : "01-11-2000",
    },
    {
      name : "Natonality",
      image : Images.nationality_icon,
      value : "Moroccan",
    },
    {
      name : "City",
      image : Images.city_icon,
      value  : "fes" , 
    },
    {
      name : "Location",
      image : Images.location_icon,
      value : "30 rue hay salam Rte bourkaiz",
    },
    {
      name : "Civil State",
      image : Images.formation_icon,
      value : "Single"
    }
  ]
  const navBarNavigations = [
    {
      name : "projects",
      href : ""
    },
    {
      name : "services",
      href : ""
    },
    {
      name : "Contact",
      href : ""
    },
  ]
  const listInfoAboutMe = [
    "Je suis passionné par l'apprentissage continu et la croissance personnelle. Je suis constamment à la recherche de nouvelles compétences et de nouvelles connaissances que je peux acquérir pour améliorer mes capacités. J'aime trouver de nouveaux défis pour moi-même et travailler dur pour les surmonter. Je crois que la clé de la réussite est la persévérance et la détermination. C'est pourquoi j'essaie de maximiser chaque moment de mon temps en restant productif et en apprenant quelque chose de nouveau chaque jour. Pour moi, il est important de rester engagé dans un apprentissage continu et de rester au courant des dernières tendances et technologies pour améliorer mes compétences et offrir à mes projets la meilleure qualité possible.    ",
    "Je suis passionné par la création d'interfaces utilisateur qui sont non seulement esthétiquement agréables, mais qui améliorent également l'expérience utilisateur. Mon approche de conception est de créer des interfaces 'from scratch' pour chaque projet. Je crois que chaque projet est unique et mérite une attention particulière dans sa conception. Plutôt que d'utiliser des modèles pré-fabriqués, j'aime prendre le temps de comprendre les besoins et les préférences des utilisateurs pour créer une interface utilisateur unique et personnalisée qui répond à leurs besoins spécifiques. En travaillant de cette façon, je suis convaincu que je peux créer des interfaces utilisateur qui sont innovantes, élégantes et fonctionnelles.",
    "En plus de mes compétences en conception et en développement web, je suis également passionné par le marketing numérique et la gestion de réseaux sociaux. J'ai une page Instagram avec plus de 60k abonnés que j'ai construite à partir de zéro. Grâce à cette expérience, j'ai acquis une solide compréhension des stratégies de marketing sur les réseaux sociaux et de la manière de créer et de promouvoir du contenu engageant. Je suis fier de ma capacité à créer des campagnes publicitaires réussies et à utiliser les données d'analyse pour améliorer les performances de mes comptes de médias sociaux."
  ]

  const Header = () => {

    const RenderItemNavBar = ({item}) => {
      return (
        <li className={`${mode==1 ? 'text-light' : ''}`}>
          <span className={`${mode==1 ? 'text-blue' : ''}operator`}>&lt; </span>
          <span className=""> {item.name} </span>
          <span className="operator text-blue"> / &gt; </span>
        </li>
      )
    }

    return (
      <div className="page_header-container">
        <div className="header_left-container">
          <span className={`${mode==1 ? 'text-blue' : ''}`}>&lt; / </span>
          <span className={`${mode==1 ? 'text-light' : ''}`}> Ayoub Seddiki </span>
          <span className={`${mode==1 ? 'text-blue' : ''}`}> &gt; </span>
        </div>
        <div className="header_center-container">
          {
            navBarNavigations.map((item,index)=>
                <RenderItemNavBar  item={item} key={index} />
              )
          }
        </div>
        <div className="header_right-container">
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-github `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-twitter `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-linkedin `}></i>
        </div>
        <div className="header-switch-mode"> 
          <div className="switch-content">
            <span className={`${mode===1 ? "light-active" : ""}`} onClick={()=>setMode(1)}>L</span>
            <span className={`${mode===0 ? "dark-active" : ""}`} onClick={()=>setMode(0)}>D</span>
          </div>
        </div>
      </div>
    );

  };

  //
  const BodyFirst = () => {

    const BodyLeft = () => {
      return(
        <div className="body_left-container">
          <div className="left_content-first">
            <div>
              <span className={`${mode===1 ? "light-blue" : ""} function`}> /* Software Enginner */ </span>
            </div>
            <div>
              <span className={`${mode==1 ? 'text-light' : ''}`}> Talk is cheap .</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}>
                Show me the code &nbsp;
                <span className={`${mode==1 ? 'text-blue' : ''} operator`}>&lt; /&gt; .</span>
              </span>
              <span className={`${mode==1 ? 'light-bare' : ''} `}>
                I am passionate about software development and design, and enjoy
                creating simple and elegant solutions that meet the needs of
                users. I am constantly striving to improve my skills and
                expertise in development and design to deliver high-quality
                software products.
              </span>
            </div>
            <div className="contact-me-container">
               <span className={`${mode==1 ? 'light' : ''} contact-me-content`}>
                  <span ><i className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope`}/></span>
                  <span className={`${mode==1 ? 'text-light' : ''} email`}> 
                    <i className="fa fa-long-arrow-right"></i>
                    ayoubseddiki132@gmail.com
                    <i className="fa fa-long-arrow-left"></i>
                  </span>
                  <span className={`${mode==1 ? 'light-blue' : ''}`}>contact me  <i className="fa fa-angle-right"></i></span>
               </span>
            </div>
          </div>
        </div>
      )
    }

    const BodyRight = () => {
      return (
        <div className="body_right-container">
          <div className="image-container">
              <img src={Images.image_principal} />
          </div>
          <div className="list-technos">
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.post_man} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.git_hub} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
          </div>
        </div>
      )
    }

    return (
      <div className="page_body-container">
        <BodyLeft />
        <BodyRight />
        <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    );
  };

  //
  const BodySecond = () => {

    const RenderItemInfo = ({item}) => {
      return (
        <>
            <div className={`${mode==1 ? 'line-light' : ''} line`}></div>
            <div className="info-item">
              <span className={`${mode==1 ? 'text-light' : ''}`}> <img src={item.image}/> {item.name}</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}> {item.value}</span>
            </div>
        </>
      )
    }

    const ListInfo = () => {
      return (
        <div className="list-info">
          {
            myInformations.map((item,index)=>(
              <RenderItemInfo item={item} key={index} />
            ))
          }
        </div>
      )
    }

    const RenderMyInfo = () => {
      return (
        <div className="bodysecond-left">
            <div className={`${mode==1 ? 'light-border-blue' : ''} image-container `}>
              <img src={Images.profile_image} />
            </div>
            <ListInfo />
            <div className="line-body"></div>
            <div className={`${mode==1 ? 'line-body' : 'line-body-light'}`}></div>
        </div>
      )
    }

    const RenderFormation = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.universityImage} />
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.universityName}
                    </span>
                    <span className={`${mode==1 ? 'period-light' : ''} `}>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.title}
                  </span>
                  <div className="list-specialities">
                      {
                        item?.comptences?.map((competence,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{competence}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderFormations = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.formation_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Formations </span>
                </div>
                <div className="list-formations">
                  {
                    listFormations.map(item=>
                      <RenderFormation item={item} />
                    )
                  }
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderMyInfo />
            <RenderFormations />
      </div>
    )
  }

  //
  const BodyThird = () => {
    
    const RenderExperience = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title ">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.image}  className=""/>
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.name} | {item.title}
                    </span>
                    <span>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
             
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.mission}
                  </span>
                  <div className="experience-description text-light">
                     {item.description}
                  </div>
                  <div className="list-specialities">
                      {
                        item?.technologies?.map((technoogy,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{technoogy}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderExperiences = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title item-title">
                    <img src={Images.experience_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Experiences  </span>
                </div>
                <div className="list-formations">
                  {
                    listExepriences.map((item,index)=>(
                      <RenderExperience item={item} key={index}/>
                    ))
                  }
                </div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderExperiences />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    )
  }

  //
  const BodyFourth = () => {

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
                <span className={`${mode==1 ? 'light-blue' : ''} `}><i className="fa fa-angle-right"></i> More </span>
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
      <div className="bodysecond-container">
      {/*  */}
      <RenderProjects />
      </div>
    )
  }

  //
  const BodyFive = () => {
    
    const RenderProjects = () => {
      
      const RenderItem = ({item}) => {
        return (
            <div className={`${mode==1 ? 'item-info-light' : ''} item-info`}>
              <span className={`${mode==1 ? 'text-light' : ''} `}>
                {item}
              </span>
            </div>
        )
      }
      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.project_icon} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> More About me    </span>
                </div>
                <div className="list-info-about-me">
                  {
                    listInfoAboutMe.map(item=>(
                      <RenderItem item={item} />
                    ))
                  }
                </div>
                <div className="line-body"></div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
        {/*  */}
        <RenderProjects />
      </div>
    )
  }

  return (
    <div className={`${mode===1 ? 'light-background' : ''} page-container`}>
      <Header />
      <div className="list-body">
        <BodyFirst />
        <BodySecond />
        <BodyThird />
        <BodyFourth />
        <BodyFive />
      </div>
    </div>
  );

}

export default App;
