package lv.ddgatve.nt.exam.loganalysis;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 * sessions.csv (tstamp,yyyy-mm-dd,hh:mm,totalGrade,examType)
 * questions.csv (qNum,qIdentifier,correctAnswer,actualAnswer,totalScore)
 * @author kapsitis
 *
 */
public class LogAnalysisMain {
	
	public static void main(String[] args) throws IOException {
		File dir = new File("pigeonhole");
		String[] files = dir.list(new FilenameFilter() {

			@Override
			public boolean accept(File dir, String name) {
				return name.endsWith(".txt");
			}
			
		});
		
		List<LogEntry> logs = new ArrayList<LogEntry>();
		for (int i = 0; i < files.length; i++) {
			ParseLogfile temp = new ParseLogfile("pigeonhole/" + files[i]);
			logs.add(temp.parseFile());
		}
		
		for (LogEntry e: logs) {
			System.out.println(e);
		}
		
		FileOutputStream fos = new FileOutputStream("pigeonhole-reports/sessions.csv");
		OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
		//BufferedWriter bw = new BufferedWriter(osw);
		PrintWriter pw = new PrintWriter(osw);
		pw.println("tstamp,YyyyMmDd,HhMm,totalGrade,examType,maxGrade");
		for (LogEntry e: logs) {
			pw.print(e.getSessionCsvLine());
		}
		pw.close();
		osw.close();
		fos.close();	
		
		
		FileOutputStream fos2 = new FileOutputStream("pigeonhole-reports/questions.csv");
		OutputStreamWriter osw2 = new OutputStreamWriter(fos2, "UTF-8");
		PrintWriter pw2 = new PrintWriter(osw2);
		pw2.println("tstamp,item,correct,actual,grade,totalGrade,maxGrade");
		for (LogEntry e: logs) {
			List<String> myItems = e.getQuestionCsvLine();
			for (String item: myItems) {
				pw2.println(item);
			}
		}
		pw2.close();
		osw2.close();
		fos2.close();	
		
		
	}
}
