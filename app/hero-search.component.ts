import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';
@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) { }
    // Push a search term into the observable stream.
    /*
        Subject（主题）是一个可观察的事件流中的生产者，也是一个Observable对象。
        searchTerms生成一个产生字符串的Observable，用作按名称搜索时的过滤条件。
        每当调用search时都会调用next来把新的字符串放进该主题的可观察流中 
    */
    search(term: string): void {
        this.searchTerms.next(term);
    }
    //要把搜索词的流转换成Hero数组的流，并把结果赋值给heroes属性
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // 在传出最终字符串之前，debounceTime(300)将会等待
            .distinctUntilChanged()   // 确保只在过滤条件变化时才发送请求，这样就不会重复请求同一个搜索词了
            .switchMap(term => term   // 为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。它会取消并丢弃以前的搜索可观察对象，只保留最近的
                // 返回最近一次http调用返回的可观察对象
                ? this.heroSearchService.search(term)
                // 如果搜索框为空，我们还可以短路掉这次http方法调用，并且直接返回一个包含空数组的可观察对象
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
