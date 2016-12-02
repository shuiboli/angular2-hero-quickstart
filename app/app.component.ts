import { Component } from '@angular/core';
@Component({
  /*
    如果要用URL的方式引用模板和css，必须加上这句话，不然要报错。
    moduleId: 为与模块相关的 URL （如 templateUrl ）提供基地址 */
  moduleId:module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <!--RouterOutlet是RouterModule提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。-->
    `,
    styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
