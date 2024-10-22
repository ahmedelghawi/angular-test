import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPlaylistsComponent } from './filter-playlists.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCuratorNames } from '../../state-management/playlist/playlist.selectors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { filterPlaylistsByCurator } from '../../state-management/playlist/playlist.actions';

describe('FilterPlaylistsComponent', () => {
  let component: FilterPlaylistsComponent;
  let fixture: ComponentFixture<FilterPlaylistsComponent>;
  let store: MockStore;
  const initialState = { curatorNames: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FilterPlaylistsComponent,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        AsyncPipe,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPlaylistsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    store.overrideSelector(selectCuratorNames, ['Apple 1', 'Apple 2', 'Apple 3'])
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select curator names from the store', () => {
    component.curatorNames$.subscribe(names => {
      expect(names).toEqual(['Apple 1', 'Apple 2', 'Apple 3']);
    });
  });

  it('should dispatch filterPlaylistsByCurator action when filter is called', () => {

    const curatorNames = ['Curator 1', 'Curator 2'];
    component.curatorNameDropdown.setValue(curatorNames);
    const dispatchSpy = spyOn(store, 'dispatch');
    component.filter();

    expect(dispatchSpy).toHaveBeenCalledWith(filterPlaylistsByCurator({ curatorNames }));
  });

  it('should update curatorNameDropdown value when selection changes', () => {
    const curatorNames = ['Curator 1'];
    component.curatorNameDropdown.setValue(curatorNames);

    expect(component.curatorNameDropdown.value).toEqual(curatorNames);
  });
});
