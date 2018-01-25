package lv.ddgatve.nt.exam.utils;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import lv.ddgatve.nt.exam.GradingServlet2;

public class ReadJson {	
	public static Map<String,String> getAllItems(InputStream is) throws IOException {
		Map<String,String> allItems = new HashMap<String,String>();
		InputStreamReader isr = new InputStreamReader(is, "UTF-8");
		BufferedReader br = new BufferedReader(isr);
		String line = null;
		StringBuffer cb = null; // whole item
		StringBuffer cLine = null; // concatenate long lines
		String oldKey = null;
		//String newKey = null;
		while ((line = br.readLine()) != null) {
			line = line.trim();
			// skip the preamble
			if (!line.startsWith("/*") && oldKey == null) {
				continue;
			}
			// if there is a divider
			else if (line.startsWith("/*") && line.endsWith("*/") ) {
				if (cb != null && cLine != null) {
					// append, if there is something accumulated
					cb.append(cLine);
				}				
				if (oldKey != null) {
					allItems.put(oldKey, cb.toString());
				}
				oldKey = line.substring(2, line.length()-2).trim();
				
				cb = new StringBuffer(); 
				cLine = null;

				if (line.indexOf("THE END") > -1) {
					break;
				} 
			} else if (line.startsWith("+")) {
				// pieaudzē cLine
				cLine.deleteCharAt(cLine.length()-1);
				cLine.append(line.substring(3));
			} else {
				// pieaudzē cb
				if (cLine != null) {
				cb.append(cLine);
				}
				cb.append("\r\n");
				cLine = new StringBuffer(line);
			}
		}
		br.close();
		isr.close();
		return allItems;
	}

	
	public static void main(String[] args) throws IOException {
		InputStream is = new FileInputStream("/home/kalvis/WebstormProjects/exam/src/main/webapp/WEB-INF/exams/carousel7data.js");
		Map<String,String> allItems = getAllItems(is);
		is.close();
		
		System.out.println("mm is " + allItems.size());
		for (int i = 1; i <= 75; i++) {
			if (allItems.containsKey("" + i)) {
				System.out.println(allItems.get("" + i));
				System.out.println("----------------");
			}
		}
		
		System.out.println("-23423423423");
		System.out.println(allItems.get("" + 1));
		System.out.println("PRETTY PRINT");
		System.out.println(GradingServlet2.prettyPrint(Arrays.asList("a","b","c")));
		
	}

}
