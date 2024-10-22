import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCuratorNames } from '../../state-management/playlist/playlist.selectors';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filterPlaylistsByCurator } from '../../state-management/playlist/playlist.actions';
import { CuratorNamesState } from '../../state-management/reducers/curator-names.reducer';

@Component({
  selector: 'app-filter-playlists',
  standalone: true,
  imports: [AsyncPipe, MatInputModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './filter-playlists.component.html',
  styleUrl: './filter-playlists.component.scss'
})
export class FilterPlaylistsComponent {

  curatorNames$ = this.store.select(selectCuratorNames);
  curatorNameDropdown = new FormControl();

  constructor(private store: Store<CuratorNamesState>) {}

  filter(): void {
    this.store.dispatch(filterPlaylistsByCurator({
      curatorNames: this.curatorNameDropdown.value
    }));
  }
}
