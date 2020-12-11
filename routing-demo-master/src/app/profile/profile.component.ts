import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }
  user: {_id,username,password};
  userId: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(u => this.userId = u["userId"]);
    this.user = this.userService.findUserById(this.userId);
    console.log(this.user);
  }

}
