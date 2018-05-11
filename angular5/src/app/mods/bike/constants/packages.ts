import { Package } from "../models/package";

export const packages:Package[] = [
    {id:1, code:"pack1", name:"Paquete de 6 Sticker 4 grandes y 2 pequeños", price: 35000, enabled:true , selected:'btn-outline-dark' },
    {id:2, code:"pack2", name:"Paquete de 6 Sticker + Sticker para Movil"  , price: 50000, enabled:false, selected:'btn-outline-dark' },
    {id:3, code:"pack3", name:"6 Sticker + Movil + Sticker Protector"      , price: 60000, enabled:false, selected:'btn-outline-dark' }
];
