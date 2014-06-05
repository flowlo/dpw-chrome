function login() {
	document.login_form.submit();
}

var form = document.forms[0];

if (form) {
	form.action = "A-0001.HTM?man=";
	var l = document.getElementsByName('loginbtn')[0];
	if (l) {
		l.disabled = false;
		l.style.cursor = 'pointer';
		l.style.backgroundImage = 'url("/v8pweb_webext/proc/v8d/images/btn_login.png")';
		l.addEventListener('click', function() { form.submit() } );
	}
	form.user.focus();
}
