package lv.ddgatve.nt.exam;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Date;
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
public class ExamItemsServlet11  extends HttpServlet {
	
	public static Map<String,String> allItems = null;
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {


		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json;charset=utf-8");
		resp.setCharacterEncoding("UTF-8");
		
		int qNum = 20;
		
		HttpSession session = req.getSession();
		String examDataLocator = "recurrent-sequences.js";
		long seed = (new Date()).getTime();
		//long seed=1L;
		List<String> theList = RandomChoices.shuffle(seed, qNum);

		if (allItems == null || allItems.size() < qNum) {
			ServletContext context = getServletContext();
			InputStream resourceContent = context.getResourceAsStream("/WEB-INF/exams/" + examDataLocator);
			allItems = ReadJson.getAllItems(resourceContent);
		}

		out.println(" {");
		out.println("    \"seed\": \"" + seed + "\",");
		out.println("    \"questions\": [");
		
		int count = 0;
		
//		out.println("*** theList is ***" + theList);
//		out.println("*** keys is ***" + allItems.keySet());
		
		
		for (String ss: theList) {
			count++; 
			if (allItems.containsKey(ss)) {
				String theItem = allItems.get(ss).trim();
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
