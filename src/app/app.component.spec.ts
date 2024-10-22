import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        MatSidenavModule,
        PlaylistsComponent,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({ initialState })
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
