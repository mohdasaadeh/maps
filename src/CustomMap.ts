export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  popUpMessage(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarkup(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.popUpMessage(),
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
        shouldFocus: false,
      });
    });
  }
}
