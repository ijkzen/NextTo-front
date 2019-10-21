import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleItemComponent} from './article-item/article-item.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {NextShowdownModule} from 'next-showdown';
import {NzDividerModule, NzSkeletonModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ArticleRoutingModule} from './article-routing.module';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleInfoComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleRoutingModule
  ],
  imports: [
    CommonModule,
    NextShowdownModule,
    NzDividerModule,
    RouterModule,
    NzSkeletonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule {
}
