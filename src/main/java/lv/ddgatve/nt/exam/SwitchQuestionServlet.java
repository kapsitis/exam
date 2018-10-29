package lv.ddgatve.nt.exam;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class SwitchQuestionServlet extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		PrintWriter out = resp.getWriter();
		String qNum = req.getParameter("question");
		
		//Object attr = getServletContext().getAttribute("ATTR_NAME");
		
		if (qNum.startsWith("Q")) {
			// uzliek "application" scope mainiigo
			getServletContext().setAttribute("QUESTION", qNum);
		} else {
			// ja ir "OK" (novaakt visus)
			getServletContext().setAttribute("QUESTION", "");
		}
		
		String nextJSP = "/switch-question.jsp";
		RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJSP);
		dispatcher.forward(req,resp);		
	}
}
