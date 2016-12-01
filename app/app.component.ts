import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <h2>{{hero.name}} details</h2>
             <div><label>id:</label>{{hero.id}}</div>
             <div>
                <label>name:</label>
                <!--ngModel用于双向数据绑定,需要在app.module中先导入FormsModule模块-->
                <input [(ngModel)]="hero.name" placeholder="name">  
            </div>
  `,
})
export class AppComponent  { 
  title='Tour of Heroes';
  hero : Hero = {
    id:1,
    name:'Windstorm'
  };
}
