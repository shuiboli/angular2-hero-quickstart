import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  /*
    构造函数，定义了一个私有的heroService属性，并标记为注入HeroService的靶点。
    在创建APPComponent的时候，Angular知道需要先提供一个HeroService的实例。
    在上面的@Component中最后注册了提供商providers来告诉注入器如何创建HeroService.
  */
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  /*
    Angular提供了一些接口，用来介入组件生命周期的几个关键时间点（生命周期钩子）：
         刚创建时 ngOnInit 
         每次变化时
         最终被销毁时    
  */
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }


}
