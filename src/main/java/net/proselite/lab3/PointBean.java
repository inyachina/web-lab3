package net.proselite.lab3;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;


@ApplicationScoped
@ManagedBean(name = "point")
public class PointBean implements Serializable {
    private float x;
    private float y;
    private float r;
    private boolean res;
    private String time;
    private long id;

//    public float getCanvasX() {
//        return canvasX;
//    }
//
//    public void setCanvasX(float canvasX) {
//        System.out.println("set xCanvas: " + canvasX);
//        this.canvasX = canvasX;
//    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public PointBean() {
        r = 1;
    }

    public boolean isRes() {
        return res;
    }

    public void setRes(boolean res) {
        this.res = res;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        System.out.println("set y: " + y);
        this.y = y;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        System.out.println("set x: " + x);
        this.x = x;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        System.out.println("set r: " + r);
        this.r = r;
    }

    @Override
    public String toString() {
        return " " + this.x +
                " " + this.y +
                " " + this.r +
                " " + this.res;
    }

    private boolean validate() {
        try {
            return (y <= 5) && (y >= -3) && (x >= -4) && (x <= 4) && (r >= 1) && (r <= 4);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    protected void check() {
        if (validate()) {
            float x = this.x / r;
            float y = this.y / r;
            if (((x / 49) * (x / 49)
                    *
                    sqrt(
                            (ab(ab(x) - 3))
                                    / (ab(x) - 3))
                    +
                    (y / 3) * (y / 3) *
                            sqrt(
                                    ab(y + 3 * sqrt(33) / 7) / (y + 3 * sqrt(33) / 7)
                            )
                    - 1)
                    * (
                    (ab(x / 2) -
                            ((3 * sqrt(33) - 7) / 112)
                    ) * (x * x)
                            - 3 +
                            sqrt(
                                    1 - (ab(ab(x) - 2) - 1) * (ab(ab(x) - 2) - 1)
                            ) - y)
                    *
                    (3 * sqrt(
                            ab(
                                    (ab(x) - 1) * (ab(x) - 0.75)
                            ) /
                                    ((1 - ab(x)) * (ab(x) - 0.75))
                    )
                            - 8 * ab(x) - y)
                    *
                    (3 * ab(x)
                            + 0.75 *
                            sqrt(
                                    ab(
                                            (ab(x) - 0.75) * (ab(x) - 0.5)
                                    ) /
                                            ((0.75 - ab(x)) * (ab(x) - 0.5))
                            ) - y)
                    *
                    (2.25 * sqrt(
                            (x - 0.5) * (x + 0.5) / (((0.5 - x) * (0.5 + x)))
                    ) - y)
                    *
                    (6 * sqrt(10) / 7 +
                            (1.5 - 0.5 * ab(x))
                                    * sqrt(
                                    ab(ab(x) - 1)
                                            / (ab(x) - 1)
                            ) -
                            6 * sqrt(10) / 14 * sqrt(
                                    4 -
                                            (ab(x) - 1) * (ab(x) - 1)
                            )
                            - y) <= 0)
                res = true;
            else res = false;
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    private float sqrt(double x) {
        try{
            return (float) Math.sqrt(x);
        }
        catch (Exception e){
            return (float) Math.sqrt(-x);
        }
    }

    private double ab(double x) {
        return x > 0 ? x : -x;
    }
}