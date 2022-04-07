class MOTHER_CLS {
    constructor () {
        this.AJAX_LIST = Array();
    }
    AJAX = ( Function_ ) => {this.AJAX_LIST.push( Function_.bind( this ) )}
}

class AppMenuSelector_0 extends MOTHER_CLS {
    constructor ( setElement , setDiv , typeElement = [] , activeClass = "activeNavElement") {
        super()
        this.optionsNav = document.querySelectorAll( "." + setElement );
        this.optionsDiv = document.querySelectorAll( "." + setDiv );
        this.avoidTypeElement = typeElement;
        this.activeClass = activeClass;
        this.hidden = "invisibleDiv";
        this.activeTab = undefined;
        this.addEvent()
    }
    CleanScreen ( Contenair ) {
        let isModal = Contenair.parentElement.parentElement.getAttribute('ismodal');
        if ( !isModal ) { Modal.CANSEL_ALL_MODAL(); DropBox.CANSEL_ALL_DROPBOX(); }
    }
    Process ( Item , Contenair ) {
        for ( let I of this.optionsNav ) { I.classList.remove( this.activeClass );}
        Item.classList.add( this.activeClass )
        // ===================================================================================
        for ( let I of this.optionsDiv ) { I.classList.add( this.hidden );}
        Contenair.classList.remove( this.hidden )
        this.activeTab = Contenair;
        this.CleanScreen( Contenair )
    }
    addEvent () {
        this.optionsNav.forEach( (Item) => {
            Item.onclick = ( Event ) => {
                Event.preventDefault()
                Item = Event.target
                this.avoidTypeElement.includes(Item.tagName) ? Item = Item.parentElement : null
                this.Process( Item , document.getElementById( "#" + Item.id ) )
            }
        })
    }
}


class AppMenuSelector_1 extends AppMenuSelector_0 {
     Process ( Item , Contenair ) {
        for ( let I of this.optionsNav ) { I.classList.remove( this.activeClass );}
        Contenair.classList.toggle(this.hidden)
        Item.classList.toggle(this.activeClass)
        this.CleanScreen( Contenair )
     }
    }

