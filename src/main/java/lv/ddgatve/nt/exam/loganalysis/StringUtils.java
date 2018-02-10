package lv.ddgatve.nt.exam.loganalysis;

public class StringUtils {
	
	public static String getTstamp(String arg) {
		String fName = arg.substring(arg.indexOf("/"));
		fName = fName.substring(0, fName.lastIndexOf(".")); 
		fName = fName.substring(fName.indexOf(".")+1);
		return fName;
	}
	
	public static String getExamType(long seed) {
		if (seed == 1L) {
			return "intro";
		}
		if (seed == 2L) {
			return "generalizations";
		}
		if (seed == 3L) {
			return "combinatorics";
		}
		if (seed == 4L) {
			return "shapes";
		}
		if (seed == 5L) {
			return "number-theory";
		}
		else {
			return "random";
		}
	}
	
	public static int getMaxGrade(long seed) {
		if (seed >= 1 && seed <= 5) {
			return 15;
		}
		else {
			return 10;
		}
	}
	
}
