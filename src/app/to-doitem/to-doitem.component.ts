// /*
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-to-doitem',
//   templateUrl: './to-doitem.component.html',
//   styleUrls: ['./to-doitem.component.scss']
// })
// export class ToDoitemComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// */

// import { Component, OnInit } from "@angular/core";
// @Component ({
//   selector: 'app-to-doitem',
//   templateUrl: './to-doitem.component.html',
//   styleUrls: ['./to-doitem.component.scss']
// })

// export class ToDoitemComponent implements OnInit {
//   itemCount: number;
//   todoItemText: string;
//   todoItems = [];
//   ngOnInit() {
//     this.itemCount = this.todoItems.length;
//   }

//   addTodoItem () {
//     this.todoItems.push(this.todoItemText);
//     this.todoItemText='';
//     this.itemCount = this.todoItems.length;
//   }
// }

import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-to-doitem',
 templateUrl: './to-doitem.component.html',
 styleUrls: ['./to-doitem.component.scss']
})

export class ToDoitemComponent implements OnInit {
itemCount : number = 0;
todoItemText : string = "";
todoItems: any = [];
ngOnInit() {
this.itemCount == this.todoItems.length;
}
addTodoItem() {
this.todoItems.push(this.todoItemText);
this.todoItemText = '';
this.itemCount = this.todoItems.length;
}
}

