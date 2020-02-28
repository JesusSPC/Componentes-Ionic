import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";
import { IonList } from '@ionic/angular';

@Component({
  selector: "app-lista",
  templateUrl: "./lista.page.html",
  styleUrls: ["./lista.page.scss"]
})
export class ListaPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user){
   console.log(user)
   this.lista.closeSlidingItems();
  }

  share(user){
   console.log(user)
   this.lista.closeSlidingItems();
  }

  borrar(user){
   console.log(user)
   this.lista.closeSlidingItems();
  }

}
