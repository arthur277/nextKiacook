import React from 'react'
import styles from '../quisommenous/qui.module.css'
function page() {
  return (
    <div className={styles.qui}>
       <section>
            <h2>Introduction au rôle du cookeur</h2>
            <p>Le cookeur est un professionnel de la cuisine qui maîtrise l'art culinaire et contribue à créer des plats savoureux et mémorables.</p>
        </section>

        <section>
            <h2>Conseils pratiques pour les cookeurs</h2>
            <h3>Techniques de cuisine</h3>
            <p>Apprenez les techniques de base comme sauter, braiser et rôtir pour améliorer vos compétences culinaires.</p>

            <h3>Équipement essentiel</h3>
            <ul>
                <li>Couteaux de chef</li>
                <li>Planche à découper</li>
                <li>Poêles et casseroles de qualité</li>
                <li>Mixeur</li>
                <li>Four à convection</li>
            </ul>

            <h3>Préparation des ingrédients</h3>
            <p>Préparez vos ingrédients à l'avance pour une cuisson efficace et sans stress.</p>
        </section>

        <section>
            <h2>Recettes populaires</h2>
            <p>Découvrez une sélection de recettes faciles à réaliser :</p>
            <ul>
                <li><strong>Entrées :</strong> Salade César, Soupe de tomates</li>
                <li><strong>Plats principaux :</strong> Poulet rôti, Risotto aux champignons</li>
                <li><strong>Desserts :</strong> Tarte au citron, Mousse au chocolat</li>
            </ul>
        </section>

        <section>
            <h2>Nutrition et alimentation</h2>
            <p>Apprenez à créer des plats sains et équilibrés en choisissant des ingrédients frais et de qualité.</p>
        </section>

        <section>
            <h2>Gestion d'une cuisine</h2>
            <p>Astuces pour organiser votre cuisine et gérer efficacement votre temps lors de la préparation des repas.</p>
        </section>

        <section>
            <h2>Événements culinaires</h2>
            <p>Trouvez des événements culinaires à venir où vous pouvez participer ou apprendre davantage sur votre passion.</p>
        </section>

        <section>
            <h2>Témoignages et histoires de cookeurs</h2>
            <p>Lisez des témoignages inspirants d'autres cookeurs sur leurs expériences et défis dans le domaine culinaire.</p>
        </section>

        <section>
            <h2>Ressources supplémentaires</h2>
            <ul>
                <li><a href="#">Livres de cuisine recommandés</a></li>
                <li><a href="#">Sites web éducatifs sur la cuisine</a></li>
                <li><a href="#">Vidéos de recettes en ligne</a></li>
                <li><a href="#">Cours et ateliers de cuisine disponibles</a></li>
            </ul>
        </section>

        <section>
            <h2>Contact et communauté</h2>
            <p>N'hésitez pas à poser vos questions ou à partager vos propres conseils avec notre communauté !</p>
        </section>


    </div>
  )
}

export default page