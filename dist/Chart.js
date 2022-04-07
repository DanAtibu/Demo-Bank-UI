let AgentAccountStatisticBAR = document.getElementById('sidebarContainerOptionSingleAgentAccount_Statistic_Bar_')
let AgentAccountStatisticLINE = document.getElementById('sidebarContainerOptionSingleAgentAccount_Statistic_Line_')
let AgentAccountStatisticCAN = document.querySelectorAll('.statisticField_ContentDiv_div div canvas')
let mainCanvas = document.querySelectorAll('#mainCanvas')
let clientCanvas = document.querySelector('.ChartClient_ div canvas')

for(let i of AgentAccountStatisticCAN ) {
    new Chart( i , {
        type : 'line' ,
        data : {
            labels : ['DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT'] ,
            datasets : [{
                label : "TRANSACTIONS / ANNEE " ,
                data : [ 453 , 222 , 334 , 60 ] ,
                backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
                borderColor : "rgb(255 , 99 , 132 )"
            },{
                label : "TRANSACTIONS / MOIS" ,
                data : [ 120 , 200 , 30 , 20 ] ,
                backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
                borderColor : "rgb(255 , 99 , 132 )"
            }]
        }
    })
}


let MAIN_CANVAS = new Chart( mainCanvas , {
    type : 'line' ,
    data : {
        labels : ['DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT' , 'DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT'] ,
        datasets : [{
            label : "TRANSACTIONS / ANNEE " ,
            data : [ 453 , 222 , 334 , 60 , 453 , 222 , 334 , 60 ] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )"
        }]
    }
})



new Chart( AgentAccountStatisticBAR , {
    type : 'bar' ,
    data : {
        labels : ['DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT'] ,
        datasets : [{
            label : "TRANSACTIONS / ANNEE " ,
            data : [ 453 , 222 , 334 , 60 ] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )"
        },{
            label : "TRANSACTIONS / MOIS" ,
            data : [ 120 , 200 , 30 , 20 ] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )"
        }]
    }
})


let LINE = new Chart( AgentAccountStatisticLINE , {
    type : 'line' ,
    data : {
        labels : ['PEL' , 'PPH' , 'PEA' , 'PTV' , 'PCX' , 'PLY' , 'PES' , 'PSC'] ,
        datasets : [{
            label : "ANNEE",
            data : [ 453 , 120 , 200 , 222 , 334 , 60 , 150 , 180] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )" ,
            borderWidth : 5,
            tension: 0.3,
            fill: false
        },{
            label : "MOIS" ,
            data : [ 333 , 256 , 440 , 111 , 450 , 80 , 280 , 30] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "#4f8bc3" ,
            borderWidth : 5,
            tension: 0.3,
            fill: false
        },{
            label : "SEMAINE" ,
            data : [ 490 , 400 , 350 , 250 , 300 , 200 , 100 , 420] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "#bbb352" ,
            borderWidth : 5,
            tension: 0.3,
            fill: false
        },{
            label : "JOUR" ,
            data : [ 50 , 140 , 230 , 410 , 170 , 330 , 90 , 210] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "#ab0008" ,
            borderWidth : 5,
            tension: 0.3,
            fill: false
        }]
    }
})
LINE.options.elements.point.radius = 5;
// MAIN_CANVAS.options.elements.point.radius = 100;

// LINE.options.elements.point.borderWidth = 10;



new Chart( clientCanvas , {
    type : 'bar' ,
    data : {
        labels : ['DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT'] ,
        datasets : [{
            label : "TRANSACTIONS / ANNEE " ,
            data : [ 453 , 222 , 334 , 60 ] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )"
        },{
            label : "TRANSACTIONS / MOIS" ,
            data : [ 120 , 200 , 30 , 20 ] ,
            backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
            borderColor : "rgb(255 , 99 , 132 )"
        }]
    }
})




