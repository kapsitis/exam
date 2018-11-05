package lv.ddgatve.nt.exam;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * This is meant to forward user to the test display page (after setting "testLabel" param). 
 * @author kalvi
 *
 */
@SuppressWarnings("serial")
public class TestServlet  extends HttpServlet {
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String testLabel = request.getParameter("testLabel");
		HttpSession session = request.getSession();
		session.setAttribute("testLabel", testLabel);		
		response.sendRedirect("/exam/recurrent-sequences.html");
	}

}
