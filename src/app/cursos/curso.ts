export class Curso {
    id: number;
    title: string;
    pltaform: string;
    launch_year: number;
    offers_certificate: boolean;
    description: string;
    image: string;
    duration_hours: number;

    public constructor(id:number, title:string, pltaform:string, 
        launch_year:number, offers_certificate:boolean, description:string, 
        image:string, duration_hours:number) {
            
        this.id = id;
        this.title = title;
        this.pltaform = pltaform;
        this.launch_year = launch_year;
        this.offers_certificate = offers_certificate;
        this.description = description;
        this.image = image;
        this.duration_hours = duration_hours;
    }
}