// ===================================== ALL SINGLE MODAL ==================================================
class Modal extends MOTHER_CLS {
    // static MODALLIST = document.querySelectorAll('.ModalAreaContent');
    static MODALLIST = Array();
    static MODALLIST_ACTIVE = Array();
    static SHOW = 'invisibleDiv';
    constructor ( EndPoint , Modal_ , onclick = false , ondblclick = false , oncontextmenu = false ) {
        super()
        this.EndPoint = EndPoint instanceof Array ? EndPoint : this.ENDPOINTLIST( EndPoint );
        this.Modal = document.getElementById(Modal_);
        this.Modal.setAttribute('isModal' , true);


        this.ClSBUTTON = this.Modal.querySelector('.ModalCanselButton');
        this.ClSBUTTON.onclick = this.CLOSE;

        this.AJAX_LIST_OPEN = Array();
        this.AJAX_LIST_CLOSE = Array();

        this.onclick = onclick;
        this.ondblclick = ondblclick;
        this.oncontextmenu = oncontextmenu;
        this.PROCESS();

        this.LAST_USED_ENDPOINT = null;
        Modal.MODALLIST.push(this);
    }
    ENDPOINTLIST ( EndPoint ) {
        if ( EndPoint instanceof NodeList ) { EndPoint = Array.from( EndPoint ); }
        else if ( EndPoint instanceof Array ) { null }
        else { EndPoint = Array.from( document.querySelectorAll( EndPoint ) ) ; }
        return EndPoint
    }
    PROCESS () {
        for ( let EndP of this.EndPoint ) {
            this.ondblclick ? EndP.ondblclick = this.ACTION : this.onclick ? EndP.onclick = this.ACTION : EndP.oncontextmenu = this.ACTION;
    } }
    static CANSEL_ALL_MODAL = () => {
        Modal.MODALLIST_ACTIVE.forEach( ( Modal_ ) => { Modal_.classList.add( Modal.SHOW ); } );
        Modal.MODALLIST_ACTIVE = [];
    }
    DISPLAY = ( Event , ModalClose = true , DropBoxClose = true ) => {
        Event.preventDefault()
        ModalClose ? Modal.CANSEL_ALL_MODAL() : undefined; // CLEAN ALL ACTIVE MODAL
        DropBoxClose ? DropBox.CANSEL_ALL_DROPBOX() : undefined; // CLEAN ALL ACTIVE DROPBOX
        this.Modal.classList.remove( Modal.SHOW );
        Modal.MODALLIST_ACTIVE.push( this.Modal );
        for ( let Fun of this.AJAX_LIST_OPEN ){ Fun(Event); }
    }
    CLOSE = ( Event , ModalClose = false , DropBoxClose = false ) => {
        ModalClose ? Modal.CANSEL_ALL_MODAL() : this.Modal.classList.add( Modal.SHOW );; // CLEAN ALL ACTIVE MODAL
        DropBoxClose ? DropBox.CANSEL_ALL_DROPBOX() : undefined; // CLEAN ALL ACTIVE DROPBOX
        for ( let Fun of this.AJAX_LIST_CLOSE ){
            let _ = Fun.bind( this );
            _(Event);
            console.log( _ )
        }
    }
    ACTION = ( Event ) => {
        this.DISPLAY( Event )
        this.LAST_USED_ENDPOINT = Event.target;
    }
    MODAL_OPEN = ( Function_ ) => {
        let _ = Function_.bind( this );
        this.AJAX_LIST_OPEN.push( _ );
        // console.log( _ );
    }
    MODAL_CLOSE = ( Function_ ) => {
        let _ = Function_.bind( this );
        this.AJAX_LIST_CLOSE.push( _ );
        // console.log( _ );
    }
    ADD_ENDPOINT ( Element , ondblclick = false ) {
        this.ondblclick ? Element.ondblclick = this.ACTION : Element.onclick = this.ACTION
        this.EndPoint.push( Element );
    }
}
const GlobalModalIGM = new Modal( Array() , 'GlobalDivImageModal' , true );
// =================================== [ DROPBOX ] ===================================
class DropBox extends MOTHER_CLS { 
    static ActiveList = Array();
    constructor ( BtnId ) {
        super()
        this.BtnId = BtnId;
        this.Button = document.getElementById(this.BtnId);
        this.DropBox = document.getElementById( "#" + this.BtnId )
        this.Process()
    }
    static CANSEL_ALL_DROPBOX = () => {
        DropBox.ActiveList.forEach( ( DropBox ) => DropBox.classList.add('invisibleDiv') );
        DropBox.ActiveList = [];
        // Modal.CANSEL_ALL_MODAL()
    }
    Process () {
        this.Button.onclick = ( Event ) => {
            let There = this.DropBox.classList.toggle('invisibleDiv');
            if (There) {
                // THE DROPBOX IS NOT ACTIVE
                DropBox.CANSEL_ALL_DROPBOX();
            } else {
                DropBox.CANSEL_ALL_DROPBOX();
                DropBox.ActiveList.push( this.DropBox );
            }
        }
    }
};

// =================================== [ CHAT CLASS ] ===================================
const SOCKET_IO = undefined;
const CLICKED_PROFILS = Array()
const SEND_BUTTON = document.getElementById('ChatFormMessageButton');
const MSG_INPUT = document.getElementById('ChatFormMessageInput');
const AREA_MSG = document.getElementById('ChatDiscussionDivArea_MsgContent');
const AREA_CONTACT = document.querySelector('.ItemContactList')

const CURRENT_USER_UI = document.getElementById('ChatDiscussionDivArea_Contacts_Name');
const CURRENT_USER_ONLINE_UI = document.getElementById('OnlineColorStatus');

class UI {
    static ONLINE_STATIS_CHANGE ( STS = false) {
        CURRENT_USER_ONLINE_UI.classList = "";
        CURRENT_USER_ONLINE_UI.classList.add( STS ? 'GreenCircle' : 'RedCircle' )
    }
}

