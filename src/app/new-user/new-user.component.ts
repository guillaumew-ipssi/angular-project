import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/class/User.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  addUser(){
    const form = this.userForm.value;
    const user = new User(
      form['firstName'],
      form['lastName'],
      form['email'],
      form['drinkPreference'],
      form['hobbies'] ? form['hobbies'] : []
    );
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }

  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
