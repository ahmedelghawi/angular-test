import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Playlist } from '../../../../interfaces/interfaces';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  const testPlaylist = {
    name: 'Test Playlist',
    curator_name: 'Test Curator',
    artwork: 'test-path.jpg',
    url: 'test.com'
  } as Playlist;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlaylistComponent,
        MatCardModule,
        MatButtonModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Title and subtitle display values', () => {
    it('should display playlist name and curator name when playlist is provided', () => {
      const playlist: Playlist = testPlaylist;
      
      component.playlist = playlist;
      fixture.detectChanges();
  
      const titleElement: HTMLElement = fixture.nativeElement.querySelector('.mat-headline-medium');
      const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.mat-title-large');
  
      expect(titleElement.textContent).toContain(playlist.name);
      expect(subtitleElement.textContent).toContain(playlist.curator_name);
    });
  
    it('should display default message when playlist is null', () => {
      component.playlist = null;
      fixture.detectChanges();
  
      const titleElement: HTMLElement = fixture.nativeElement.querySelector('.mat-headline-medium');
      const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.mat-title-large');
  
      expect(titleElement.textContent).toBe('');
      expect(subtitleElement.textContent).toBe('');
    });
  });

  describe('Artwork image display', () => {
    it('should render artwork image correctly', () => {
      const playlist: Playlist = testPlaylist
      component.playlist = playlist;
      fixture.detectChanges();
  
      const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img[mat-card-image]');
      expect(imgElement.src).toContain(playlist.artwork);
      expect(imgElement.alt).toBe("Can't load image");
    });
  });

  describe('URL functionality', () => {
    it('should have a link to the playlist URL', () => {
      const playlist: Playlist = testPlaylist;
  
      component.playlist = playlist;
      fixture.detectChanges();
  
      const linkElement: HTMLAnchorElement = fixture.nativeElement.querySelector('a[mat-fab]');
      expect(linkElement.href).toContain(playlist.url);
      expect(linkElement.target).toBe('_blank');
    });
  });
});
