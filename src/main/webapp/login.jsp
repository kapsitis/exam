<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head>
<meta charset="utf-8"/>
<link rel='stylesheet' type='text/css' href='mystyle.css'/>
</head>
<body>
<h2>Testu pieteikšanās lapa</h2>
<form action="login" method="GET">
<table>
<tr><th>Vārds:</th><td><input type="text" name="name" maxlength="25" size="25"></td></tr>
<tr><th>6-ciparu ID:</th><td><input type="text" name="loginID" maxlength="6" size="6"></td></tr>
<tr><td colspan="2"><input type="submit" value="Nosūtīt"></td></tr>
</table>
</form>
</body>
</html>