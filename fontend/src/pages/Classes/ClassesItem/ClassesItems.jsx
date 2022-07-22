import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ClassesItem from "./ClassesItem";

export default function ClassesItems() {
  const [classesItems, setClassesItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/classes").then((data) => {
      // console.log(data.data.clsss);
      setClassesItems(data.data.clsss);
    });
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {classesItems.map((item) => (
          <ClassesItem key={item.id} item={item}>
            {" "}
          </ClassesItem>
        ))}
      </div>
    </div>
  );
}
