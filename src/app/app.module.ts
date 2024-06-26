import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./todo/todo.component";

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
