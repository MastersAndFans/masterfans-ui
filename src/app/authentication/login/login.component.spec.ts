import { ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthenticationService} from "../authentication-service";
import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {ProfileComponent} from "../../user-landing/profile/profile.component";
import {of, throwError} from 'rxjs'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'profile', component: ProfileComponent }
        ]),],
      providers: [AuthenticationService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthenticationService LoginUser method', () => {
    const spyLoginUser = spyOn(authService, 'LoginUser').and.returnValue(of({}));
    const email = 'test@example.com';
    const password = 'password';
    component.loginForm.setValue({ email, password });
    component.onSubmit();
    // @ts-ignore
    expect(spyLoginUser).toHaveBeenCalledWith({ email, password });
  });

  it('should handle 401 while calling LoginUser', () => {
    spyOn(authService, 'LoginUser').and.returnValue(
      throwError({ status: 401 })
    );
    component.onSubmit();
    expect(component.loginForm.controls['password'].hasError('invalidCredentials')).toBeTrue();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form valid when it is not empty', () => {
    const mockForm = {
      email: 'test@gmail.com',
      password: 'password',
    }
    component.loginForm.setValue(mockForm);
    expect(component.loginForm.valid).toBeTrue();
  });

  it('email field validity', () => {
    let errors = {};
    const email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();


    email.setValue('test@example.com');
    expect(email.valid).toBeTrue();
  });

  it('password field validity', () => {
    let errors = {};
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('password');
    expect(password.valid).toBeTrue();
  });

  it('should redirect to register page', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    component.redirectToRegister();
    expect(navigateSpy).toHaveBeenCalledWith(['/register']);
  });
});
