function login() {
	document.login_form.submit();
}

var form = document.forms[0];

if (form) {
	form.action = 'A-0001.HTM?man=';
	var l = document.querySelector('.loginbtn');
	if (l) {
		l.disabled = false;
		l.style.cursor = 'pointer';
		l.style.backgroundImage = 'url(\'/v8pweb_webext/proc/v8d/images/btn_login.png\')';
		l.addEventListener('click', function() { form.submit(); } );

		var p = document.createElement('p');
		p.style.lineHeight = '1.5em';
		p.style.textAlign = 'center';
		p.innerHTML = 'Your username is<br /><span style="font-family:monospace">C23-<i>&lt;last name&gt;&lt;first letter of first name&gt;</i></span><br />Max Mustermann &rarr; <span style="font-family:monospace">C23-MustermannM</span>';

		document.querySelector('.loginbody').appendChild(p);
	}
	form.user.focus();
}
