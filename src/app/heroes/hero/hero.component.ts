import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name: string = 'ironman';
  age:  number = 45;


  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetName(): void {
    this.name = 'Ironman';
  }

  resetAge(): void {
    this.age = 45;
  }

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
