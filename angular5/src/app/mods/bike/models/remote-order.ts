export class RemoteOrder {
    id:number = 0;
    reference:string = '';
    sticker_flag:string = '';
    sticker_fname:string = '';
    sticker_lname:string = '';
    design_code:string = '';
    design_name:string = '';
    package_code:string = '';
    package_name:string = '';
    price:number = 0;
    status:string = '';
    created_at:Date = null;
    updated_at:Date = null;

    bill_fname:string = '';
    bill_lname:string = '';
    email:string = ''; 
    address:string = ''; 
    phone:string = ''; 
    city:string = ''; 
    state:string = ''; 
    country:string = ''; 
    zip:string = '';
}
