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
			"000061", "000062", "000063", "000064", "000065", 
			"000066", "000067", "000068", "000069", "000070",
			"000071", "000072", "000073", "000074", "000075", 
			"000076", "000077", "000078", "000079", "000080",

			"000101", "000102", "000103", "000104", "000105", 
			"000106", "000107", "000108", "000109", "000110",
			"000111", "000112", "000113", "000114", "000115", 
			"000116", "000117", "000118", "000119", "000120",
			"000121", "000122", "000123", "000124", "000125", 
			"000126", "000127", "000128", "000129", "000130",
			"000131", "000132", "000133", "000134", "000135", 
			"000136", "000137", "000138", "000139", "000140",
			"000141", "000142", "000143", "000144", "000145", 
			"000146", "000147", "000148", "000149", "000150",
			"000151", "000152", "000153", "000154", "000155", 
			"000156", "000157", "000158", "000159", "000160",			
			"000161", "000162", "000163", "000164", "000165", 
			"000166", "000167", "000168", "000169", "000170",
			"000171", "000172", "000173", "000174", "000175", 
			"000176", "000177", "000178", "000179", "000180",
			"000181", "000182", "000183", "000184", "000185", 
			"000186", "000187", "000188", "000189", "000190",
			"000191", "000192", "000193", "000194", "000195", 
			"000196", "000197", "000198", "000199", "000200",
			
			"577337", // Kalvis (000001-000060) 
			"677288", // Agnese L. (000061-000080)
			"188622" // Maruta (000101-000200)
			);
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		String loginID = req.getParameter("loginID");
		HttpSession session = req.getSession();
		String name = req.getParameter("name");
		
		out.println("<html><head><title>Login</title></head><body>");

		if (name.trim().equals("")) {
			out.println("<p>Login wrong - Name cannot be empty</p>");
			out.println("<p>Please <a href='http://www.dudajevagatve.lv:8080/exam/login.jsp'>Try again</a></p>");
			
		} else if (!logins.contains(loginID)) {
			out.println("<p>Login wrong - no such ID.</p>");
			out.println("<p>Please <a href='http://www.dudajevagatve.lv:8080/exam/login.jsp'>Try again</a></p>");
		} else {
			session.setAttribute("loginID", loginID);
			session.setAttribute("name", name);
			out.println("<p>Login successful</p>");
			out.println("<p>Welcome, <tt>" + name + "</tt></p>");
			out.println("<p>This is "
					+ "<a href='http://www.dudajevagatve.lv:8080/exam/carousel2.html'>Test for today</a>");
		}

		out.println("</body></html>");
	}
}
