package lv.ddgatve.nt.exam;

import static org.junit.Assert.assertEquals;

import org.json.simple.JSONValue;
import org.junit.Test;

public class JsonTest {

	@Test
	public void testJsonLiteral() {
		String s = "Kal\"vis";
		String s2 = JSONValue.escape(s);
		assertEquals("Kal\\\"vis",s2);
	}
	
}
