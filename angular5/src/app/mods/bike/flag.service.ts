import { Injectable } from '@angular/core';
import { Flag } from './flag';
import { environment } from '../../../environments/environment';

@Injectable()
export class FlagService {

  constructor() { }

  public getFlags() {
    return [
      {id:1001,code:"AD",name:"Andorra"},
      {id:1002,code:"AE",name:"Emiratos Árabes Unidos"},
      {id:1003,code:"AF",name:"Afganistán"},
      {id:1004,code:"AG",name:"Antigua y Barbuda"},
      {id:1005,code:"AI",name:"Anguila"},
      {id:1006,code:"AL",name:"Albania"},
      {id:1007,code:"AM",name:"Armenia"},
      {id:1008,code:"AO",name:"Angola"},
      {id:1009,code:"AQ",name:"Antártida"},
      {id:1010,code:"AR",name:"Argentina"},
      {id:1011,code:"AS",name:"Samoa Americana"},
      {id:1012,code:"AT",name:"Austria"},
      {id:1013,code:"AU",name:"Australia"},
      {id:1014,code:"AW",name:"Aruba"},
      {id:1015,code:"AX",name:"Islas de Áland"},
      {id:1016,code:"AZ",name:"Azerbayán"},
      {id:1017,code:"BA",name:"Bosnia y Herzegovina"},
      {id:1018,code:"BB",name:"Barbados"},
      {id:1019,code:"BD",name:"Bangladesh"},
      {id:1020,code:"BE",name:"Bélgica"},
      {id:1021,code:"BF",name:"Burkina Faso"},
      {id:1022,code:"BG",name:"Bulgaria"},
      {id:1023,code:"BH",name:"Bahrein"},
      {id:1024,code:"BI",name:"Burundi"},
      {id:1025,code:"BJ",name:"Benín"},
      {id:1026,code:"BL",name:"San Bartolomé"},
      {id:1027,code:"BM",name:"Islas Bermudas"},
      {id:1028,code:"BN",name:"Brunái"},
      {id:1029,code:"BO",name:"Bolivia"},
      {id:1030,code:"BQ",name:"Paises Bajos del Caribe"},
      {id:1031,code:"BR",name:"Brasil"},
      {id:1032,code:"BS",name:"Bahamas"},
      {id:1033,code:"BT",name:"Bhután"},
      {id:1034,code:"BV",name:"Isla Bouvet"},
      {id:1035,code:"BW",name:"Botsuana"},
      {id:1036,code:"BY",name:"Bielorrusia"},
      {id:1037,code:"BZ",name:"Belice"},
      {id:1038,code:"CA",name:"Canadá"},
      {id:1039,code:"CC",name:"Islas Cocos (Keeling)"},
      {id:1040,code:"CD",name:"Congo"},
      {id:1041,code:"CF",name:"República Centroafricana"},
      {id:1042,code:"CG",name:"Congo"},
      {id:1043,code:"CH",name:"Suiza"},
      {id:1044,code:"CI",name:"Costa de Marfil"},
      {id:1045,code:"CK",name:"Islas Cook"},
      {id:1046,code:"CL",name:"Chile"},
      {id:1047,code:"CM",name:"Camerún"},
      {id:1048,code:"CN",name:"China"},
      {id:1049,code:"CO",name:"Colombia"},
      {id:1050,code:"CR",name:"Costa Rica"},
      {id:1051,code:"CU",name:"Cuba"},
      {id:1052,code:"CV",name:"Cabo Verde"},
      {id:1053,code:"CW",name:"Curaçao"},
      {id:1054,code:"CX",name:"Isla de Navidad"},
      {id:1055,code:"CY",name:"Chipre"},
      {id:1056,code:"CZ",name:"República Checa"},
      {id:1057,code:"DE",name:"Alemania"},
      {id:1058,code:"DJ",name:"Yibuti"},
      {id:1059,code:"DK",name:"Dinamarca"},
      {id:1060,code:"DM",name:"Dominica"},
      {id:1061,code:"DO",name:"República Dominicana"},
      {id:1062,code:"DZ",name:"Algeria"},
      {id:1063,code:"EC",name:"Ecuador"},
      {id:1064,code:"EE",name:"Estonia"},
      {id:1065,code:"EG",name:"Egipto"},
      {id:1066,code:"EH",name:"Sahara Occidental"},
      {id:1067,code:"ER",name:"Eritrea"},
      {id:1068,code:"ES",name:"España"},
      {id:1069,code:"ET",name:"Etiopía"},
      {id:1070,code:"FI",name:"Finlandia"},
      {id:1071,code:"FJ",name:"Fiyi"},
      {id:1072,code:"FK",name:"Islas Malvinas"},
      {id:1073,code:"FM",name:"Micronesia"},
      {id:1074,code:"FO",name:"Islas Feroe"},
      {id:1075,code:"FR",name:"Francia"},
      {id:1076,code:"GA",name:"Gabón"},
      {id:1077,code:"GB-ENG",name:"Inglaterra"},
      {id:1078,code:"GB-NIR",name:"Irlanda del Norte"},
      {id:1079,code:"GB-SCT",name:"Escocia"},
      {id:1080,code:"GB-WLS",name:"Gales"},
      {id:1081,code:"GB",name:"Reino Unido"},
      {id:1082,code:"GD",name:"Granada"},
      {id:1083,code:"GE",name:"Georgia"},
      {id:1084,code:"GF",name:"Guayana Francesa"},
      {id:1085,code:"GG",name:"Guernsey"},
      {id:1086,code:"GH",name:"Ghana"},
      {id:1087,code:"GI",name:"Gibraltar"},
      {id:1088,code:"GL",name:"Groenlandia"},
      {id:1089,code:"GM",name:"Gambia"},
      {id:1090,code:"GN",name:"Guinea"},
      {id:1091,code:"GP",name:"Guadalupe"},
      {id:1092,code:"GQ",name:"Guinea Ecuatorial"},
      {id:1093,code:"GR",name:"Grecia"},
      {id:1094,code:"GS",name:"Islas Georgias del Sur y Sandwich del Sur"},
      {id:1095,code:"GT",name:"Guatemala"},
      {id:1096,code:"GU",name:"Guam"},
      {id:1097,code:"GW",name:"Guinea-Bissau"},
      {id:1098,code:"GY",name:"Guyana"},
      {id:1099,code:"HK",name:"Hong kong"},
      {id:1100,code:"HM",name:"Islas Heard y McDonald"},
      {id:1101,code:"HN",name:"Honduras"},
      {id:1102,code:"HR",name:"Croacia"},
      {id:1103,code:"HT",name:"Haití"},
      {id:1104,code:"HU",name:"Hungría"},
      {id:1105,code:"ID",name:"Indonesia"},
      {id:1106,code:"IE",name:"Irlanda"},
      {id:1107,code:"IL",name:"Israel"},
      {id:1108,code:"IM",name:"Isla de Man"},
      {id:1109,code:"IN",name:"India"},
      {id:1110,code:"IO",name:"Territorio Británico del Océano Índico"},
      {id:1111,code:"IQ",name:"Irak"},
      {id:1112,code:"IR",name:"Irán"},
      {id:1113,code:"IS",name:"Islandia"},
      {id:1114,code:"IT",name:"Italia"},
      {id:1115,code:"JE",name:"Jersey"},
      {id:1116,code:"JM",name:"Jamaica"},
      {id:1117,code:"JO",name:"Jordania"},
      {id:1118,code:"JP",name:"Japón"},
      {id:1119,code:"KE",name:"Kenia"},
      {id:1120,code:"KG",name:"Kirgizstán"},
      {id:1121,code:"KH",name:"Camboya"},
      {id:1122,code:"KI",name:"Kiribati"},
      {id:1123,code:"KM",name:"Comoras"},
      {id:1124,code:"KN",name:"San Cristóbal y Nieves"},
      {id:1125,code:"KP",name:"Corea del Norte"},
      {id:1126,code:"KR",name:"Corea del Sur"},
      {id:1127,code:"KW",name:"Kuwait"},
      {id:1128,code:"KY",name:"Islas Caimán"},
      {id:1129,code:"KZ",name:"Kazajistán"},
      {id:1130,code:"LA",name:"Laos"},
      {id:1131,code:"LB",name:"Líbano"},
      {id:1132,code:"LC",name:"Santa Lucía"},
      {id:1133,code:"LI",name:"Liechtenstein"},
      {id:1134,code:"LK",name:"Sri lanka"},
      {id:1135,code:"LR",name:"Liberia"},
      {id:1136,code:"LS",name:"Lesoto"},
      {id:1137,code:"LT",name:"Lituania"},
      {id:1138,code:"LU",name:"Luxemburgo"},
      {id:1139,code:"LV",name:"Letonia"},
      {id:1140,code:"LY",name:"Libia"},
      {id:1141,code:"MA",name:"Marruecos"},
      {id:1142,code:"MC",name:"Mónaco"},
      {id:1143,code:"MD",name:"Moldavia"},
      {id:1144,code:"ME",name:"Montenegro"},
      {id:1145,code:"MF",name:"San Martín (Francia)"},
      {id:1146,code:"MG",name:"Madagascar"},
      {id:1147,code:"MH",name:"Islas Marshall"},
      {id:1148,code:"MK",name:"Macedónia"},
      {id:1149,code:"ML",name:"Mali"},
      {id:1150,code:"MM",name:"Birmania"},
      {id:1151,code:"MN",name:"Mongolia"},
      {id:1152,code:"MO",name:"Macao"},
      {id:1153,code:"MP",name:"Islas Marianas del Norte"},
      {id:1154,code:"MQ",name:"Martinica"},
      {id:1155,code:"MR",name:"Mauritania"},
      {id:1156,code:"MS",name:"Montserrat"},
      {id:1157,code:"MT",name:"Malta"},
      {id:1158,code:"MU",name:"Mauricio"},
      {id:1159,code:"MV",name:"Islas Maldivas"},
      {id:1160,code:"MW",name:"Malawi"},
      {id:1161,code:"MX",name:"México"},
      {id:1162,code:"MY",name:"Malasia"},
      {id:1163,code:"MZ",name:"Mozambique"},
      {id:1164,code:"NA",name:"Namibia"},
      {id:1165,code:"NC",name:"Nueva Caledonia"},
      {id:1166,code:"NE",name:"Niger"},
      {id:1167,code:"NF",name:"Isla Norfolk"},
      {id:1168,code:"NG",name:"Nigeria"},
      {id:1169,code:"NI",name:"Nicaragua"},
      {id:1170,code:"NL",name:"Países Bajos"},
      {id:1171,code:"NO",name:"Noruega"},
      {id:1172,code:"NP",name:"Nepal"},
      {id:1173,code:"NR",name:"Nauru"},
      {id:1174,code:"NU",name:"Niue"},
      {id:1175,code:"NZ",name:"Nueva Zelanda"},
      {id:1176,code:"OM",name:"Omán"},
      {id:1177,code:"PA",name:"Panamá"},
      {id:1178,code:"PE",name:"Perú"},
      {id:1179,code:"PF",name:"Polinesia Francesa"},
      {id:1180,code:"PG",name:"Papúa Nueva Guinea"},
      {id:1181,code:"PH",name:"Filipinas"},
      {id:1182,code:"PK",name:"Pakistán"},
      {id:1183,code:"PL",name:"Polonia"},
      {id:1184,code:"PM",name:"San Pedro y Miquelón"},
      {id:1185,code:"PN",name:"Islas Pitcairn"},
      {id:1186,code:"PR",name:"Puerto Rico"},
      {id:1187,code:"PS",name:"Palestina"},
      {id:1188,code:"PT",name:"Portugal"},
      {id:1189,code:"PW",name:"Palau"},
      {id:1190,code:"PY",name:"Paraguay"},
      {id:1191,code:"QA",name:"Qatar"},
      {id:1192,code:"RE",name:"Reunión"},
      {id:1193,code:"RO",name:"Rumanía"},
      {id:1194,code:"RS",name:"Serbia"},
      {id:1195,code:"RU",name:"Rusia"},
      {id:1196,code:"RW",name:"Ruanda"},
      {id:1197,code:"SA",name:"Arabia Saudita"},
      {id:1198,code:"SB",name:"Islas Salomón"},
      {id:1199,code:"SC",name:"Seychelles"},
      {id:1200,code:"SD",name:"Sudán"},
      {id:1201,code:"SE",name:"Suecia"},
      {id:1202,code:"SG",name:"Singapur"},
      {id:1203,code:"SH",name:"Santa Elena"},
      {id:1204,code:"SI",name:"Eslovenia"},
      {id:1205,code:"SJ",name:"Svalbard y Jan Mayen"},
      {id:1206,code:"SK",name:"Eslovaquia"},
      {id:1207,code:"SL",name:"Sierra Leona"},
      {id:1208,code:"SM",name:"San Marino"},
      {id:1209,code:"SN",name:"Senegal"},
      {id:1210,code:"SO",name:"Somalia"},
      {id:1211,code:"SR",name:"Surinám"},
      {id:1212,code:"SS",name:"Sudán del Sur"},
      {id:1213,code:"ST",name:"Santo Tomé y Príncipe"},
      {id:1214,code:"SV",name:"El Salvador"},
      {id:1215,code:"SX",name:"Islas de San Martín (Paises Bajos)"},
      {id:1216,code:"SY",name:"Siria"},
      {id:1217,code:"SZ",name:"Swazilandia"},
      {id:1218,code:"TC",name:"Islas Turcas y Caicos"},
      {id:1219,code:"TD",name:"Chad"},
      {id:1220,code:"TF",name:"Territorios Australes y Antárticas Franceses"},
      {id:1221,code:"TG",name:"Togo"},
      {id:1222,code:"TH",name:"Tailandia"},
      {id:1223,code:"TJ",name:"Tadjikistán"},
      {id:1224,code:"TK",name:"Tokelau"},
      {id:1225,code:"TL",name:"Timor Oriental"},
      {id:1226,code:"TM",name:"Turkmenistán"},
      {id:1227,code:"TN",name:"Tunez"},
      {id:1228,code:"TO",name:"Tonga"},
      {id:1229,code:"TR",name:"Turquía"},
      {id:1230,code:"TT",name:"Trinidad y Tobago"},
      {id:1231,code:"TV",name:"Tuvalu"},
      {id:1232,code:"TW",name:"Taiwán"},
      {id:1233,code:"TZ",name:"Tanzania"},
      {id:1234,code:"UA",name:"Ucrania"},
      {id:1235,code:"UG",name:"Uganda"},
      {id:1236,code:"UM",name:"Islas Ultramarinas Menores de Estados Unidos"},
      {id:1237,code:"US",name:"Estados Unidos de América"},
      {id:1238,code:"UY",name:"Uruguay"},
      {id:1239,code:"UZ",name:"Uzbekistán"},
      {id:1240,code:"VA",name:"Ciudad del Vaticano"},
      {id:1241,code:"VC",name:"San Vicente y las Granadinas"},
      {id:1242,code:"VE",name:"Venezuela"},
      {id:1243,code:"VG",name:"Islas Vírgenes Británicas"},
      {id:1244,code:"VI",name:"Islas Vírgenes de los Estados Unidos"},
      {id:1245,code:"VN",name:"Vietnam"},
      {id:1246,code:"VU",name:"Vanuatu"},
      {id:1247,code:"WF",name:"Wallis y Futuna"},
      {id:1248,code:"XK",name:"Kósovo"},
      {id:1249,code:"WS",name:"Samoa"},
      {id:1250,code:"YE",name:"Yemen"},
      {id:1251,code:"YT",name:"Mayotte"},
      {id:1252,code:"ZA",name:"Sudáfrica"},
      {id:1253,code:"ZM",name:"Zambia"},
      {id:1254,code:"ZW",name:"Zimbabue"}
    ];
  }

  filterFlags(query:string = null) {
    var q = query.trim().toLowerCase();
    var flags = this.getFlags();
    if (q==null || q=='') return flags;
    var filteredFlags:Flag[] = [];
    for(let flag of flags) {
      if (flag.name.toLowerCase().includes(q)) {
        filteredFlags.push(flag);
      }
    }
    return filteredFlags;
  }

  flagPath(flag:Flag) {
    if (flag==null) return '';
    return environment.root + '/assets/country-flags/svg/' + flag.code.toLowerCase() + '.svg';
  }
}
