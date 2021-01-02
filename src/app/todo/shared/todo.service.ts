import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { title } from 'process';

@Injectable()
export class TodoService {

  toDolist: AngularFireList<any>;
  constructor(private firebasedb : AngularFireDatabase) { }

  getTodoList(){
    this.toDolist =this.firebasedb.list('titles')
    return this.toDolist;
  }

  addTitle(){
    this.toDolist.push({
      title: title,
      ischecked : false
    })
  }

  checkOrUncheckTitle($key: string, flag : boolean){
    this.toDolist.update($key, {ischecked: flag})
  }

  removeTitle($key : string){
    this.toDolist.remove($key)
  }

}
