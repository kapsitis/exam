<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head>
<meta charset="utf-8"/>
<link rel='stylesheet' type='text/css' href='mystyle.css'/>
</head>
<body>
<h2>Uzstādīt aktīvo jautājumu</h2>

<%
ServletContext sc = request.getServletContext();
String qNum = (String)sc.getAttribute("QUESTION");
String[] labels = {"AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH", "III", "JJJ"};
%>

<form action="switchQuestion" method="GET">
<table>

<%
for (int i = 0; i < 10; i++) {
  String lab = "Q" + (i+1);

  if (lab.equals(qNum)) {
%>


<tr style="background-color:darkgray">
<td><%= labels[i] %></td>
<td><input type="submit" name="question" value="<%= lab %>"/></td>
</tr>

<% } else { %>

<tr>
<td><%= labels[i] %></td>
<td><input type="submit" name="question" value="<%= lab %>"/></td>
</tr>


<%
  }
}
%>

<tr>
<td>Novākt visus</td>
<td><input type="submit" name="question" value="OK"/></td>
</tr>

</table>
</form>

</body>
</html>

