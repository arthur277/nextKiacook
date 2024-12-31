import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <div>
        <div className={styles.debut}><h1>KIACOOK, c'est...</h1></div>
        <div className='row'>
            <div className={styles.texte}>
            <div className='col-md-4'>
                <h1>+ de 2000 CHEFS PRO, nos cookers</h1>
            </div>
            </div>
            <div className={styles.texte}>
            <div className='col-md-4'>
                <h1>+ de 1000 téléchargements, nos fans de cuisines afro</h1>
            </div>
            </div>
            <div className={styles.texte}>
            <div className='col-md-4'>
                <h1>+ de 22000 commandes par an!</h1>
            </div>
            </div>
        </div>
        <div className={styles.parent}>
            <h1 className={styles.texte3}>Comment ca marche</h1>
            <div className={styles.row}>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident maiores illo iste vel, dolores deserunt eveniet consectetur. Porro sed sapiente debitis mollitia repellendus tempore non autem ullam voluptas qui?</p>
                </div>
                </div>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium minus omnis perspiciatis soluta culpa minima maxime. Veritatis, repudiandae eius! Optio ipsum aliquid aut distinctio praesentium eaque pariatur hic excepturi nihil!</p>
                </div>
                </div>
                <div className={styles.texte2}>
                <div className='col-md-4'>
                    <h1>Etape 3</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eius, quod officia doloremque eos rem suscipit expedita deserunt modi odio consequatur aspernatur similique! Delectus fuga, iusto repudiandae voluptates perspiciatis excepturi?</p>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.fin}><h4>Copyright kiacook</h4></div>
    </div>
    
  )
}

export default Footer