package lv.ddgatve.nt.exam;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import lv.ddgatve.nt.exam.utils.RandomChoices;

@SuppressWarnings("serial")
public class GradingServlet2 extends HttpServlet {

	public final int MAXQUESTIONS = 20;
	
	public String normalize(String arg) {
		if (arg == null) {
			return "";
		} else {
			return arg.trim();
		}
	}
	
	public static String prettyPrint(List<String> arg) {
		StringBuffer result = new StringBuffer(); 
		result.append("[");
		for (String a: arg) {
			result.append("\"" + a + "\"|");
		}
		result.deleteCharAt(result.length()-1);
		result.append("]");
		return result.toString();
	}

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		PrintWriter out = resp.getWriter();

		resp.setContentType("text/html;charset=utf-8");

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
		allCorrect.put("pigeonhole", correct7);

		String testId = req.getParameter("testId");
		List<String> correct = allCorrect.get(testId);
		HttpSession session = req.getSession();

		String loginID = (String) session.getAttribute("loginID");
		String loginName = (String) session.getAttribute("loginName");
		long seed = Long.parseLong((String) req.getParameter("seed"));
		
		session.setAttribute("seed", "" + seed);
		
		
		List<String> theList = RandomChoices.take2eachFrom5(seed);
		List<String> correctSelected = new ArrayList<String>();
		for (String itemStr: theList) {
			int itemI = Integer.parseInt(itemStr) - 1;
			correctSelected.add(correct.get(itemI));
		}
		
		
		String[] answers = new String[correctSelected.size()];

		//Enumeration<String> ee = req.getParameterNames();
		
		List<String> multiParts = Arrays.asList("4","9","20","44","45","56","58","71");
		
		for (int qNum = 0; qNum < correctSelected.size(); qNum++) {
			int numParts = correctSelected.get(qNum).split(",").length;
			String s = "";
			if (theList.get(qNum).equals("74")) {
				for (String letter: Arrays.asList("a","b","c","d","e","f")) {
					if (!normalize(req.getParameter("q" + qNum + letter)).equals("")) {
						s = s + letter + ",";
					}
				}
				if (s.length() > 0 && s.charAt(s.length()-1) == ',') {
					s = s.substring(0,s.length()-1);
				}
			} else if (multiParts.contains(theList.get(qNum))) {
				for (int kk = 0; kk < numParts; kk++) {
					s = s + normalize(req.getParameter("q" + qNum + "p" + kk));
					if (kk < numParts - 1) {
						s = s + ",";
					}
				}	
			}
			else  {
				s = normalize(req.getParameter("q" + qNum));
			}
			answers[qNum] = s;
		}
		
		session.setAttribute("yourAnswers", prettyPrint(Arrays.asList(answers)));

		String[] evals = new String[correctSelected.size()];
		int totalGrade = 0;
		for (int j = 0; j < correctSelected.size(); j++) {
			if (answers[j].equals(correctSelected.get(j))) {
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
		bw.write("Seed: " + seed);
		bw.write("\n");
		bw.write("TotalGrade: " + totalGrade);
		bw.write("\n");
		bw.write(prettyPrint(correctSelected));
		bw.write("\n");
		bw.write(prettyPrint(Arrays.asList(answers)));
		bw.write("\n");
		bw.write(prettyPrint(Arrays.asList(evals)));
		bw.write("\n");
		bw.close();
		osw.close();
		fis.close();

		out.print("<p>Juusu atbildes: ");
		out.print(Arrays.asList(answers).toString());
		out.println("</p>");

		out.print("<p>Veerteejumi: ");
		out.print(Arrays.asList(evals).toString());
		out.println("</p>");

		out.println("<p>Summa: " + totalGrade + "<p>");
		out.println("<p>Uz "
				+ "<a href='http://www.dudajevagatve.lv:8080/exam/pigeonhole-solutions.html'>Jautaajumu analiizi</a></p>");
		out.println("<p>Uz "
				+ "<a href='http://www.dudajevagatve.lv:8080/exam/examlist.html'>Testu lapu</a></p>");
		out.println("<p><a href='http://www.dudajevagatve.lv:8080/exam/examItems2.js'>JSON</a></p>");
		
		out.println("</body></html>");
	}
}
