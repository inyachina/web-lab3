package net.proselite.lab3;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.sql.*;
import java.util.List;

@ManagedBean
@ApplicationScoped
public class DataBaseController {
        private final String url = "jdbc:postgresql://localhost:5432/pip";
    private final String user = "postgres";
//    private final String url = "jdbc:postgresql://pg:5432/studs";
//    private final String user = "s283945";
    private final String passvord = "iow988";

    private Connection connection;
    private PreparedStatement ps;

    private final String sql_select_from_table = "SELECT * FROM points";
    private final String sql_add_point = "INSERT INTO points values( ?, ?, ?, ?, ?)";
    private final String sql_clear_table = "TRUNCATE points";
    private final String sql_create_table = "CREATE TABLE IF NOT EXISTS points " +
//            "(id BIGINT PRIMARY KEY NOT NULL ," +
            " (x REAL  NOT NULL , " +
            " y REAL NOT NULL , " +
            " r REAL NOT NULL," +
            " result BOOLEAN NOT NULL," +
            " time TEXT NOT NULL );";


    public DataBaseController() throws SQLException, ClassNotFoundException {
        Class.forName("org.postgresql.Driver");
        connection = DriverManager.getConnection(url, user, passvord);
        createTable();
    }

    private void createTable() throws SQLException {
        ps = connection.prepareStatement(sql_create_table);
        ps.execute();

    }

    public void selectFromTable(List<PointBean> pointBeans, PointBean point) {
        try {
            ps = connection.prepareStatement(sql_select_from_table);
            ResultSet rs = ps.executeQuery();
            long id = 1;
            while (rs.next()) {
//                id = rs.getLong("id");
//                point.setId(id);
                point.setX(rs.getFloat("x"));
                point.setY(rs.getFloat("y"));
                point.setR(rs.getFloat("r"));
                point.setRes(rs.getBoolean("result"));
                point.setTime(rs.getString("time"));
                pointBeans.add(point);
                point = new PointBean();
            }
            PointContoller.id = id + 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addPoint(PointBean point) {
        try {
            ps = connection.prepareStatement(sql_add_point);
//            ps.setLong(1, point.getId());
            ps.setFloat(1, point.getX());
            ps.setFloat(2, point.getY());
            ps.setFloat(3, point.getR());
            ps.setBoolean(4, point.isRes());
            ps.setString(5, point.getTime());
            ps.execute();
            System.out.println("точка залетела в бдшку :" + point);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void clearPoints() {
        try {
            ps = connection.prepareStatement(sql_clear_table);
            ps.execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
