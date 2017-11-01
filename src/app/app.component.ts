import {Component, OnInit} from '@angular/core';
import {MyHttpService} from "./http-services/myHttp.service";


@Component({
  selector: 'app-root',
  template : `
    <h1>Belajar HttpClient di Angular</h1>
  `
})
export class AppComponent  implements OnInit{


  constructor(private myHttpService : MyHttpService){}

  ngOnInit(): void {
    //get data
    // this.myHttpService.getData();
    // this.myHttpService.getAddressData();
    // this.myHttpService.getUserById(4);
    this.myHttpService.getUserByIdFullResponse(4);



    // this.myHttpService.postData(
    //     {
    //       userId : 1 ,
    //       id : 1 ,
    //       title : "Hello title" ,
    //       body : "Hello body"
    //     }
    //  );

    this.myHttpService.postDataByFormUrlEncoded( "Arief");
  }

}
