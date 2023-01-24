export interface Listing {
    id: number;
    address: string;
    city: number;
    state: string;
    zip: string;
    price: number;
    bathrooms: number;
    bedrooms: number;
    centralHeating: boolean;
    centralCooling: boolean;
    garage: boolean;
    squareFootage: number;
    listingDate: Date;
    status: string;
    schoolArea: string;

    // constructor(id: number,address: string,city: number,state: string,zip: string,price: number,bathrooms: number,bedrooms: number,centralHeating: boolean,centralCooling: boolean,garage: boolean,squareFootage: number,listingDate: Date,status: string,schoolArea: string){
    //         this.id = id;
    //         this.address = address;
    //         this.city = city;
    //         this.state = state;
    //         this.zip = zip;
    //         this.price = price; 
    //         this.bathrooms = bathrooms;
    //         this.bedrooms = bedrooms;
    //         this.centralHeating = centralHeating;
    //         this.centralCooling = centralCooling;
    //         this.garage = garage;
    //         this.squareFootage = squareFootage;
    //         this.listingDate = listingDate;
    //         this.status = status;
    //         this.schoolArea = schoolArea;
    //     }
}
