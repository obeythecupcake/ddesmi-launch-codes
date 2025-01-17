package com.ddesmi.dywaboh.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Images {

    //PROPERTIES
    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    private String imageFilePath;

    @NotBlank
    private Date uploadDate;

    //GETTERS AND SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageFilePath() {
        return imageFilePath;
    }

    public void setImageFilePath(String imageFilePath) {
        this.imageFilePath = imageFilePath;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }

    //CONSTRUCTORS
    public Images() {
    }

}