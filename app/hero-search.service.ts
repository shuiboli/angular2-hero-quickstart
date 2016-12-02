import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero }           from './hero';

/*
    一个可观察对象是一个事件流，我们可以用数组型操作符（函数）来处理它
    转换成承诺通常是更好地选择，我们通常会要求http.get获取单块数据。只要接收到数据，就算完成.
    但是请求并非总是“一次性”的。像这样一个请求-取消-新请求的序列用promise很难实现,但对于可观察对象却很简单
 */
@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  /*我们不再调用toPromise，而是直接返回可观察对象。 */
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }
}
