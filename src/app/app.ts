import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'deploy-github-aws';
  ngOnInit(): void {
    // const hola: string = "";
    throw new Error('Method not implemented.')

    ;
  }
}
