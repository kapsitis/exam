package lv.ddgatve.nt.exam.loganalysis;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class StringUtilsTest {
	@Test
	public void testJsonLiteral() {
		String result = StringUtils.getTstamp("pigeonhole/null.1516900601474.txt");
		assertEquals("1516900601474",result);
	}
	
}
