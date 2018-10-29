package lv.ddgatve.nt.exam.dao;

import static org.junit.Assert.*;

import java.sql.SQLException;
import java.util.List;

import org.junit.Test;

public class AnswerDAOTest {
	@Test
	public void testAnswerTable() throws ClassNotFoundException, SQLException {

		AnswerDAO aDao = new AnswerDAO();
		List<String> result = aDao.getAnswers("carousel1");
		assertEquals("1/25", result.get(10));

	}

}
