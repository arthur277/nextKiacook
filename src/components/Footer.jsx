import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <div>
        <div className={styles.debut}><h1 className={styles.mestitre}>KIACOOK, c'est...</h1></div>
        <ul className={styles.row2}>
                <li >
                    <div className='col-md-4'>
                        <h1 className={styles.mestexte}>+ de 2000 CHEFS PRO, nos cookers</h1>
                    </div>
                </li>
                <li>
                    <div className='col-md-4'>
                        <h1 className={styles.mestexte}>+ de 1000 téléchargements, nos fans de cuisines afro</h1>
                    </div>
                </li>
                <li >
                    <div className='col-md-4'>
                        <h1 className={styles.mestexte}>+ de 22000 commandes par an!</h1>
                    </div>
                </li>
        </ul>
        <div className={styles.parent}>
            <h1 className={styles.texte3}>Comment ca marche</h1>
            <div className={styles.row}>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 1</h1>
                    <p>-Vous vous assurez d'être légalement déclaré en tant que cuisinier pro <br /><br /> -Si vous n'êtes pas déclarés, nous vous accompagnons dans les démarches</p>
                </div>
                </div>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 2</h1>
                    <p>-Vous créez votre compte sur le site <br /><br /> -Vous indiquez les plats que vous cuisinez ainsi que les tarifs que vous appliquez <br /><br /> -Vous indiquez le modèles de livraison choisi <br /><br /> -Et hup vous êtes visibles par la communauté </p>
                </div>
                </div>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 3</h1>
                    <p>-Vous recevez vos premières commandes <br /><br />-La plateforme prélève sa commision à chaque plat commandé <br /><br /> -Vous avez la possibilité de booster votre visibilité auprès de notre communauté</p>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.fin}><h4>Copyright kiacook</h4></div>
    </div>
    
  )
}

export default Footer