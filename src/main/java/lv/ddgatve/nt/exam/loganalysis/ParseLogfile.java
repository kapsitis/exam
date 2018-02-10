package lv.ddgatve.nt.exam.loganalysis;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import lv.ddgatve.nt.exam.utils.RandomChoices;

public class ParseLogfile {
	private String path;

	
	public ParseLogfile(String path) {
		this.path = path;
	}
	
	public static List<String> peel(String pretty) {
		pretty = pretty.trim();
		pretty = pretty.substring(1,pretty.length()-1).trim();
		//String[] result = pretty.split("|");
		int idx = 0;
		int nextIdx = 0;
		List<String> result = new ArrayList<String>();
		while ((nextIdx = pretty.indexOf("|",idx)) > -1) {
			result.add(pretty.substring(idx,nextIdx));
			idx = nextIdx+1;
		}
		result.add(pretty.substring(idx));
		return result;
	}

	
	public LogEntry parseFile() throws IOException {
		FileInputStream fis = new FileInputStream(path);
		InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
		BufferedReader br = new BufferedReader(isr);
		String line = null;
		int lineCount = 0;
		LogEntry entry = new LogEntry();
		String fName = StringUtils.getTstamp(path);
		entry.setTstamp(new Date(Long.parseLong(fName)));
		while ((line = br.readLine()) != null) {
			lineCount++;
			if (lineCount == 2) {
				long seed = Long.parseLong(line.split(":")[1].trim());
				entry.setSeed(seed);
				entry.setTheItems(RandomChoices.take2eachFrom5(seed));
			} else if (lineCount == 3) {
				entry.setTotalGrade(Integer.parseInt(line.split(":")[1].trim()));
			} else if (lineCount == 4) {
				entry.setCorrectAnswers(peel(line));
			} else if (lineCount == 5) {
				entry.setActualAnswers(peel(line));
			} else if (lineCount == 6) {
				entry.setGrades(peel(line));
			}
		}
		return entry;
	}
}
