import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Position } from './data/position';
import { NgForm } from '@angular/forms';
import { PositionService } from './data/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styles: []
})


export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private p: PositionService,private ar: ActivatedRoute) {
     
   }

  ngOnInit() {
    this.paramSubscription = this.ar.params.subscribe(params => {
   
      this.positionSubscription = this.p.getPosition(params['_id']).subscribe(posData => {
        this.position = posData[0];
      });
    });
  }


  onSubmit(f: NgForm): void{
    this.savePositionSubscription = this.p.savePosition(this.position).subscribe(() => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500)
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });

  }


  ngOnDestroy(){
    if(this.paramSubscription) {this.paramSubscription.unsubscribe();}
  if(this.positionSubscription){this.positionSubscription.unsubscribe();} 
  if(this.savePositionSubscription){this.savePositionSubscription.unsubscribe();}


  }
}
