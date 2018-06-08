import { Injectable } from '@angular/core';
import { Channel } from './models/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsListService {
  configUrl = "./assets/config.json";
  apiBaseUrl:string = "http://18.221.160.127/guide-ws/service/scripts/rest/";
  private _channels: Channel[];

  constructor(private httpClient: HttpClient) { }

  getChannelsList(id): Observable<Channel[]>
  {
    // console.log("getChannelsList   >>>>>>>>>>>>");
    var self = this;
    this._channels = [];
    var _url: string = this.apiBaseUrl + "req_eventChannelList.php?evId=" + id;
    var a = this.httpClient.get<any[]>(_url);
    var ch: Channel = new Channel();
        
    a.forEach(e => {
      e.forEach(obj => {
        // console.log(obj);
        self._channels.push(self.getItemsFormat(obj));        
      });
    });

    // console.log(self._channels);
    
    return of(self._channels);
  }

  private getItemsFormat(c:Object): Channel
  {
    let obj = new Channel();
    obj.ID = c['ch_id'];
    obj.Name = c['ch_name'];
    obj.Abv = c['ch_abv'];
    obj.Img = c['ch_img'];
    obj.Url = c['ev_ch_url'];

    return obj;
  }
}
