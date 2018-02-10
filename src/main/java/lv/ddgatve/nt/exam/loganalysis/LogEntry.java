package lv.ddgatve.nt.exam.loganalysis;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class LogEntry {
	private Date tstamp;
	private String dateStr;
	private String hhmmStr;
	private long seed; 
	private int totalGrade;
	private List<String> theItems;
	private List<String> correctAnswers;
	private List<String> actualAnswers;
	private List<Integer> grades;
	
	public Date getTstamp() {
		return tstamp;
	}
	public void setTstamp(Date tstamp) {
		this.tstamp = tstamp;
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		this.dateStr = format1.format(tstamp);
		SimpleDateFormat format2 = new SimpleDateFormat("hh:mm");
		this.hhmmStr = format2.format(tstamp);
		
	}
	public long getSeed() {
		return seed;
	}
	public void setSeed(long seed) {
		this.seed = seed;
	}
	public int getTotalGrade() {
		return totalGrade;
	}
	public void setTotalGrade(int totalGrade) {
		this.totalGrade = totalGrade;
	}
	public List<String> getTheItems() {
		return theItems;
	}
	public void setTheItems(List<String> theItems) {
		this.theItems = theItems;
	}
	public List<String> getCorrectAnswers() {
		return correctAnswers;
	}
	public void setCorrectAnswers(List<String> correctAnswers) {
		this.correctAnswers = correctAnswers;
	}
	public List<String> getActualAnswers() {
		return actualAnswers;
	}
	public void setActualAnswers(List<String> actualAnswers) {
		this.actualAnswers = actualAnswers;
	}
	
	public List<Integer> getGrades() {
		return grades;
	}
	
	public void setGrades(List<String> argList) {
		grades = new ArrayList<Integer>();
		for (String str: argList) {
			if (str.equals("\"TRUE\"")) {
				grades.add(1);
			} else if (str.equals("\"FALSE\"")) {
				grades.add(0);
			} else {
				System.err.println("****WRONG GRADE****");
				grades.add(0);
			}
		}
	}
	
	public String toString() {
		StringBuffer result = new StringBuffer();
		result.append("{");
		result.append("\"total\":\"" + this.getTotalGrade()+"\",");
		result.append("\"date\":\"" + this.dateStr + "\",");
		result.append("\"seed\":\"" + this.getSeed() + "\"");
		result.append("}");
		return result.toString();
	}
	
	public String getSessionCsvLine() {
		StringBuffer result = new StringBuffer();
		result.append("\"" + getTstamp().getTime() + "\",");
		result.append("\"" + this.dateStr + "\",");
		result.append("\"" + this.hhmmStr + "\",");
		result.append(this.getTotalGrade() + ",");
		result.append("\"" + StringUtils.getExamType(this.getSeed()) + "\",");
		result.append(StringUtils.getMaxGrade(this.getSeed()));
		result.append("\r\n");
		return result.toString();
	}
	
	public List<String> getQuestionCsvLine() {
		List<String> result = new ArrayList<String>();
		for (int i = 0; i < theItems.size(); i++) {
			StringBuffer current = new StringBuffer();
			current.append("\"" + getTstamp().getTime() + "\",");
			current.append("\"" + theItems.get(i) + "\",");
			current.append(correctAnswers.get(i) + ",");
			current.append(actualAnswers.get(i) + ",");
			current.append("" + grades.get(i) + ",");
			current.append("" + totalGrade + ",");
			current.append(StringUtils.getMaxGrade(seed));
			result.add(current.toString());
		}
		return result;
	}
}
