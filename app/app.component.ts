import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
   <!--RouterOutlet是RouterModule提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。-->
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
