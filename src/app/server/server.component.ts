import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId : Number = 10
  serverStatus: String = 'Online'

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() { 
    
  }

  ngOnInit() {
   

  }

}
