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
		String name = (String) session.getAttribute("name");
		
//		out.println("");
//		out.println("var DATA = {");
		out.println("{");
		out.println("\"name\": \"" + JSONValue.escape(name) + "\",");
		out.println("	    \"exams\": ");
		out.println("[");
		out.println("        {");
		out.println("          \"id\": \"carousel1\",");
		out.println("         \"title\": \"NT.1.2: Algebras metodes skait\u013Cu teorij\u0101\",");
		out.println("         \"url\": \"http://www.dudajevagatve.lv:8080/exam/carousel1.html\"");
		out.println("       },");
		out.println("       {");
		out.println("         \"id\": \"carousel2\",");
		out.println("         \"title\": \"NT.1.4: Dal\u0101m\u012Bbas paz\u012Bmes\",");
		out.println("         \"url\": \"http://www.dudajevagatve.lv:8080/exam/carousel2.html\"");
		out.println("       }");
		out.println("    ]");
		out.println("}");
//		out.println("");
//		out.println("module.exports = DATA;");

		
	}
}

