package lv.ddgatve.nt.exam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet {

//	List<String> logins = Arrays.asList("458969", "314838", "595614", "739667",
//			"300536", "569407", "176480", "350865", "236260", "825604",
//			"781509", "247640", "399304", "577337", "802572", "391218",
//			"486009", "188622", "677288", "886017");

	List<String> logins = Arrays.asList("000001", "000002", "000003", "000004", "000005", 
			"000006", "000007", "000008", "000009", "000010",
			"000011", "000012", "000013", "000014", "000015", 
			"000016", "000017", "000018", "000019", "000020",
			"000021", "000022", "000023", "000024", "000025", 
			"000026", "000027", "000028", "000029", "000030",
			"000031", "000032", "000033", "000034", "000035", 
			"000036", "000037", "000038", "000039", "000040",
			"000041", "000042", "000043", "000044", "000045", 
			"000046", "000047", "000048", "000049", "000050",
			"000051", "000052", "000053", "000054", "000055", 
			"000056", "000057", "000058", "000059", "000060",
			"577337"
			);
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		String loginID = req.getParameter("loginID");
		HttpSession session = req.getSession();
		
		out.println("<html><head><title>Login</title></head><body>");

		if (logins.contains(loginID)) {
			session.setAttribute("loginID", loginID);
			out.println("<p>Login successful</p>");
			out.println("<p>Welcome, <tt>" + loginID + "</tt></p>");
			out.println("<p>This is "
					+ "<a href='http://www.dudajevagatve.lv:8080/exam/index.html'>Test for today</a>");
		} else {
			out.println("<p>Login wrong - no such ID.</p>");
			out.println("<p>Please <a href='http://www.dudajevagatve.lv:8080/exam/login.jsp'>Try again</a></p>");
		}

		out.println("</body></html>");
	}
}
