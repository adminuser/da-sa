
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ColumnAddComponent } from './column-add/column-add.component';
import { ColumnsViewComponent } from './columns-view/columns-view.component';
import { ColumnDetailComponent } from './column-detail/column-detail.component';
import { DgsAddComponent } from './dgs-add/dgs-add.component';
import { DgsViewComponent } from './dgs-view/dgs-view.component';
import { DgsDetailComponent } from './dgs-detail/dgs-detail.component';
import { ValidationSetComponent } from './validation-set/validation-set.component';
import { SuperadminComponent } from './superadmin/superadmin.component';

const routes: Routes = [
  { path : '', redirectTo : '', pathMatch : 'full' },
  { path : 'sa-dashboard', component : SuperadminComponent},
  { path : 'add-user', component : UserAddComponent }, 
  { path : 'view-users', component : UsersViewComponent }, 
  { path : 'user-detail/:id', component : UserDetailComponent}, 
  { path : 'add-project', component : ProjectAddComponent }, 
  { path : 'view-projects', component : ProjectsViewComponent }, 
  { path : 'project-detail', component : ProjectDetailComponent}, 
  { path : 'add-column', component : ColumnAddComponent}, 
  { path : 'view-columns', component : ColumnsViewComponent }, 
  { path : 'column-detail/:id', component : ColumnDetailComponent}, 
  { path : 'add-dgs', component : DgsAddComponent}, 
  { path : 'view-all-dgs', component : DgsViewComponent}, 
  { path : 'dgs-detail', component : DgsDetailComponent},
  { path : 'set-validations', component : ValidationSetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SuperadminComponent,UserAddComponent,UsersViewComponent,UserDetailComponent,
    ProjectAddComponent,ProjectsViewComponent,ProjectDetailComponent,
    ColumnAddComponent,ColumnsViewComponent,ColumnDetailComponent,
    DgsAddComponent,DgsViewComponent,DgsDetailComponent,
    ValidationSetComponent]


