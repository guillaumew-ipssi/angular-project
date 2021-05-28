import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/class/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']),
    new User( "Gégé", "Dupont", "gege.dupont@gmail.com", "beer", []),
    new User("Mémé", "Dubois", "meme.dubois@gmail.com", "coffee", ["Jeux de cartes", "Télévision"] ),
    new User( "Toto", "Titi", "toto.titi@gmail.com", "soda", ["Warzone", "Vélo", "Programmation"] )
  ];

  usersSubject = new Subject<any[]>();

  constructor() { }

  emitUsersSubject(){
    this.usersSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsersSubject();
  }
}
