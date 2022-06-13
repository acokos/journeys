import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: any;
  @Input() title: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  } 
  onClick(title: string) {

    let stepId = title.replace(/\s/g, "");

    //this.router.navigate([this.router.url + ('/' + stepId)])

    let journeyId = this.route.snapshot.url[1].path;

    this.router.navigate(['/journeys', journeyId, stepId]);

    //...
  }
}
