import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { ForumState } from '../store/forum.state';
import { Observable } from 'rxjs/Observable';
// import * as forumActions from '../store/forum.actions';
import { Topic } from "../../models/topic";

@Component({
    selector: 'account-login',
    templateUrl: './login.component.html',

})

export class AccountLoginComponent implements OnInit {

    // topics$: Observable<Topic[]>;


    constructor(private store: Store<any>) {
        // this.topics$ = this.store.select<Topic[]>(state => state.community.forumState.topics);
    }

    ngOnInit() {
        // this.store.dispatch(new forumActions.SelectAllAction());
    }
}