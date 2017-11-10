package lv.ddgatve.nt.exam.utils;

import java.util.Arrays;
import java.util.Comparator;

public class NumericSortCanonizer {
	
	public static String canonize(String arg) {
		
		
		boolean wasError = false;
		String result = arg;
		StringBuilder sbStr = new StringBuilder();
		try {
			arg = arg.replaceAll(" ", "");
		    if (arg.endsWith(",")) {
		    	arg = arg.substring(0,arg.length()-1);
		    }
			String[] parts = arg.split(",");
			Integer[] intParts = new Integer[parts.length];
			for (int i = 0; i < parts.length; i++) {
				intParts[i] = Integer.parseInt(parts[i]);	
			}
			Arrays.sort(intParts, new Comparator<Integer>() {
				@Override
				public int compare(Integer x, Integer y)
				{
					return x - y;
				}
			});
			
			
			for (int i = 0; i < intParts.length; i++) {
			    if (i > 0) {
			        sbStr.append(",");
			    }
			    sbStr.append(intParts[i]);
			}
		} catch (NumberFormatException e) {
			wasError = true;
		}

		if (!wasError) {
			result = sbStr.toString();
		}
		return result;
		
	}

}
