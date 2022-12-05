import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was created!';
  serverName = 'Test-Server';

  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // username="";
  // allowUsername = false;

  constructor() {
    setTimeout(( ) =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' +this.serverName;
  }

  onUpdateServerName(event: any){
   this.serverName =event.target.value;
  }

  // onUsername(){
  //   if(this.username != ''){
  //     this.allowUsername = true;

  //   }else{

  //     return this.allowUsername;
  //   }
  // }

  // onUpdateusername(event: any){
  //   this.username =event.target.value;
  //  }

}
