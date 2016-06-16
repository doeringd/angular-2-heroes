import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit { 
     
    private selectedHero: Hero;
    private heroes: Hero[];   

    constructor(private heroService: HeroService, private router: Router){}
   
    ngOnInit() {
        this.getHeroes();
    }   

    onSelect(hero: Hero) {  
       this.selectedHero = hero;
    }

    goToDetail() {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this.router.navigate(link);
    }    

    getHeroes() { this.heroService.getHeroes().then(heroes => this.heroes = heroes) }
}