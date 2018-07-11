import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import { Event} from './ui/landing-page/event.model'; // Event Class used to encapsulate data 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventsService {
  
  apiKey = 'OQMi5v8uiECOE_y_RIyHOg11426'; // APi Key to fecth data from the postcode API
  url = 'http://localhost:56647/api/Events'; //Restful Web API endpoint
  options: RequestOptions;

  constructor(private http: Http) {}

  //Fetch all events stored in the relational DB
  getEvents() {
    return this.http.get(('http://localhost:56647/api/Events'))
    .map((res: Response) => res.json()).catch(this.handleError);
  }
  //Fetch an event based on its id
  getEventById(id: number): Observable<Event> {
    return this.http.get('http://localhost:56647/api/Events/' + id )
    .map((response: Response) => <Event>response.json()).catch(this.handleError);
  }
  //Fetch an event location based on the event postcode
  getEventPostcode(postcode: string) {
    return this.http.get('https://api.getAddress.io/find/' + postcode + '?api-key=' + this.apiKey)
    .map((res: Response) => res.json()).catch(this.handleError);
  }
  //Push an event to the relational DB
  addEvents(event:Event){
      let endpoint = this.url;
      let body = JSON.stringify(event);
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers: headers});
      return this.http.post(endpoint, body, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  //Update an event to the relational DB
  updateEvent(event:Event, id:number){
    let endpoint = `${this.url}/${id}`;
    console.log(endpoint);
    let body = JSON.stringify(event);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(endpoint, body, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
   //Delete an event to the relational DB 
  deleteEvent(id:number) {
    return this.http.delete('http://localhost:56647/api/Events/' +  id, this.options).
    map((response: Response) => response.json())
    .catch(this.handleError);
  }
  // Handle error method 
    handleError(error: Response) {
      console.error(error);
      return Observable.throw(error);
    }
  }