class CONTACT extends MOTHER_CLS {
    static SCROLLTOBOTTOM () { AREA_MSG.scrollTop = AREA_MSG.scrollHeight; }
    static CONTACT_LIST = new Set();
    static ACTIVE_CONTACT;
    constructor ( ELEMENT ) {
        super()
        this.ELEMENT = ELEMENT;
        this.NAME_ = ELEMENT.getElementsByClassName('ItemContactName')[0];
        this.MSG_ = ELEMENT.getElementsByClassName('ItemContactMsg')[0];
        this.MOMENT_ = ELEMENT.getElementsByClassName('ItemContactMsgMoment')[0];
        this.NBRMSG_ = ELEMENT.getElementsByClassName('ItemContactMsgNbr')[0];
        this.PROFIL = ELEMENT.getElementsByTagName('img')[0];

        this.ONLINE = null;
        this.ID = ELEMENT.id;
        this.NAME = this.NAME_.innerText;
        this.LAST_TIME_MSG = this.MOMENT_.innerText;
        this.NBRMSG = parseInt( this.NBRMSG_.innerText )

        // this.IN_MSG_LIST = Array();
        // this.OUT_MSG_LIST = Array();
        this.LIST_MSG = Array();

        this.ELEMENT.onclick = this.CLICKED;
        this.ELEMENT.ondblclick = this.DELETE;
        CONTACT.CONTACT_LIST.add( this )
    }
    static SEACH = function ( CODE ) {
        for (let E of CONTACT.CONTACT_LIST) {
            if (E.ID === CODE) return E;
        }
    }
    static START = function () {
        document.querySelectorAll('.ItemContact').forEach( ( OBJ ) => {
            new CONTACT( OBJ );
            UI.ONLINE_STATIS_CHANGE()
        })
    }
    CLICKED = () => {
        // console.log( "CLICK " , this.onclick , this.ondblclick)
        CURRENT_USER_UI.innerText = this.NAME;
        UI.ONLINE_STATIS_CHANGE( true );
        AREA_MSG.setAttribute('contact' , this.ID)
        CONTACT.ACTIVE_CONTACT = this;
        // SUPPL FUNCTIONS
        for ( let Fun of this.AJAX_LIST ){ Fun(); }
    }
    DELETE = () => {
        delete this;
        CONTACT.CONTACT_LIST.delete( this );
        this.ELEMENT.remove();
        if ( AREA_MSG.getAttribute('contact') === this.ID ) {
            let CTCT = CONTACT.SEACH( AREA_CONTACT.firstElementChild.id  )
            CTCT.RETREIVE_MSG()
            CURRENT_USER_UI.innerText = CTCT.NAME;
        }
    }
    RETREIVE_MSG = () => {
        // AJAX TO DJANGO ...
        let MessageList = Array();
        // MessageList.push()
        if ( MessageList.length ) AREA_MSG.innerHTML = "";
        console.log( "RETREIVED ..." )
        MessageList.forEach( ( Msg ) => {Msg.In ? INCOMING_MSG(Msg) : OUTCOME_MSG(Msg);} )
        return MessageList;
    }
    INCOMING_MSG ( MSG ) {
        this.MSG_.innerText = MSG.MESSAGE;
        this.MOMENT_ = MSG.TIME;
        if ( CONTACT.ACTIVE_CONTACT !== this ) {
            this.NBRMSG += 1;
            this.NBRMSG_.innerText = this.NBRMSG;
        }
        this.ADD_ON_CONTENT_MSG( MSG )
        // this.IN_MSG_LIST.push( MSG )
        this.LIST_MSG.push( MSG )
    }
    OUTCOME_MSG ( MSG ) {
        this.ADD_ON_CONTENT_MSG( MSG , false )
        // this.OUT_MSG_LIST.push( MSG )
        this.LIST_MSG.push( MSG )
    }
    ADD_ON_CONTENT_MSG ( MSG , IN = true ) {
        let CONT = `
            <div>
                <p>
                    ${MSG.MESSAGE}
                </p>
                <span>${MSG.TIME}</span>
            </div>
        `
        let MSG_DIV = document.createElement('div');
        MSG_DIV.classList.add( IN ? 'InSideMessage' : 'OutSideMessage' );
        AREA_MSG.appendChild( MSG_DIV )
        CONTACT.SCROLLTOBOTTOM()
    }

}
CONTACT.START()
// ============================ SCROLL CLICKED CLASS ======================================

