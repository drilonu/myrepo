import { Component, OnInit } from '@angular/core';

import filmJSON from '../data/example_data1.json';

interface film {
  Year: string | null;
  Length: number | null;
  Title: string | null;
  Subject: string | null;
  Actor: string | null;
  Actress: string | null;
  Director: string | null;
  Popularity: number | null;
  Awards: string | null;
}

@Component({
  selector: 'app-films',
  styleUrls: ['./films.component.css'],
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  constructor() { }

  films: film[] = filmJSON;

  ngOnInit(): void {
  }

}
