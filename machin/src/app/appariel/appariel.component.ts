import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appreil.service';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.css']
})
export class ApparielComponent implements OnInit {

  @Input() appareilName: String;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
