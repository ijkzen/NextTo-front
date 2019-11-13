import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../service/bean/data/Comment';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-report-comment',
  templateUrl: './report-comment.component.html',
  styleUrls: ['./report-comment.component.scss']
})
export class ReportCommentComponent implements OnInit {

  commentList: Comment[];

  commentDisplayList: Comment[] = [];

  list: number[] = [];

  isLoading = true;

  constructor(
    private commentService: CommentService,
    private modalService: NzModalService
  ) {
  }

  ngOnInit() {
    this.commentService.getReportedComments()
      .subscribe(
        result => {
          if (result.errCode === '000') {
            this.commentList = result.list;
            this.isLoading = false;
          }
        }
      );
  }


  showCommentContent(content: string) {
    this.modalService.info(
      {
        nzTitle: '评论内容',
        nzContent: content
      }
    );
  }

  handlePageData(event: Comment[]) {
    this.commentDisplayList = event;
  }

  selectPage(selected: boolean) {
    if (selected) {
      this.list = [];
      this.commentDisplayList.forEach((value => {
        this.list.push(value.id);
      }));
    } else {
      this.list = [];
    }
  }

  isSelect(id: number): boolean {
    return this.list.includes(id);
  }

  selectItem(selected: boolean, id: number) {
    if (selected) {
      this.list.push(id);
    } else {
      if (this.list.includes(id)) {
        const index = this.list.findIndex((value => value === id));
        this.list.splice(index, 1);
      }
    }
  }

  isIndeterminate(): boolean {
    return this.list;
  }
}
