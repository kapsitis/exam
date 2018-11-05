package lv.ddgatve.nt.exam.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class RandomChoices {
	
	long seed;
	Random theRandom;
	
	public RandomChoices(long seed) {
		this.seed = seed;
		theRandom = new Random(seed);
	}
	
	public List<String> choose(List<String> from, int k) {
		List<String> result = new ArrayList<String>(); 
		for (int i = 0; i < k; i++) {
			boolean found = false;
			while (!found) {
				int idx = theRandom.nextInt(from.size());
				String eIdx = from.get(idx);
				if (!result.contains(eIdx)) {
					result.add(eIdx);
					found = true;
				}
			}
		}
		return result;
	}
	
	/**
	 * Vienkaarshi samaisa jaut. seciibu - atgriezh skaitliishus kaa stringus
	 */
	public static List<String> shuffle(long seed, int qNum) {
		List<String> baseList = new ArrayList<String>();
		for (int i=0; i < qNum; i++) {
			baseList.add(""+(i+1));
		}
		if (seed==1L) {
			return baseList;
		} else {
			RandomChoices rc = new RandomChoices(seed);
			List<String> result = new ArrayList<String>();
			result.addAll(rc.choose(baseList, qNum));
			return result;
		}
	}
	
	/**
	 * @param seed 1 (intro), 2 (generalizations), 
	 * 3 (combinatorics), 4 (shapes), 5 (number-theory), more than 5 (random)
	 * @return
	 */
	public static List<String> take2eachFrom5(long seed) {
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
		
		List<String> result = null;
		
		if (seed == 1L) {
			result = list1;
		} else if (seed == 2L) {
			result = list2;
		} else if (seed == 3L) {
			result = list3;
		} else if (seed == 4L) {
			result = list4;
		} else if (seed == 5L) {
			result = list5;
		} else {
			RandomChoices rc = new RandomChoices(seed);
			result = new ArrayList<String>();
			result.addAll(rc.choose(list1, 2));
			result.addAll(rc.choose(list2, 2));
			result.addAll(rc.choose(list3, 2));
			result.addAll(rc.choose(list4, 2));
			result.addAll(rc.choose(list5, 2));
		}
		return result;
	}
	
	public static void main(String[] args) {
		RandomChoices rc = new RandomChoices(18L);
		List<String> abc = rc.choose(Arrays.asList("1","2","3","4","5","6","7","8","9","10"), 8);
		System.out.println("abc is " + abc);
		List<String> res = RandomChoices.take2eachFrom5(17L);
		System.out.println("res is " + res);
		
		List<String> res2 = RandomChoices.shuffle(18L, 2);
		System.out.println("res2 is " + res2);
	}

}
