package lv.ddgatve.nt.exam;

import java.io.IOException;
import java.io.PrintWriter;

import org.json.simple.JSONValue;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
public class ExamlistJsServlet extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json;charset=utf-8");
		resp.setCharacterEncoding("UTF-8");
		
		HttpSession session = req.getSession();
		String loginName = (String) session.getAttribute("loginName");

		out.println("{");
		out.println("\"name\": \"" + JSONValue.escape(loginName) + "\",");
		out.println("	    \"exams\": ");
		out.println("[");
		out.println("       {");
		out.println("          \"id\": \"carouselNT2EXAM2\",");
		out.println("         \"title\": \"NT.2.2: (NT.Izlase) Modul\u0101r\u0101 aritm\u0113tika\",");
		out.println("         \"url\": \"http://www.dudajevagatve.lv:8080/exam/carouselNT2EXAM2.html\"");
		out.println("       },");
		out.println("       {");
		out.println("          \"id\": \"carousel1\",");
		out.println("         \"title\": \"NT.1.2: (NT.Ievads) Algebras metodes skait\u013Cu teorij\u0101\",");
		out.println("         \"url\": \"http://www.dudajevagatve.lv:8080/exam/carousel1.html\"");
		out.println("       },");
		out.println("       {");
		out.println("         \"id\": \"carousel2\",");
		out.println("         \"title\": \"NT.1.4: (NT.Ievads) Dal\u0101m\u012Bbas paz\u012Bmes\",");
		out.println("         \"url\": \"http://www.dudajevagatve.lv:8080/exam/carousel2.html\"");
		out.println("       }");
		out.println("    ]");
		out.println("}");
		
	}
}

