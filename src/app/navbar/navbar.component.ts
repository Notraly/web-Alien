import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuChoisi = null;
  sousMenuChoisi = null;
  sousSousMenuChoisi = null;
  menus = [
    { id: 'materiel', name: 'Le matériel' },
    {
      id: 'differentPions',
      name: 'Les différents pions',
      sousMenus: [
        { id: 'pionAlien', name: 'Les alien' },
        { id: 'pionDames', name: 'Les dames alien' },
        { id: 'pionRois', name: 'Les rois alien' },
        { id: 'pionPrinces', name: 'Les princes alien' },
        { id: 'pionPrincesses', name: 'Les princesses alien' },
        { id: 'pionLueur', name: 'La lueur d’espoir' },
      ]
    },
    {
      id: 'deplacements',
      name: 'Les Déplacements',
      sousMenus: [
        { id: 'deplacementsAlien', name: 'Les alien' },
        { id: 'deplacementsDames', name: 'Les dames alien' },
        { id: 'deplacementsRois', name: 'Les rois alien' },
        { id: 'deplacementsPrinces', name: 'Les princes alien' },
        { id: 'deplacementsPrincesses', name: 'Les princesses alien' },
        { id: 'deplacementsTeleportation', name: 'La Téléportation' },
      ]
    },
    {
      id: 'EspecesPlanetes',
      name: 'La vie des espèces et des planètes',
      sousMenus: [
        { id: 'EspeceIath', name: 'I’ath' },
        { id: 'EspeceTaylmoi', name: 'Taylmoï' },
        { id: 'PlaneteGlul', name: 'Glul’' },
        { id: 'PlaneteZeyphus', name: 'Zeyphus' },
        { id: 'PlaneteYeodorai', name: 'Yeodoraï' },
        { id: 'PlaneteNelemphar', name: 'Nelemphar' }
      ]
    },
    {
      id: 'cartes',
      name: 'Les cartes',
      sousMenus: [
        {
          id: 'cartesDeplacements',
        	name: 'Déplacements',
        	sousMenus: [
        		{ id: 'carteMineur', name: 'mineur' },
            { id: 'carteVaisseau', name: 'vaisseau spatial' },
            { id: 'carteCarburant', name: 'carburant' }
        	]
        },
        {
          id: 'cartesAttaques',
        	name: 'Attaques',
        	sousMenus: [
        		{ id: 'carteMissile', name: 'missile' },
            { id: 'carteTir', name: 'tir laser' }
        	]
        },
        {
          id: 'cartesDefenses',
        	name: 'Défense',
        	sousMenus: [
        		{ id: 'carteBouclierVaisseaux', name: 'bouclier vaisseaux' },
            { id: 'carteBouclierAlien', name: 'bouclier alien' },
            { id: 'carteMedecin', name: 'médecin' }
        	]
        },
        {
          id: 'cartesEnvironnement',
        	name: 'Environnement',
        	sousMenus: [
        		{ id: 'carteEclipseSolaire', name: 'eclipse solaire' }
        	]
        },
        { id: 'cartesMalus', name: 'Malus' },
        { id: 'cartesBonus', name: 'Bonus' }
      ]
    }
  ];


  constructor() { }

  isSelect( idMenu ){
    return (this.menuChoisi && idMenu === this.menuChoisi.id)
          || (this.sousMenuChoisi && idMenu === this.sousMenuChoisi.id);
  }


  ngOnInit() {}

  selectMenu(menu){
    this.menuChoisi = menu;
    this.sousMenuChoisi = null;
    this.sousSousMenuChoisi = null;
  }

  selectSousMenu(sousMenu){
    this.sousMenuChoisi = sousMenu;
    this.sousSousMenuChoisi = null;
  }

  selectSousSousMenu(sousMenu){
    this.sousSousMenuChoisi = sousMenu;
  }

}
