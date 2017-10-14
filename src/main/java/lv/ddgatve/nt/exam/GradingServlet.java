package lv.ddgatve.nt.exam;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Date;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
public class GradingServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html;charset=utf-8");
		//    Map<String,String> params = req.getParameterMap();

		String[] letters = new String[] {"a","b","c","d","e","f"};
		String[] answers = new String[10];
		String[] correct = new String[] {"a", "c", "a", "b", "d", "c", "d", "c", "b", "a"};
		String name = req.getParameter("name");
		HttpSession session = req.getSession();

		String loginID = (String)session.getAttribute("loginID");

		Enumeration<String> ee = req.getParameterNames();
		while (ee.hasMoreElements()) {
			String elt = ee.nextElement();
			if (elt.startsWith("q")) {
				String[] vals = req.getParameterValues(elt);
				int qNum = Integer.parseInt(elt.substring(1));
				int qAns = Integer.parseInt(vals[0]);
				// TODO: qNum should enumerate from 1. 
				answers[qNum] = letters[qAns-1];
			}
		}

		int answerCount = 0; 
		for (int i = 0; i < 10; i++) {
			if (answers[i] != null) {
				answerCount++;
			}
		}

		if (loginID == null) {
			out.println(
			"<p>You should <a href='http://www.dudajevagatve.lv:8080/exam/login.jsp'>Log "
					+ "in</a> before taking the test</p>");
		} else if (name == null) {
			out.println(
			"<p>Please enter your name in the exam form. "
					+ "Either press <b>Back</b> button in your browser or "
					+ "<a href='http://www.dudajevagatve.lv:8080/exam/index.html'>"
					+ "fill the form from the scratch.</a></p>");

		} else if (answerCount < 10) {
			out.println(
			"<p>You should fill in all 10 answers. "
					+ "Either press <b>Back</b> button in your browser or "
					+ "<a href='http://www.dudajevagatve.lv:8080/exam/index.html'>"
					+ "fill the form from the scratch.</a></p>");

		} else {

			String[] evals = new String[10];
			int totalGrade = 0; 
			for (int j = 0; j < 10; j++) {
				if (answers[j] != null && answers[j].equals(correct[j])) {
					evals[j] = "TRUE";
					totalGrade++; 
				} else {
					evals[j] = "FALSE";
				}
			}

			FileOutputStream fis = new FileOutputStream(loginID + "." + (new Date()).getTime() + ".txt");
			OutputStreamWriter osw = new OutputStreamWriter(fis, "UTF-8");
			BufferedWriter bw = new BufferedWriter(osw);
			bw.write("Name: " + name);
			bw.write(Arrays.asList(answers).toString());
			bw.write(Arrays.asList(evals).toString());
			bw.close();
			osw.close();
			fis.close();

			out.print("<p>Your answers: ");
			out.print(Arrays.asList(answers).toString());
			out.println("</p>");
			
			out.print("<p>Evaluations: ");
			out.print(Arrays.asList(evals).toString());
			out.println("</p>");
			
			out.println("<p>Total grade: " + totalGrade + "<p>");
			out.println("<p>Back to the "
					+"<a href='http://www.dudajevagatve.lv/nt/index.html'>Home Page</a></p>");
		}
	}
}

