import { Component, Input } from '@angular/core';
import { Playlist } from '../../../../interfaces/interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  @Input() playlist!: Playlist | null;
}
