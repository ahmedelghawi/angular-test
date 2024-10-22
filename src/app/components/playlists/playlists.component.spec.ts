import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsComponent } from './playlists.component';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { getFeaturedPlaylists } from './state-management/playlist/playlist.actions';
import { Playlist } from '../../interfaces/interfaces';
import { selectFeaturedPlaylists, selectFeaturedPlaylistsName } from './state-management/playlist/playlist.selectors';

describe('PlaylistsComponent', () => {
  let component: PlaylistsComponent;
  let fixture: ComponentFixture<PlaylistsComponent>;
  let store: Store;

  const testPlaylists = [{
      name: 'Test Playlist',
      curator_name: 'Test Curator',
      artwork: 'test-path.jpg',
      url: 'test.com'
    } as Playlist,
    {
      name: 'Test Playlist 2',
      curator_name: 'Test Curator 2',
      artwork: 'test-path2.jpg',
      url: 'test2.com'
    } as Playlist,
  ];
  
  const mockFeaturedPlaylistsName = 'Featured Playlists';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsComponent],
      providers: [
        provideMockStore({ selectors: [
          { selector: selectFeaturedPlaylists, value: testPlaylists },
          { selector: selectFeaturedPlaylistsName, value: mockFeaturedPlaylistsName }
        ] }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getFeaturedPlaylists on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(getFeaturedPlaylists());
  });

  it('should select featured playlists from the store', () => {
    const mockPlaylists: Playlist[] = testPlaylists;

    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    component.featuredPlaylists$.subscribe(playlists => {
      expect(playlists).toEqual(mockPlaylists);
    });
  });

  it('should select featured playlists name from the store', () => {
    const mockFeaturedPlaylistsName = 'Featured Playlists';

    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    component.featuredPlaylistsName$.subscribe(name => {
      expect(name).toEqual(mockFeaturedPlaylistsName);
    });
  });
});
