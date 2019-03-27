package lv.ddgatve.nt.exam.dao;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class DBUtils {
	Connection conn = null;
	public DBUtils() {}
	public static Properties prop = new Properties();
	
	static {
		InputStream input = null;
		try {
			input = new FileInputStream("/home/kalvis/.jenkins-resources/exam.properties");
			prop.load(input);
			System.out.println(prop.getProperty("user"));
			System.out.println(prop.getProperty("passwd"));
		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	public void getConnection() throws ClassNotFoundException, SQLException {
//		Class.forName("com.mysql.cj.jdbc.Driver");
		Class.forName("org.postgresql.Driver");
		String user = prop.getProperty("user");
		String passwd = prop.getProperty("passwd");
//		conn = DriverManager.getConnection("jdbc:mysql://localhost/exam?" +
//                "user=" + user + "&password=" + passwd);
		conn = DriverManager.getConnection("jdbc:postgresql://localhost/exam?" + 
				"user=" + user + "&password=" + passwd);
	}	
	
	public List<String> getAnswersByLabel(String label) throws SQLException {
		
		List<String> result = new ArrayList<String>();
		PreparedStatement pstmt = conn.prepareStatement(
				"SELECT value FROM answers WHERE test_label=? ORDER BY q_id");
		pstmt.setString(1, label);
		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {
            String value = rs.getString(1);
            result.add(value);
		}
		return result;
	}
	
	public void closeConnection() throws SQLException {
		conn.close();
	}
}
