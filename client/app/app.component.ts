import { TaskService } from './components/services/task.service';
import { AppModule } from './app.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers : [TaskService]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}