export class Reserve{
    noOfTickets:number;
    price:number;
    movieName:string;
    movieInfo:string;
    movieDesc:string;
    movieImg:string;
    location:string;
    theatreName:string;
    showTime:string;
    date:string;
    constructor(nooftickets:number,Price:number,moviename:string,movieinfo:string,moviedesc:string,movieimg:string,loc:string,thea:string,date:string,show:string){
        this.noOfTickets=nooftickets;
        this.price=Price;
        this.movieName=moviename;
        this.movieInfo=movieinfo;
        this.movieDesc=moviedesc;
        this.movieImg=movieimg;
        this.location=loc;
        this.theatreName=thea;
        this.date=date;
        this.showTime=show;
    }
}