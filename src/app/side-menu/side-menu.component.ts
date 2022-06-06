import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  username:String;
  constructor(private loginServices:LoginService) { }

  ngOnInit(): void {
    this.username = this.loginServices.getUsername();
  }

  postTweet(){
    if((document.getElementById("postTweet") as HTMLElement).style.display == "none"){
      (document.getElementById("postTweet") as HTMLElement).style.display = "block";
    }
    else{
      (document.getElementById("postTweet") as HTMLElement).style.display = "none";
    }
  }

  myTweets(){
    (document.getElementById("myTweets") as HTMLElement).style.display = "none";
    (document.getElementById("allTweets") as HTMLElement).style.display = "block";
    (document.getElementById("all-tweets-body") as HTMLElement).style.display = "none";
    (document.getElementById("my-tweets-body") as HTMLElement).style.display = "block";
  }

}
