const SOCKET_IO = undefined;
const CLICKED_PROFILS = Array()
const SEND_BUTTON = document.getElementById('ChatFormMessageButton');
const MSG_INPUT = document.getElementById('ChatFormMessageInput');
const AREA_MSG = document.getElementById('ChatDiscussionDivArea_MsgContent');


const CURRENT_USER_UI = document.getElementById('ChatDiscussionDivArea_Contacts_Name');
const CURRENT_USER_ONLINE_UI = document.getElementById('OnlineColorStatus');

class UI {
	static ONLINE_STATIS_CHANGE ( STS = false) {
		CURRENT_USER_ONLINE_UI.classList = "";
		CURRENT_USER_ONLINE_UI.classList.add( STS ? 'GreenCircle' : 'RedCircle' )
	}
}

class CONTACT {
	static SCROLLTOBOTTOM () { AREA_MSG.scrollTop = AREA_MSG.scrollHeight; }
	constructor ( ELEMENT ) {
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

		this.IN_MSG_LIST = Array();
		this.OUT_MSG_LIST = Array();

		ELEMENT.onclick = this.CLICKED
	}
	CLICKED = () => {
		CURRENT_USER_UI.innerText = this.NAME;
		UI.ONLINE_STATIS_CHANGE( true );
		this.AJAX ? this.AJAX() : null;

	} 
	INCOMING_MSG ( MSG ) {
		this.MSG_.innerText = MSG.MESSAGE;
		this.MOMENT_ = MSG.TIME;

		this.NBRMSG += 1
		this.NBRMSG_.innerText = this.NBRMSG;
		this.ADD_ON_CONTENT_MSG( MSG )
		this.IN_MSG_LIST.push( MSG )
	}
	OUTCOME_MSG ( MSG ) {
		this.ADD_ON_CONTENT_MSG( MSG , false )
		this.OUT_MSG_LIST.push( MSG )
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


UI.ONLINE_STATIS_CHANGE()
for ( let i of document.querySelectorAll('.ItemContact')) {
	new CONTACT(i)
}


