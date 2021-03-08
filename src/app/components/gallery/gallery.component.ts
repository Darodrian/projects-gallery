import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ProjectService]
})
export class GalleryComponent implements OnInit {

  public projects: Project[];
  public url: string;

  constructor(
  	private _projectService: ProjectService
  ) {
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this.getProjects();
  }

  getProjects(){
  	this._projectService.getProjects().subscribe(
  		response => {
  			if(response.projects){
  				this.projects = response.projects;
  			}
  		},
  		error => {
  			console.log(<any>error)
  		}
  	);
  }

}
