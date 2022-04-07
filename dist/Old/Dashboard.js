var modelDataTableObject = {
        dom: 'Bfrtip',
        select: true ,
        language : {
            // pagingType : "full_numbers" ,
            // Search : undefined ,
            sSearch : '' ,
            info : '',
            // lengthMenu : 'marara',
            // infoFiltered : 'ndio' ,
            sProcessing : 'Filter en cours ...' ,
            infoEmpty : 'Aucun Resultat',
            zeroRecords : 'Aucun Resultat',
            oPaginate : {   
                            sNext : 'Next' ,
                            // sNext : '<i class="fas navigationbtndatatable fa-arrow-circle-right"></i>' ,
                            // sPrevious : '<i class="fas navigationbtndatatable fa-arrow-circle-left"></i>' ,
                            sPrevious : 'Previous' ,
                            sFirst : "100" ,
                            sLast : "200"
                        }
        } ,
        buttons: [
            {
                extend : 'excel' ,
                text : '<i class="fas fa-file-excel"></i> FICHIER EXCEL' ,
                titleAttr  : 'EXCEL' ,
                className : 'btndatatable green'
            } , {
                extend : 'csv' ,
                text : '<i class="fas fa-file-csv"></i> FICHIER CSV' ,
                titleAttr  : 'CSV' ,
                className : 'btndatatable yellow'
            } ,            {
                extend : 'pdf' ,
                text : '<i class="fas fa-file-pdf"></i> FICHIER PDF' ,
                titleAttr  : 'PDF' ,
                className : 'btndatatable red'
            } ,            {
                extend : 'print' ,
                text : '<i class="fas fa-print"></i> IMPRIMER' ,
                titleAttr  : 'IMPRIMER' ,
                className : 'btndatatable green'
            } ,            {
                extend : 'copy' ,
                text : '<i class="fas fa-copy"></i> COPIER' ,
                titleAttr  : 'COPIER' ,
                className : 'btndatatable dark'
            }
        ]
}

 
var chartCanvas = document.querySelectorAll('.chart')
chartCanvas.forEach( ( chartElement_ ) => {
        new Chart( chartElement_ , {
            type : 'pie' ,
            data : {
                labels : ['monday' , 'tuesday'] ,
                datasets : [{
                    label : "canvas" ,
                    data : [ 2 , 4 ] ,
                    backgroundColor : [ "#4f8bc3" , "#ab0008" ] ,
                    borderColor : "rgb(255 , 99 , 132 )"
                }]
            }
        })
} )
// ==========================================================================================
        for ( let i = 0 ; i < 2 ; i++ ){
            toastr.success('DAN : ' + i, 'Notification Stock');
            toastr.error('DAN : ' + i, 'Notification Stock');
            toastr.info('DAN : ' + i, 'Notification Stock');
            toastr.warning('DAN : ' + i, 'Notification Stock');
        }
// ==========================================================================================
$(document).ready(function(){
    let _Tables = $('table')    
    for ( let _Tables_Item of _Tables ) {
        try {
            if ( _Tables_Item.id.trim() != "" ) {
                $( '#'+ _Tables_Item.id).DataTable( modelDataTableObject )
                let FilterInput = document.getElementById( _Tables_Item.id + "_filter" )
                let currentMainDivContent = document.querySelector('#' + _Tables_Item.id + '_wrapper')
                let ButtonAction = currentMainDivContent.querySelector('.dt-buttons')
                let newMainDivContent = document.createElement('div')
                newMainDivContent.setAttribute('class' , 'HeaderTableDiv')
                newMainDivContent.appendChild( ButtonAction )
                newMainDivContent.appendChild( FilterInput )
                currentMainDivContent.insertBefore( newMainDivContent , currentMainDivContent.firstElementChild )
                console.log( ButtonAction )
            }
        } catch (e) { console.log( "Error ..." , e ) }
    }
    document.querySelectorAll("label input[type=search]").forEach(( Element_ ) => {Element_.classList.add("filterInputTable")})
})
// ================================================================================================