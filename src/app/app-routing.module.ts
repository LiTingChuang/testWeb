import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { MemberListComponent } from './member/member-list/member-list.component';

const routes: Routes = [
  // 網址, redirectTo -> 轉向至
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 首頁Dashboard
  { path: 'dashboard', component: DashboardComponent },
  // 清單列表
  { path: 'customer', component: CustomerListComponent },
  // 個別的列表
  { path: 'customer/:cid', component: CustomerDetailComponent },
  { path: "member", component: MemberListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
