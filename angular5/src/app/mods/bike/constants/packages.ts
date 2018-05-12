import { Package } from "../models/package";

export const packages:Package[] = [
    {id:1, code:"pack1", name:"Paquete de 6 Sticker", detail:"4 Grandes y 2 Pequeños", price: 30000, enabled:true , selected:'btn-outline-dark' },
    {id:2, code:"pack2", name:"Sticker Mobile"      , detail:"Proximamente"          , price: 50000, enabled:false, selected:'btn-outline-dark' },
    {id:3, code:"pack3", name:"Sticker Protector"   , detail:"Proximamente"          , price: 60000, enabled:false, selected:'btn-outline-dark' }
];
