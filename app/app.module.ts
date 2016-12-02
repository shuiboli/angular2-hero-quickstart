import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent }         from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

import './rxjs-extensions'; //一次性导入需要用的那些RxJS Observable扩展组合在一起


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    /*InMemoryWebApiModule将Http客户端默认的后端服务
    （这是一个辅助服务，负责与远程服务器对话）替换成了内存Web API服务： */
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  /*建议在根模块AppModule的providers数组中注册全应用级的服务 */
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
