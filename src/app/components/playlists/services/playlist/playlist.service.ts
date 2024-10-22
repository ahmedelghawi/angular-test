import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { featuredPlaylists } from '../../../../../assets/data/featured-playlists';
import { FeaturedPlaylists } from '../../../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  getPlaylists(): Observable<FeaturedPlaylists> {
    return of(featuredPlaylists);
  }
}
