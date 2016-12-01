import {Component,Input} from '@angular/core';
import { Hero } from './hero';

    @Component({
        selector:'my-hero-detail',
        template:`<div *ngIf="hero">
                    <h2>{{hero.name}} details!</h2>
                    <div><label>id: </label>{{hero.id}}</div>
                    <div>
                        <label>name: </label>
                        <input [(ngModel)]="hero.name" placeholder="name"/>
                    </div>
                </div>`
    })

//所有组件名都以Component结尾。所有组件的文件名都以.component结尾
export class HeroDetailComponent {
    @Input()
    hero:Hero;
}

