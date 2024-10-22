import { TestBed } from '@angular/core/testing';
import { PlaylistService } from './playlist.service';
import { Observable } from 'rxjs';
import { FeaturedPlaylists } from '../../../../interfaces/interfaces';
import { featuredPlaylists } from '../../../../../assets/data/featured-playlists';

describe('PlaylistService', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return featured playlists', (done: DoneFn) => {
    service.getPlaylists().subscribe((playlists: FeaturedPlaylists) => {
      expect(playlists).toEqual(featuredPlaylists);
      done();
    });
  });

  it('should return an observable', () => {
    const result: Observable<FeaturedPlaylists> = service.getPlaylists();
    expect(result).toBeInstanceOf(Observable);
  });

});
