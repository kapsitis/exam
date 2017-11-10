package lv.ddgatve.nt.exam.utils;


import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class NumericSortCanonizerTest {
	@Test
	public void testSimpleSort() {
		String arg1 = "5,2,7";
		String val1 = NumericSortCanonizer.canonize(arg1);
		assertEquals("2,5,7", val1);
	}

	@Test
	public void testEliminateSpaces() {
		String arg2 = "15, 12, 7";
		String val2 = NumericSortCanonizer.canonize(arg2);
		assertEquals("7,12,15", val2);
	}

	@Test
	public void testSingleNumber() {
		String arg3 = "1";
		String val3 = NumericSortCanonizer.canonize(arg3);
		assertEquals("1",val3);
	}

	@Test
	public void testTrailingComma() {
		String arg4 = "1,4,6,";
		String val4 = NumericSortCanonizer.canonize(arg4);
		assertEquals("1,4,6",val4);
	}

	@Test
	public void testSyntaxIssue() {
		String arg5 = ",2,3,";
		String val5 = NumericSortCanonizer.canonize(arg5);
		assertEquals(",2,3,", val5);
	}
	
	@Test
	public void preserveZeroes() {
		String arg = "025,225,625";
		String val = NumericSortCanonizer.canonize(arg);
		assertEquals("25,225,625", val);
	}
	
}
