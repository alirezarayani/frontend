import {Component} from '@angular/core';
import {SidebarLayoutLayout} from "../../../../libs/shared/layout/src";

@Component({
  standalone: true,
  imports: [SidebarLayoutLayout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
