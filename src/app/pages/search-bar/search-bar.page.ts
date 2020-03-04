import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.page.html",
  styleUrls: ["./search-bar.page.scss"]
})
export class SearchBarPage implements OnInit {

  textoBuscar: string = '';
  albums: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes => {
      console.log(albumes)
      this.albums = albumes;
    })
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
