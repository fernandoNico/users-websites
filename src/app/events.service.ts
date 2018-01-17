import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

import { Event} from './ui/landing-page/event.model';


@Injectable()
export class EventsService {
  
  apiKey = 'OQMi5v8uiECOE_y_RIyHOg11426';
    url = 'http://localhost:56647/api/Events';
    options: RequestOptions;
   
  
    constructor(private http: Http) {}
  
    getEvents() {
      return this.http.get(('http://localhost:56647/api/Events'))
      .map((res: Response) => res.json()).catch(this.handleError);
    }
  
    getEventById(id: number): Observable<Event> {
      return this.http.get('http://localhost:56647/api/Events/' + id )
      .map((response: Response) => <Event>response.json()).catch(this.handleError);
    }
  
    getEventPostcode(postcode: string) {
      return this.http.get('https://api.getAddress.io/find/' + postcode + '?api-key=' + this.apiKey)
      .map((res: Response) => res.json()).catch(this.handleError);
    }
  
  addEventos(event:Event){
      let endpoint = this.url;
      let body = JSON.stringify(event);
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers: headers});
      return this.http.post(endpoint, body, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  
  updateEvent(event:Event, id:number){
    let endpoint = `${this.url}/${id}`;
    //let endpoint = this.url + event.EventId;
    console.log(endpoint);
    let body = JSON.stringify(event);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(endpoint, body, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  
  
  
  
  deleteEvent(id:number) {
    return this.http.delete('http://localhost:56647/api/Events/' +  id, this.options).map((response: Response) => response.json())
    .catch(this.handleError);
  }
  
  
  
    //////////
    handleError(error: Response) {
      console.error(error);
      return Observable.throw(error);
    }
  }