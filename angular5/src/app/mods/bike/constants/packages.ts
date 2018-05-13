import { VisualPackage } from "../models/visual-package";

export const packages:VisualPackage[] = [
    {id:1, code:"pack1-6s-4g-2p", name:"Paquete de 6 Sticker", detail:"4 Grandes y 2 Pequeños", price: 30000, enabled:true , selected:'btn-outline-dark' },
    {id:2, code:"pack2-mobile"  , name:"Sticker Mobile"      , detail:"Proximamente"          , price: 50000, enabled:false, selected:'btn-outline-dark' },
    {id:3, code:"pack3-protect" , name:"Sticker Protector"   , detail:"Proximamente"          , price: 60000, enabled:false, selected:'btn-outline-dark' }
];
