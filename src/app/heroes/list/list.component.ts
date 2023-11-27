import { Component } from '@angular/core';

@Component({
  selector: 'app-app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {



  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public deleteHero?: string;

  public removeLastHero(): void {
    this.deleteHero = this.heroes.pop();
  }

  public removeFirstHero(): void {
    this.heroes.shift();
  }

  public addHero(): void {
    this.heroes.push('Antman');
  }

  public removeAllHeroes(): void {
    this.heroes = [];
  }

}
