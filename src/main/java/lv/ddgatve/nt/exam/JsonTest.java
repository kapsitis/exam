package lv.ddgatve.nt.exam;

import org.json.simple.JSONValue;

public class JsonTest {
	
	public static void main(String[] args) {
		String s = "Kal\"vis";
		String s2 = JSONValue.escape(s);
		System.out.println("s2 = '" + s2 + "'");
	}

}
