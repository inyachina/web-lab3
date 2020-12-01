package net.proselite.lab3;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
@ManagedBean(name = "pointController")
public class PointContoller implements Serializable {
    private DataBaseController dataBaseController;
    protected static long id = 1;
    private float canvasX;

    private PointBean point;
    private List<PointBean> pointBeans;

    public PointContoller() throws SQLException, ClassNotFoundException {
        dataBaseController = new DataBaseController();
        pointBeans = new ArrayList<>();
        point = new PointBean();
        loadPoints();
    }

    public float getCanvasX() {
        return canvasX;
    }

    public void setCanvasX(float canvasX) {
        System.out.println("set xCanvas: " + canvasX);
        this.canvasX = canvasX;
    }

    public PointBean getPoint() {
        return point;
    }

    public void setPoint(PointBean point) {
        this.point = point;
    }

    public void setPointBeans(List<PointBean> pointBeans) {
        this.pointBeans = pointBeans;
    }

    public void hitPoint() {
        point.setX(checkXCanvas() ? canvasX : point.getX());
        point.check();
        point.setTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss")));
        pointBeans.add(point);
        dataBaseController.addPoint(point);
        point = new PointBean();
        id++;
    }

    public void clearPoints() {
        dataBaseController.clearPoints();
        pointBeans.clear();
        id = 1;
    }

    private boolean checkXCanvas() {
        try {
            return (canvasX < 4) && (canvasX > -4);
        } catch (Exception e) {
            return false;
        }
    }

    private void loadPoints() {
        dataBaseController.selectFromTable(pointBeans, point);
    }

    public List<PointBean> getPointBeans() {
        return pointBeans;
    }
}
