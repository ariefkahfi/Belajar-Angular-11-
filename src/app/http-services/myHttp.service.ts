import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";


export interface UserBodyRequest {
  user : {id : number , userId : number , title : string , body : string}
}
 interface User {
  id : number ,
  username : string,
  email : string
  address : {street : string , suite : string , city : string , zipcode : string};
}

@Injectable()
export class MyHttpService{
  readonly BASE_GET = "https://jsonplaceholder.typicode.com/users";
  readonly  BASE_POST = "https://jsonplaceholder.typicode.com/posts";

   BASE_API = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyAR6WPg06EYG94R2Q1Oq9AAovRsDJCEDjU";


  constructor(private http : HttpClient){}


  //post data to jsonplaceholder
  postData(user : {userId : number , id : number , title : string , body : string}) : void {
    this.http.post(this.BASE_POST,user,{observe : 'response'})
      .subscribe((value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      });
  }

  cobaURLSearchParams(){
    let formData = new URLSearchParams();

    formData.set('nama','Arief');
    formData.set('alamat','Muara Enim');
    formData.set('gol-darah','A');



    console.log('formData result (string) : ' + formData.toString());
  }
  postDataByFormUrlEncoded(nama : string){
    this.cobaURLSearchParams();

    let body = new URLSearchParams();
    body.set('nama',nama);

    console.log('body String : ' + body.toString());

    this.http.post("http://localhost/index.php",body.toString(),{observe : "response" , headers : new HttpHeaders().set('Content-type','application/x-www-form-urlencoded') , responseType : 'text'})
      .subscribe((value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      });
  }


  //get data from jsonplaceholder
  getData() : void{
    this.http
      .get(this.BASE_GET)
      .subscribe((value)=>{
          console.log(value);
      });
  }
  getAddressData() : void{
    this.http.get(`${this.BASE_GET}/1`)
      .subscribe((user : User)=>{
          console.log(
            `Email : ${user.email},
Address : ${user.address.city},
Street : ${user.address.street} 
            `
          );
      });
  }

  getUserById(id : number) : void{
    this.http.get(`${this.BASE_GET}/${id}`)
      .subscribe((value)=>{
        let company = (<any>value)['company'];
        console.log('Company name : ' + company.name);
      },(error)=>{
        console.log('Status code : ' + error.status + "\n" +
          "Status text : " + error.statusText);
      },()=>{
        console.log('Request complete')
      });
  }

  getUserByIdFullResponse(id : number) : void{
      this.http.get(this.BASE_GET+"/"+id , {responseType : "json"})
        .subscribe((value)=>{
          console.log(value);
        },(error)=>{
          console.log(error);
        });
  }

}
