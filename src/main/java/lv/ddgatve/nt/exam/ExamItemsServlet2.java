package lv.ddgatve.nt.exam;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import lv.ddgatve.nt.exam.utils.RandomChoices;
import lv.ddgatve.nt.exam.utils.ReadJson;

@SuppressWarnings("serial")
public class ExamItemsServlet2  extends HttpServlet {
	
	public static Map<String,String> allItems = null;
	
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		if (allItems == null || allItems.size() < 75) {
			ServletContext context = getServletContext();
			InputStream resourceContent = context.getResourceAsStream("/WEB-INF/exams/carousel7data.js");
			allItems = ReadJson.getAllItems(resourceContent);
			//getAllItems(context);
		}

		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json;charset=utf-8");
		resp.setCharacterEncoding("UTF-8");
		
		HttpSession session = req.getSession();

		long seed = Long.parseLong((String)session.getAttribute("seed"));		
		String yourAnswers = (String)session.getAttribute("yourAnswers");
		
		List<String> theList = RandomChoices.take2eachFrom5(seed);
		
		//int theSeconds = 180*theList.size();
		out.println(" {");
		out.println("    \"seed\": \"" + seed + "\",");
		out.println("    \"questions\": [");
		
//		List<String> yourAnswerList = peel(yourAnswers); 
		int count = 0; 
		for (String ss: theList) {
			count++; 
			if (allItems.containsKey(ss)) {
				String theItem = allItems.get(ss).trim();
//				int idx = theItem.indexOf("\"answer\"");
//				String part1 = theItem.substring(0,idx);
//				String part2 = theItem.substring(idx);
//				String theAnswer = "\"\"";
//				if (count-1 < yourAnswerList.size()) {
//					theAnswer = yourAnswerList.get(count-1);
//					if (theAnswer == null || theAnswer.equals("")) {
//						theAnswer = "\"\"";
//					}
//				}
//				String newItem = part1 + "\"yourAnswer\": " + theAnswer + ",\r\n" + part2;
				if (count == theList.size()) {
					out.println(theItem.substring(0,theItem.length()-1));
				} else {
					out.println(theItem);
				}
			}
		}
		
		out.println("]");
		out.println("}");
				
		out.println();
		
		out.close();
	}	
}
