import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, MenuBarComponent, RouterModule]
})
export class AppComponent {
  title = 'angular-blog';
}
