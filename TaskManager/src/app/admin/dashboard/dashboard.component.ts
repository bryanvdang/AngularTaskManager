import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];


  ngOnInit() {
     this.Designation = "Team Leader"; //"this" initializes the value
     this.Username = "Jonny Appleseed";
     this.NoOfTeamMembers = 67;
     this.TotalCostOfAllProjects = 240;
     this.PendingTasks = 15;
     this.UpComingProjects = 2;
     this.ProjectCost = 2113507;
     this.CurrentExpenditure = 96788;
     this.AvailableFunds = 52536;

     this.Clients = [
       "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
     ]

     this.Projects = [
       "Project A", "Project B", "Project C", "Project D"
     ]

     for(var i=2019; i >= 2010; i--) {
      this.Years.push(i);
     }

     this.TeamMembersSummary = [
       {Region: "EAST", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
       {Region: "SOUTH", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
       {Region: "WEST", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
       {Region: "NORTH", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6},
     ]

     this.TeamMembers = [
       {Region:"East", Members: [
        {ID: 1, Name: "Ford", Status: "Available"},
        {ID: 2, Name: "Miller", Status: "Available"},
        {ID: 3, Name: "Jones", Status: "Busy"},
        {ID: 4, Name: "James", Status: "Busy"}
       ]},
       {Region:"South", Members: [
        {ID: 5, Name: "Bryan", Status: "Available"},
        {ID: 6, Name: "Adam", Status: "Available"},
        {ID: 7, Name: "David", Status: "Busy"},
        {ID: 8, Name: "Jess", Status: "Busy"}
       ]},
       {Region:"West", Members: [
        {ID: 9, Name: "Duke", Status: "Available"},
        {ID: 10, Name: "Tyler", Status: "Available"},
        {ID: 11, Name: "John", Status: "Busy"},
        {ID: 12, Name: "Ashton", Status: "Busy"}
       ]},
       {Region:"North", Members: [
        {ID: 13, Name: "Chad", Status: "Available"},
        {ID: 14, Name: "Kyle", Status: "Available"},
        {ID: 15, Name: "Monica", Status: "Busy"},
        {ID: 16, Name: "Becky", Status: "Busy"}
       ]},
      ];
  }

  onProjectChange($event){
    //console.log($event.target.innerHTML); //display the text of the currenlty selected item

    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 34234;
      this.CurrentExpenditure = 34343;
      this.AvailableFunds = 787878;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 75324;
      this.CurrentExpenditure = 45654;
      this.AvailableFunds = 4554;
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 45456;
      this.CurrentExpenditure = 4578;
      this.AvailableFunds = 568;
    }
  }
}
