(function () {
    'use-strict';

    var module = angular.module('app');

    module.service('unidadesService', function () {
        this.getUnidadesActivas = function () {
            return unidades;
        }
    });

    //En este ejemplo estamos usando un objeto local
    //Sustituir la función con los métodos http para interactuar con el API
    var unidades = [
        {
            id: 33,
            marca: "CHEVROLET",
            subMarca: "AVEO",
            tipo: "AUTOMATICO",
            modelo: 2018,
            color: "BLANCO",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 40,
            rendimientoMixto: 0,
            placas: "NFH8396",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "3G1TA5CF8JL204842",
            noDeMotor: "3G1TA5CF8JL204842",
            activa: true
        },
        {
            id: 25,
            marca: "CHEVROLET",
            subMarca: "SILVERADO NACIONAL",
            tipo: "PICK UP",
            modelo: 2013,
            color: "BLANCA",
            cilindros: 6,
            combustible: "MAGNA",
            capacidadCombustible: 0,
            rendimientoMixto: 0,
            placas: "KZ87279",
            tipoDePlacas: "CARGA",
            noDeSerie: "3GCNC9CX3DG355367",
            noDeMotor: "3GCNC9CX3DG355367",
            activa: true
        },
        {
            id: 13,
            marca: "CHEVROLET",
            subMarca: "Spark",
            tipo: "Automovil",
            modelo: 2012,
            color: "Blanco",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 35,
            rendimientoMixto: 18,
            placas: "MMT5579",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "",
            noDeMotor: "",
            activa: true
        },
        {
            id: 24,
            marca: "CHEVROLET",
            subMarca: "SPARK",
            tipo: "AUTOMOVIL",
            modelo: 2014,
            color: "BLANCO",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 0,
            rendimientoMixto: 0,
            placas: "MSD7345",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "KL8CJ6ADXEC501202",
            noDeMotor: "KL8CJ6ADXEC501202",
            activa: true
        },
        {
            id: 18,
            marca: "CHEVROLET",
            subMarca: "TORNADO",
            tipo: "CAMIONETA PICKUP",
            modelo: 2013,
            color: "BLANCO",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 2,
            rendimientoMixto: 0,
            placas: "MMZ3144",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "93CCL8003DB167410",
            noDeMotor: "HECHOENBRASIL",
            activa: true
        },
        {
            id: 26,
            marca: "FORD",
            subMarca: "ESCAPE",
            tipo: "AUTOMATICA",
            modelo: 2014,
            color: "PLATA ESTELAR",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 0,
            rendimientoMixto: 0,
            placas: "MSP3513",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "IFMCU0695EUC40467",
            noDeMotor: "IFMCU0695EUC40467",
            activa: true
        },
        {
            id: 32,
            marca: "NISSAN",
            subMarca: "Escape",
            tipo: "Automovil",
            modelo: 2016,
            color: "Azul ",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 0,
            rendimientoMixto: 0,
            placas: "NBA4257",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "0",
            noDeMotor: "0",
            activa: true
        },
        {
            id: 6,
            marca: "NISSAN",
            subMarca: "NP 300",
            tipo: "Camion",
            modelo: 2011,
            color: "Blanco",
            cilindros: 4,
            combustible: "MAGNA",
            capacidadCombustible: 60,
            rendimientoMixto: 0,
            placas: "KY69236",
            tipoDePlacas: "CARGA",
            noDeSerie: "3N6DD25T4BK028848",
            noDeMotor: "KA24504243A",
            activa: true
        },
        {
            id: 27,
            marca: "TOYOTA",
            subMarca: "SUV LE",
            tipo: "RAV4",
            modelo: 2015,
            color: "ROJO",
            cilindros: 4,
            combustible: "PREMIUM",
            capacidadCombustible: 0,
            rendimientoMixto: 0,
            placas: "MTJ1428",
            tipoDePlacas: "PARTICULAR",
            noDeSerie: "2T3ZF4EVFW",
            noDeMotor: "2AR-M762693",
            activa: true
        }
    ];
}());