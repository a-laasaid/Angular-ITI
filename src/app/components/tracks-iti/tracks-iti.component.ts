import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks-iti',
  standalone: true,
  imports: [],
  templateUrl: './tracks-iti.component.html',
  styleUrl: './tracks-iti.component.css'
})
export class TracksITIComponent {
  
  tracksList:trackType[]=[{
    id:1,
    name:"PD",
    location:"Menofia"
  },
  {
    id:2,
    name:"SD",
    location:"Smart"
  },
  {
    id:3,
    name:"OS",
    location:"Alex"
  }
];

objTrack:trackType[]=[{id:0,name:"",location:""}];

selectTrack(e:Event){
  let s:HTMLSelectElement = e.target as HTMLSelectElement;
  let selectedID = Number(s.value);
  this.objTrack = this.tracksList.filter(x=>x.id==selectedID);

  // console.log(this.objTrack.name);
  // console.log(this.objTrack.location);
  
}

}
interface trackType{
  id:number;
  name:string;
  location:string;
}