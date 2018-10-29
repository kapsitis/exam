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
public class GradingServlet11 extends HttpServlet {

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
				"2*F(n)+3*F(n+1)", "1024", "0,0,1,2,1,0", "01001", "4",
				"10001","20","a","c","a",
	            "d","448","1,9,36,100,225","927","192",
	            "42","15","56","19","102"
				);

		Map<String, List<String>> allCorrect = new HashMap<String, List<String>>();
		allCorrect.put("recurrent-sequences", correct7);

		String testId = req.getParameter("testId");
		List<String> correct = allCorrect.get(testId);
		HttpSession session = req.getSession();

		String loginID = (String) session.getAttribute("loginID");
		String loginName = (String) session.getAttribute("loginName");
		long seed = Long.parseLong((String) req.getParameter("seed"));
		
		session.setAttribute("seed", "" + seed);
		
		List<String> theList = RandomChoices.shuffle(seed, MAXQUESTIONS);
		List<String> correctSelected = new ArrayList<String>();
		for (String itemStr: theList) {
			int itemI = Integer.parseInt(itemStr) - 1;
			correctSelected.add(correct.get(itemI));
		}
		
		
		String[] answers = new String[correctSelected.size()];

		//Enumeration<String> ee = req.getParameterNames();

		Map<String,Integer> multiParts = new HashMap<String,Integer>();
		
		// shoreiz testaa nav neviena multipart jautaajuma
		//multiParts.put("19", 2);
		
		for (int qNum = 0; qNum < correctSelected.size(); qNum++) {
			//int numParts = correctSelected.get(qNum).split(",").length;
			String s = "";
			if (multiParts.keySet().contains(theList.get(qNum))) {
				int numParts = multiParts.get(theList.get(qNum));
				for (int kk = 0; kk < numParts; kk++) {
					s = s + normalize(req.getParameter("q" + qNum + "p" + kk));
					if (kk < numParts - 1) {
						s = s + "|";
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
				+ "<a href='http://www.dudajevagatve.lv:8080/exam/exam-solutions.html'>Jautaajumu analiizi</a></p>");
		out.println("<p>Uz "
				+ "<a href='http://www.dudajevagatve.lv:8080/exam/login.html'>Testu saakumu</a></p>");
		out.println("<p><a href='http://www.dudajevagatve.lv:8080/exam/examItems11.js'>JSON</a></p>");
		
		out.println("</body></html>");
	}
}
