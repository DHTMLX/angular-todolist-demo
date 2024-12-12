import { ToDo, Toolbar } from "@dhx/trial-todolist";
import { getData } from "./data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "todo",
  styleUrls: ["./todo.component.css"],
  template:  `<main class="component_container">
                <div #toolbar_container></div>
                <div #todo_container class="widget"></div>
              </main>`
})
export class ToDoComponent implements OnInit, OnDestroy {
  @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
  @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;

  private _todo!: ToDo;
  private _toolbar!: Toolbar;

  ngOnInit() {
    const { users, tasks, projects } = getData();
    this._todo = new ToDo(this.todo_container.nativeElement, {
      users,
      tasks,
      projects,
      // other configuration properties
    });
    
    this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
      api: this._todo.api,
      // other configuration properties 
    });
  }

  ngOnDestroy(): void {
    this._todo.destructor();
    this._toolbar.destructor();
  }
}
