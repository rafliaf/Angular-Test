import { Component, OnInit } from '@angular/core';

@Component({
  // atribut (1)-> selector: '[app-servers]),
  // (2) -> selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  // server
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // username
  allowNewUsername = true;
  usernameCreationStatus = 'No username was created';
  username = '';
  usernameCrated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  // server
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! The name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // username
  onCreateUser() {
    this.usernameCrated = true;
    this.usernameCreationStatus =
      'Username successful created! The name is ' + this.username;
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
