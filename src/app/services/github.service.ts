import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username:string;
    private client_id = 'bf883b974c1a02b7caf6';
    private client_secret = '3fd6e7caeb0c55bb60f74c4dfcdbe6d55c646689';

    constructor(private _http:Http){
        console.log('Github Service ready....');
        this.username = 'rakibhasan48';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}