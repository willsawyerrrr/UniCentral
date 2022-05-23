/*
 * Allows multiple onload events to be called on one page.
 * Credit to:
 *   https://brefere.com/fbapps/bcom.nsf/cvbdate/D514491209EE5C848725801A0074AE6E?opendocument#:~:text=Unfortunately%2C%20you%20cannot%20place%20multiple,use%20the%20addLoadEvent%20function%20below.
 */
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
}