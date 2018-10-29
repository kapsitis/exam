package lv.ddgatve.nt.exam;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
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

import lv.ddgatve.nt.exam.dao.AnswerDAO;
import lv.ddgatve.nt.exam.utils.NumericSortCanonizer;

@SuppressWarnings("serial")
public class GradingServlet extends HttpServlet {

	public final int MAXQUESTIONS = 20;

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		PrintWriter out = resp.getWriter();

		resp.setContentType("text/html;charset=utf-8");
//		List<String> correct1 = Arrays.asList("a", "c", "a", "b", "d", "c",
//				"d", "c", "b", "a", "1/25", "6,7,11");
		List<String> correct2 = Arrays.asList("c", "d", "c", "a", "a", "b",
				"a", "d", "b", "c", "c", "0000", "5");

		List<String> correct3 = Arrays.asList("79", "799999999", "16", "9",
				"24", "97", "25,225,625", "18", "1,2,4,7,14,28", "2", "0",
				"b,c");

		List<String> correct7 = Arrays.asList(
				// intro
				"13", "302", "4", "a,b", "c", "b", "8", "366", "b", "103", "9",
				"5",
				"110",
				"a",
				"a",
				// generalizations
				"a", "b", "17", "29", "15,21", "14", "3", "14", "b", "29", "a",
				"23", "62",
				"17",
				"6",
				// combinatorics
				"106", "73", "5", "4", "a", "b", "b", "6", "2", "1090", "11",
				"10", "13", "10,945",
				"1023,a",
				// shapes
				"16", "7", "41", "19", "20", "21", "22", "14", "13", "c",
				"2,3", "b", "63,31,31,15", "10", "16",
				// number-theory
				"b", "a", "4", "7", "4", "7", "68", "68", "51", "17", "a,a",
				"b", "240", "c,d", "34");

		Map<String, List<String>> allCorrect = new HashMap<String, List<String>>();
		//allCorrect.put("carousel1", correct1);
		AnswerDAO answerDAO = new AnswerDAO();
		List<String> answersForLabel = new ArrayList<String>();
		try {
			answersForLabel = answerDAO.getAnswers("carousel1");
		} catch (Exception e) {
			e.printStackTrace();
		}
		allCorrect.put("carousel1",answersForLabel);
		
		allCorrect.put("carousel2", correct2);
		allCorrect.put("carouselNT2EXAM2", correct3);

		String testId = req.getParameter("testId");
		List<String> correct = allCorrect.get(testId);
		HttpSession session = req.getSession();

		String loginID = (String) session.getAttribute("loginID");
		String loginName = (String) session.getAttribute("loginName");
		String[] answers = new String[correct.size()];

		Enumeration<String> ee = req.getParameterNames();
		while (ee.hasMoreElements()) {
			String elt = ee.nextElement();
			if (elt.startsWith("q")) {
				String[] vals = req.getParameterValues(elt);

				int qNum = 0;
				char currentLetter = 'z';
				boolean checkboxes = false;
				if (elt.endsWith("a") || elt.endsWith("b") || elt.endsWith("c")
						|| elt.endsWith("d") || elt.endsWith("e")
						|| elt.endsWith("f")) {
					qNum = Integer.parseInt(elt.substring(1, elt.length() - 1));
					currentLetter = elt.substring(elt.length() - 1,
							elt.length()).charAt(0);
					checkboxes = true;
				} else {
					qNum = Integer.parseInt(elt.substring(1));
				}
				if (qNum >= 0 && qNum < answers.length) {
					if (checkboxes) {
						if (answers[qNum] == null) {
							answers[qNum] = "" + currentLetter;
						} else {
							answers[qNum] = answers[qNum] + "," + currentLetter;
						}
					} else {
						answers[qNum] = vals[0].trim();
					}
					// canonize, if there are commas
					if (answers[qNum].indexOf(",") > -1) {
						answers[qNum] = NumericSortCanonizer
								.canonize(answers[qNum]);
					}
				}
			}
		}

		int answerCount = 0;
		for (int i = 0; i < answers.length; i++) {
			if (answers[i] != null) {
				answerCount++;
			}
		}

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
		bw.write("Name: " + loginName);
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
		
		out.print("<p>Correct answers: ");
		out.print(correct);
		out.println("</p>");		

		out.println("<p>Total grade: " + totalGrade + "<p>");
		out.println("<p>Back to the "
				+ "<a href='http://www.dudajevagatve.lv/nt/index.html'>Home Page</a></p>");
	}
}
