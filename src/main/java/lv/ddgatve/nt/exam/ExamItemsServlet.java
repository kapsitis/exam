package lv.ddgatve.nt.exam;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lv.ddgatve.nt.exam.utils.RandomChoices;
import lv.ddgatve.nt.exam.utils.ReadJson;

@SuppressWarnings("serial")
public class ExamItemsServlet  extends HttpServlet {
	
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
		
		String subtype = req.getParameter("subtype");
		
		/*
		List<String> list1 = new ArrayList<String>();
		List<String> list2 = new ArrayList<String>();
		List<String> list3 = new ArrayList<String>();
		List<String> list4 = new ArrayList<String>();
		List<String> list5 = new ArrayList<String>();
		for (int i = 0; i < 15; i++) {
			list1.add("" + (i+1)); 
			list2.add("" + (i+16)); 
			list3.add("" + (i+31)); 
			list4.add("" + (i+46)); 
			list5.add("" + (i+61)); 		
		}
		
		List<String> theList = null;
		long seed = 0L;
		if (subtype.equals("intro")) {
			theList = list1;
			seed = 1L;
		} else if (subtype.equals("generalizations")) {
			theList = list2;
			seed = 2L;
		} else if (subtype.equals("combinatorics")) {
			theList = list3;
			seed = 3L;
		} else if (subtype.equals("shapes")) {
			theList = list4;
			seed = 4L;
		} else if (subtype.equals("number-theory")) {
			theList = list5;
			seed = 5L;
		} else {
			seed = (new Date()).getTime();
			RandomChoices rc = new RandomChoices(seed);
			theList = new ArrayList<String>();
			theList.addAll(rc.choose(list1, 2));
			theList.addAll(rc.choose(list2, 2));
			theList.addAll(rc.choose(list3, 2));
			theList.addAll(rc.choose(list4, 2));
			theList.addAll(rc.choose(list5, 2));
		}
		*/
		long seed = (new Date()).getTime();
		if (subtype.equals("intro")) {
			seed = 1L;
		} else if (subtype.equals("generalizations")) {
			seed = 2L;
		} else if (subtype.equals("combinatorics")) {
			seed = 3L;
		} else if (subtype.equals("shapes")) {
			seed = 4L;
		} else if (subtype.equals("number-theory")) {
			seed = 5L;
		}
		
		
		List<String> theList = RandomChoices.take2eachFrom5(seed);
		
		int theSeconds = 180*theList.size();
		
		out.println(" {");
		out.println("    \"count\": \"" + theSeconds + "\",");
		out.println("    \"seed\": \"" + seed + "\",");
		out.println("    \"questions\": [");
		
		int count = 0; 
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
