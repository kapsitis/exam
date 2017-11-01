package lv.ddgatve.nt.exam;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
public class GradingServlet extends HttpServlet {

	public final int MAXQUESTIONS = 20;
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PrintWriter out = resp.getWriter();
		
		resp.setContentType("text/html;charset=utf-8");
		List<String> correct1 = Arrays.asList("a", "c", "a", "b", "d", 
				"c", "d", "c", "b", "a"
				);
		List<String> correct2 = Arrays.asList("c", "d", "c", "a", "a", 
				"b", "a", "d", "b", "c", 
				"c", "0000");
		Map<String,List<String>> allCorrect = new HashMap<String,List<String>>();
		allCorrect.put("carousel1", correct1);
		allCorrect.put("carousel2", correct2);
		

		String testId = req.getParameter("testId");
		List<String> correct = allCorrect.get(testId);		
		HttpSession session = req.getSession();

		String loginID = (String)session.getAttribute("loginID");
		String name = (String) session.getAttribute("name");
		String[] answers = new String[correct.size()];

		Enumeration<String> ee = req.getParameterNames();
		while (ee.hasMoreElements()) {
			String elt = ee.nextElement();
			if (elt.startsWith("q")) {
				String[] vals = req.getParameterValues(elt);
				int qNum = Integer.parseInt(elt.substring(1));
				if (qNum >= 0 && qNum < answers.length) {
					answers[qNum] = vals[0].trim();
				}
			}
		}

		int answerCount = 0; 
		for (int i = 0; i < answers.length; i++) {
			if (answers[i] != null) {
				answerCount++;
			}
		}

		if (loginID == null) {
			out.println(
			"<p>You should <a href='http://www.dudajevagatve.lv:8080/exam/login.jsp'>Log "
					+ "in</a> before taking the test</p>");
		} else if (answerCount < correct.size()) {
			out.println(
			"<p>You should fill in all " + correct.size() + " answers. "
					+ "Either press <b>Back</b> button in your browser or "
					+ "<a href='http://www.dudajevagatve.lv:8080/exam/index.html'>"
					+ "fill the form from the scratch.</a></p>");

		} else {

			String[] evals = new String[correct.size()];
			int totalGrade = 0; 
			for (int j = 0; j < correct.size(); j++) {
				if (answers[j] != null && answers[j].equals(correct.get(j))) {
					evals[j] = "TRUE";
					totalGrade++; 
				} else {
					evals[j] = "FALSE";
				}
			}

			FileOutputStream fis = new FileOutputStream(testId + "/" + loginID 
					+ "." + (new Date()).getTime() + ".txt");
			OutputStreamWriter osw = new OutputStreamWriter(fis, "UTF-8");
			BufferedWriter bw = new BufferedWriter(osw);
			bw.write("Name: " + name);
			bw.write("\n");
			bw.write(Arrays.asList(answers).toString());
			bw.write("\n");
			bw.write(Arrays.asList(evals).toString());
			bw.write("\n");
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

