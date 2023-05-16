import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Exp() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <div className='titre' >
                    EXPERIENCE
                </div>
            </div>
            
             </div>
        <div className='row' style={{marginTop:'10%'}}>

            <div className='col' id='col_exp1'>
             
                <div>
                    <h2>osisoftewere développeuse odoo</h2>
                    <h5>2022/06/1-2023/30/04</h5>
                    <ul>
                 <li>
                  <p>Je travaille sur un projet de ressources humaines où je développe des modules Odoo </p>
                  <p>  pour les contrats et la paie marocains, ainsi que pour les déclarations fiscales (état 9421), la CNSS et la CIMR.</p>
                  </li> 
                  <li>Migrer les modules vers différentes versions d'Odoo</li>
                  </ul>
                
                </div>

            </div>
            <div className='col' id='col_exp1' style={{}}>
            
                <div>
                    <h2>dkgroup développeuse odoo</h2>
                    <h5>2022/06/1-2022/30/04</h5>
                    <ul>
                 <li>
                  <p>Notre équipe de développement chez dkgroup a une expertise complète dans la création de modules pour Odoo, y compris la facturation, le point de vente, la comptabilité, le site e-commerce, et bien plus encore. Nous sommes également spécialisés dans la migration de données et le développement full-stack, nous avons certifié a certification fonctionnel sur Odoo. Nous utilisons 
                    une variété de technologies telles que Python, XML, JavaScript, XML-RPC et autres pour répondre à vos besoins. </p>
                 </li>
                 </ul>
                
                </div>

            </div>
        </div>
        <div className='row' style={{marginTop: '7%'}}> 
        <div className='col' id='col_exp1' >
              
                <div>
                    <h2>itadvisor développese  odoo</h2>
                    <h5>2020/11/1- 2021/06/04</h5>
                    <ul>
                 <li>
                  <p>
                  Notre équipe de développement est spécialisée dans la création de modules Odoo pour diverses fonctionnalités telles que la facturation, le bureau d'ordre, la comptabilité et le site e-commerce. Nous utilisons un environnement technique complet qui comprend des langages tels que Python, JSON, JavaScript, ainsi que des outils de base de données tels que PostgreSQL et des langages de balisage tels que XML, Bootstrap, CSS et HTML pour concevoir des modules personnalisés qui répondent à vos besoins spécifiques
                  </p>
                 </li>
                 </ul>
                
                </div>

            </div>

        
         </div>
    </div>

   
  );
}

export default Exp;
