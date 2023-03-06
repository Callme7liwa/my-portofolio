import Images from "../Images"

const AboutMe = ({mode}) => {

    const listInfoAboutMe = [
        "Je suis passionné par l'apprentissage continu et la croissance personnelle. Je suis constamment à la recherche de nouvelles compétences et de nouvelles connaissances que je peux acquérir pour améliorer mes capacités. J'aime trouver de nouveaux défis pour moi-même et travailler dur pour les surmonter. Je crois que la clé de la réussite est la persévérance et la détermination. C'est pourquoi j'essaie de maximiser chaque moment de mon temps en restant productif et en apprenant quelque chose de nouveau chaque jour. Pour moi, il est important de rester engagé dans un apprentissage continu et de rester au courant des dernières tendances et technologies pour améliorer mes compétences et offrir à mes projets la meilleure qualité possible.    ",
        "Je suis passionné par la création d'interfaces utilisateur qui sont non seulement esthétiquement agréables, mais qui améliorent également l'expérience utilisateur. Mon approche de conception est de créer des interfaces 'from scratch' pour chaque projet. Je crois que chaque projet est unique et mérite une attention particulière dans sa conception. Plutôt que d'utiliser des modèles pré-fabriqués, j'aime prendre le temps de comprendre les besoins et les préférences des utilisateurs pour créer une interface utilisateur unique et personnalisée qui répond à leurs besoins spécifiques. En travaillant de cette façon, je suis convaincu que je peux créer des interfaces utilisateur qui sont innovantes, élégantes et fonctionnelles.",
        "En plus de mes compétences en conception et en développement web, je suis également passionné par le marketing numérique et la gestion de réseaux sociaux. J'ai une page Instagram avec plus de 60k abonnés que j'ai construite à partir de zéro. Grâce à cette expérience, j'ai acquis une solide compréhension des stratégies de marketing sur les réseaux sociaux et de la manière de créer et de promouvoir du contenu engageant. Je suis fier de ma capacité à créer des campagnes publicitaires réussies et à utiliser les données d'analyse pour améliorer les performances de mes comptes de médias sociaux."
    ]
    
    
    const RenderInformations = () => {
      
      const RenderInfoItem = ({item}) => {
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
                      <RenderInfoItem item={item} />
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
        <RenderInformations />
      </div>
    )
  }

export default AboutMe;