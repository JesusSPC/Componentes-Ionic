import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const input = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Subtitle',
      message: 'Esto es un mensaje de alerta.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón cancelar');
          }
        },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await input.present();
  }

  async cambiarAlerta() {
    const alert = await this.alertCtrl.create({
      header: 'Cambiar cabecera',
      inputs: [
        {
          name: 'texto',
          type: 'text',
          placeholder: 'Nuevo nombre...'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (texto) => {
            this.titulo = texto.texto;
          }
        }
      ]
    })
    await alert.present();
  }
}
