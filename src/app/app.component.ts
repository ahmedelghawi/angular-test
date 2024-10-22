import { Component } from '@angular/core';
import { PlaylistsComponent } from "./components/playlists/playlists.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaylistsComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
