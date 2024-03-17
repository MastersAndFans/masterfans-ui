import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthenticationService} from "../authentication-service";
import { RegisterComponent } from './register.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [AuthenticationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onSubmit method on form submission', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    console.log(component.registerForm.valid);
    const button = fixture.debugElement.nativeElement.querySelector('.register-button');
    button.disabled = false;
    button.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should redirect to login page when "Prisijunk" is called', () => {
    spyOn(component, 'redirectToLogin').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.login');
    button.click();
    fixture.detectChanges();
    expect(component.redirectToLogin).toHaveBeenCalled();
  });

  it('should call passwordsMatch() after form submitted', () => {
    spyOn(component, 'passwordsMatch').and.callThrough();
    component.onSubmit();
    expect(component.passwordsMatch).toHaveBeenCalled();
  });

  it('should call isDateValid() after form submitted', () => {
    spyOn(component, 'isDateValid').and.callThrough();
    component.onSubmit();
    expect(component.isDateValid).toHaveBeenCalled();
  });

  it('should call auth.RegisterUser on form submission', () => {
    const mockForm = {
        name: 'Ignas',
        surname: 'Vizbaras',
        email: 'ignas@gmail.com',
        password: 'vienasvienas',
        repeat_password: 'vienasvienas',
        birth_date: '2005-12-12',
        phone_number: '',
        is_master: false
    }

    const mockResponse = {success: true};

    const authService = TestBed.inject(AuthenticationService);
    spyOn(authService, 'RegisterUser').and.returnValue(of(mockResponse));

    component.registerForm.setValue(mockForm);
    component.onSubmit();

    // @ts-ignore
    expect(authService.RegisterUser).toHaveBeenCalledWith(mockForm);
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
