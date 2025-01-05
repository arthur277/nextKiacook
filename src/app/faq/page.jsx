import React from 'react'
import styles from './faq.module.css'

function page() {
  return (
    <div className={styles.qui}>
      <h3>🔍 Questions Générales</h3>

      <details>
          <summary><strong>Comment fonctionne la plateforme ?</strong></summary>
          <ul>
              <li>Inscription gratuite des chefs et clients</li>
              <li>Recherche de chefs par compétences, localisation, disponibilités</li>
              <li>Réservation et paiement sécurisés en ligne</li>
          </ul>
      </details>
      
      <details>
          <summary><strong>Quels types de services sont proposés ?</strong></summary>
          <ul>
              <li>Chef à domicile</li>
              <li>Cours de cuisine</li>
              <li>Événements privés</li>
              <li>Repas d'entreprise</li>
              <li>Traiteur</li>
          </ul>
      </details>
      
      <h3>💰 Tarifs et Paiements</h3>
      
      <details>
          <summary><strong>Comment sont fixés les prix ?</strong></summary>
          <ul>
              <li>Chaque chef détermine librement ses tarifs</li>
              <li>Fourchette moyenne : 35-200€ par personne</li>
              <li>Transparence totale avant réservation</li>
          </ul>
      </details>
      
      <details>
          <summary><strong>Quels moyens de paiement ?</strong></summary>
          <ul>
              <li>Carte bancaire</li>
              <li>Virement</li>
              <li>Paypal</li>
              <li>Paiement sécurisé</li>
          </ul>
      </details>
      
      <h3>👨‍🍳 Pour les Chefs</h3>
      
      <details>
          <summary><strong>Quels sont les critères de sélection ?</strong></summary>
          <ul>
              <li>Diplôme en cuisine</li>
              <li>Expérience professionnelle</li>
              <li>Casier judiciaire vierge</li>
              <li>Assurance professionnelle</li>
          </ul>
      </details>
      
      <details>
          <summary><strong>Quels avantages pour les chefs ?</strong></summary>
          <ul>
              <li>Visibilité</li>
              <li>Gestion administrative</li>
              <li>Mise en relation</li>
              <li>Commission réduite</li>
          </ul>
      </details>
      
      <h3>🛡️ Sécurité et Garanties</h3>
      
      <details>
          <summary><strong>Comment sont vérifiés les profils ?</strong></summary>
          <ul>
              <li>Validation manuelle</li>
              <li>Vérification des documents</li>
              <li>Avis et notations des clients</li>
          </ul>
      </details>
      
      <details>
          <summary><strong>Politique d'annulation ?</strong></summary>
          <ul>
              <li>Remboursement possible</li>
              <li>Conditions précises</li>
              <li>Protection des deux parties</li>
          </ul>
      </details>
      
      <h3>📞 Contact et Support</h3>
      
      <details>
          <summary><strong>Comment nous contacter ?</strong></summary>
          <ul>
              <li>Email</li>
              <li>Téléphone</li>
              <li>Chat en ligne</li>
              <li>Formulaire de contact</li>
          </ul>
      </details>
    </div>
  )
}

export default page