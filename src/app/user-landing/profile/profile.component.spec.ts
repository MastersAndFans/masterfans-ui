import { ComponentFixture, TestBed } from '@angular/core/testing';
import {UserInfoComponent} from "./user-info/user-info.component";
import { ProfileComponent } from './profile.component';
import {PostsComponent} from "./posts/posts.component";
import {AuthenticationService} from "../../authentication/authentication-service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent, UserInfoComponent, PostsComponent ],
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
