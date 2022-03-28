import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { mem } from './member-data';
import { MemberServiceService } from './member-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  tableColumns = ['fname', 'lname', 'username', 'avatar'];
  data = new MatTableDataSource<mem>();

  constructor(private service: MemberServiceService) { }

  ngOnInit(): void {

    this.service.getMember().subscribe((res =>{
      
      this.data = new MatTableDataSource(Object.values(res));

    }));

  }



}
