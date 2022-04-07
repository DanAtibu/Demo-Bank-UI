new AppMenuSelector_0("sidebarOption","sidebarOptionContentDiv",["SPAN" , "I"],A_E_0)
new AppMenuSelector_0("clientSelectorNavItem","clientSelectorDivItem",[],A_E_0)
new AppMenuSelector_0("Credit_Div_3_Title","Credit_Div_3_ContentDiv",[],A_E_0)
new AppMenuSelector_0("RemplacantsOptionItem","RemplacantsOptionContentDiv",[],A_E_0)
new AppMenuSelector_0("CompteMobileOption","CompteMobileOptionContent",['I'],A_E_2)
new AppMenuSelector_0("sidebarContainerOption","agentField_ContentDiv",['SPAN','I'],A_E_2)
new AppMenuSelector_0("sidebarContainerOptionStatus_Option","sidebarContainerOptionStatus_Div",[],A_E_0)
new AppMenuSelector_0("sidebarContainerOptionSingleAgentAccount_Head_Option","sidebarContainerOptionSingleAgentAccount_BodyDiv",[],A_E_0)
new AppMenuSelector_0("sidebarContainerOptionSingleAgentAccount_Statistic_Option","sidebarContainerOptionSingleAgentAccount_Statistic_Div_Content",[],A_E_0)
new AppMenuSelector_0("statisticField_Option","statisticField_ContentDiv_div",['SPAN','I'],A_E_0)
new AppMenuSelector_0("AccountBankDetails","AccountBankDetailsDiv",["I"],A_E_0)
new AppMenuSelector_0("liveField_ContentDiv_Option","liveField_Console",["SPAN","I"],A_E_0)
new AppMenuSelector_0("LiveServerLog_LogsOptions","LiveServerLog_LogsTable",["I"],A_E_0)
new AppMenuSelector_0("TypeConfigModalOption","TypeConfigModalOptionDiv",["I"],A_E_0)
new AppMenuSelector_0("ModalOption_chat","ModalOption_chatDiv",["I"],A_E_0)
new AppMenuSelector_1("sidebarContainerTitle","sidebarContainerOptions",[], A_E_2)
// ============================== SCROLL JS ===============================
new ScrollClick('homeField_Content' , '#homeField_Second .fa-arrow-right' , '#homeField_Second .fa-arrow-left' )
// ======================================== [ MODAL JS ] ===================================================
let EndPointModalList_PEN = Array.from( document.querySelectorAll('.Account_Bank_Item .fa-pen') );
let EndPointModalList_PLUS = Array.from( document.querySelectorAll('.Account_Bank_Item_Detail_Foot .fa-plus') );
var EndPointModalList_Home = EndPointModalList_PEN.concat(EndPointModalList_PLUS)
// ===================================== ALL SINGLE MODAL ==================================================
new Modal( EndPointModalList_Home , "HomeModal" , true );
new Modal( "#createBankAccount" , "AccountBankModalCreate" , true );
new Modal( '#externalDetail_Operations_Table' , "AgentHead" , true );
new Modal( '#agenceField_HeaderField_Plus' , "AgenceModalCreate" , true );
new Modal( '.agenceField_Option .fas' , "AgenceModalStatistic" , false , false , true );
new Modal( '.liveField_ContentDiv_Option .fas' , "LiveServerDetail" , false , false , true );
new Modal( '#All_Logs_Saved' , "ModalAll_Logs_Saved" , true );
new Modal( '#ModelsCreation_ContentDiv_ListObject select option' , "ModelObjectModal" , false , true);
new Modal( '#TypeConfiguration' , "TypeConfigModal" , true );
new Modal( '#viewAllMessageChat' , "ChatModal" , true );
new Modal( '#viewAllNotification' , "ViewNotifModal" , true );
new Modal( '.CreditItem' , "DebtModal" , false , false , true  );
new Modal( '#ModalChangeAvatar' , "ChangeAvatarModal" , true  );
const RemplacantOperModal = new Modal( Array() , "RemplacantOperModal" , true  );
// =================================== [ DROPBOX ] ===================================
new DropBox('NotificationMessage_Chat');
new DropBox('NotificationMessage_Notif');
new DropBox('TodoListButton');
new DropBox('DebtPayToday');

(
	function () {
		for ( let I of ["ProfilCurrentClient" , "IdentCardCurrentClient" , "AgentCurrentProfil" , "AgentCurrentCardId"] ) { // CLIENT LOGIC
			document.getElementById( I ).onclick = (e) => {
				let Element = ["I" , "SPAN"].includes(e.target.tagName) ? e.target.parentElement : e.target
				OPEN_IMGG( e , true , Element.getAttribute("img") );
			}
		}

		let AGENCELIST = document.querySelectorAll('.agenceField_Option');
		let TABLELIST = document.querySelectorAll('#databaseField_Options span');
		AGENCELIST.forEach( ( Agence ) => {
			Agence.onclick = ( event ) => {
				let Element = ["I" , "SPAN"].includes(event.target.tagName) ? event.target.parentElement : event.target
				for ( let _A of AGENCELIST ) _A.classList.remove( A_E_3 );
				Element.classList.add( A_E_3 );
			}
		})

		TABLELIST.forEach( ( Agence ) => {
			Agence.onclick = ( event ) => {
				let Element = ["I"].includes(event.target.tagName) ? event.target.parentElement : event.target
				for ( let _A of TABLELIST ) _A.classList.remove( A_E_3 );
				Element.classList.add( A_E_3 );
			}
		})
	}
)()

// ==================================== LOGIC ===============================================
const ADD_REMPL_FUN = function ( node ) {
	let ON_FUN = ( e , LIST ) => {
		let Element = LIST.includes(e.target.tagName) ? e.target.parentElement : e.target
		OPEN_IMGG( e , true , Element.getAttribute("img") );		
	}
	node.oncontextmenu = ( e ) => { e.preventDefault(); RemplacantOperModal.DISPLAY( e , true ); }
	node.onclick = ( event ) => {
		console.log( event.target , 'In Node .... ')
		ON_FUN( event , ["I" , "TD"] );
	}
}

// ==================================== DELETE AFTER ===============================================
document.querySelectorAll('#RemplacantsOptionItem_ListItem tbody tr').forEach(( tr ) => {
	ADD_REMPL_FUN( tr );
	// console.log( tr) 
})