package lv.ddgatve.nt.exam.dao;

import java.sql.SQLException;
import java.util.List;

public class AnswerDAO {
	
	public List<String> getAnswers(String testLabel) throws ClassNotFoundException, SQLException {
		DBUtils db = new DBUtils();
		db.getConnection();
		List<String> result = db.getAnswersByLabel(testLabel);
		db.closeConnection();
		return result;
	}

	
//	public static void main(String[] args) throws ClassNotFoundException, SQLException {
//		AnswerDAO aDao = new AnswerDAO();
//		List<String> result = aDao.getAnswers("carousel1");
//		System.out.println("result = "+  result);
//	}
}