class ScrollClick extends MOTHER_CLS {
    constructor ( Contenair , BtnRight , BtnLeft , Size = 300 ) {
        super()
        this.BtnRight = document.querySelectorAll( BtnRight )
        this.BtnLeft = document.querySelectorAll( BtnLeft )
        this.Contenair = document.getElementById(Contenair)
        this.Size = Size;
        this.Process()
    }
    Process = () => {
        
        this.BtnRight.forEach( ( Element ) => {
            Element.onclick = ( Event ) => {this.Contenair.scrollLeft += this.Size;}
        })        
        this.BtnLeft.forEach( ( Element ) => {
            Element.onclick = ( Event  ) => {this.Contenair.scrollLeft -= this.Size;}
        })

    }
}

// ============================ CLEAN ALL MODAL THROUGTH CLOSE BUTTON ======================================

const A_E_0 = "activeNavElement_0";
const A_E_1 = "activeNavElement_1";
const A_E_2 = "activeNavElement_2";
const A_E_3 = "activeNavElement_3";
const A_E_4 = "activeNavElement_4";

const modelDataTableObject = {
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
            // zeroRecords : undefined,
            oPaginate : {   
                            // sNext : 'Next' ,
                            sNext : '<i class="nvgbtn next fas fa-arrow-circle-right"></i>' ,
                            sPrevious : '<i class="nvgbtn previous fas fa-arrow-circle-left"></i>' ,
                            // sPrevious : 'Previous' ,
                            sFirst : "100" ,
                            sLast : "200"
                        }
        } ,
        buttons: [
            {
                extend : 'excel' ,
                text : '<i class="fas fa-file-excel"></i><p class="dtb-text">FICHIER EXCEL</p>' ,
                titleAttr  : 'EXCEL' ,
                className : 'btngrn'
            } , {
                extend : 'csv' ,
                text : '<i class="fas fa-file-csv"></i><p class="dtb-text">FICHIER CSV</p>' ,
                titleAttr  : 'CSV' ,
                className : 'btnwrn'
            } ,            {
                extend : 'pdf' ,
                text : '<i class="fas fa-file-pdf"></i><p class="dtb-text">FICHIER PDF</p>' ,
                titleAttr  : 'PDF' ,
                className : 'btndgr'
            } ,            {
                extend : 'print' ,
                text : '<i class="fas fa-print"></i><p class="dtb-text">IMPRIMER</p>' ,
                titleAttr  : 'IMPRIMER' ,
                className : 'btnble'
            } ,            {
                extend : 'copy' ,
                text : '<i class="fas fa-copy"></i><p class="dtb-text">COPIER</p>' ,
                titleAttr  : 'COPIER' ,
                className : 'btndrk'
            }
        ]
}
const TABLE_LIST = {}

$(document).ready(function(){
    // return ;
    let _Tables = $('table')    
    for ( let _Tables_Item of _Tables ) {
        try {
            if ( _Tables_Item.id.trim() != "" ) {
                let Table = $( '#'+ _Tables_Item.id).DataTable( modelDataTableObject )

                TABLE_LIST[ _Tables_Item.id ] = Table;

                let FilterInput = document.getElementById( _Tables_Item.id + "_filter" )
                let currentMainDivContent = document.querySelector('#' + _Tables_Item.id + '_wrapper')
                let ButtonAction = currentMainDivContent.querySelector('.dt-buttons')
                let newMainDivContent = document.createElement('div')
                newMainDivContent.setAttribute('class' , 'HeaderTableDiv')
                newMainDivContent.appendChild( ButtonAction )
                newMainDivContent.appendChild( FilterInput )
                currentMainDivContent.insertBefore( newMainDivContent , currentMainDivContent.firstElementChild )
            }
        } catch (e) { console.log( "Error ..." , e ) }
    }
    document.querySelectorAll("label input[type=search]").forEach(( Element_ ) => {Element_.classList.add("filterInputTable")})
})

// =============================== TOAST JS ===============================
toastr.options = {
  "tapToDismiss": true,
  // "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
for ( let i = 0 ; i < 1 ; i++ ){
    toastr.success('DAN : ' + i, 'Notification Stock');
    toastr.error('DAN : ' + i, 'Notification Stock');
    toastr.info('DAN : ' + i, 'Notification Stock');
    toastr.warning('DAN : ' + i, 'Notification Stock');
}

const GlobalImageModal = document.getElementById("GlobalImageModal");
const OPEN_IMGG = ( Event , Open = false , Url = "" ) => {
    GlobalImageModal.src = Url;
    GlobalModalIGM.DISPLAY( Event , Open );
}