import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <h2>My Heroes</h2>
             <ul class="heroes">
                <li *ngFor="let hero of heroes" 
                    (click)="onSelect(hero)"
                    [class.selected]="hero === selectedHero">
                  <span class="badge">{{hero.id}}</span>{{hero.name}}
                </li>
             </ul>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>

  `,
  styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
  `],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  
  /*
    构造函数，定义了一个私有的heroService属性，并标记为注入HeroService的靶点。
    在创建APPComponent的时候，Angular知道需要先提供一个HeroService的实例。
    在上面的@Component中最后注册了提供商providers来告诉注入器如何创建HeroService.
  */
  constructor(private heroService: HeroService) { }
  
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
  
}
