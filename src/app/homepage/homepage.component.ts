import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('search', {static: false}) searchInput!: ElementRef;

  ngOnInit() {
    initMap();
 }

    
}

declare var google: any; // declare google to avoid TS error

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.409264, lng: 49.867092},
    zoom: 12
  });
}

// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrls: ['./homepage.component.css']
// })
// export class HomepageComponent implements OnInit {
//   @ViewChild('search', {static: false}) searchInput!: ElementRef;
//   @ViewChild('mapContainer', {static: false}) mapContainer!: ElementRef;

//   ngOnInit() {
//     initMap();
//     const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement);

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();
//       if (place.geometry) {
//         const map = new google.maps.Map(this.mapContainer.nativeElement, {
//           center: place.geometry.location,
//           zoom: 15
//         });
//         new google.maps.Marker({
//           position: place.geometry.location,
//           map: map
//         });
//       }
//     });
//   }

//   searchLocation() {
//     const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement);
//     google.maps.event.trigger(autocomplete, 'place_changed');
//   }
// }

// declare var google: any;

// function initMap() {
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 40.409264, lng: 49.867092},
//     zoom: 12
//   });
// }
