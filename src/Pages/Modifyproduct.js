import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { product } from "../firebase";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
function Modifyproduct() {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    onSnapshot(product, (e) => {
      const post = [];
      e.docs.map((s) => {
        post.push({ ...s.data(), id: s.id });
      });
      setPro(post);
    });
  });

  const handleRoute = (e) => {
    window.location.href = e;
  };

 

  const editHandler = (e) => {
    window.location.href = `/manage/${e}`;
  };

  const deleteHandler = (e) => {
    const tempc = doc(product, e);
    deleteDoc(tempc).then(() => {
      alert("deleted sucessfully");
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#Ff7a00",
            marginBottom: "30px",
            fontWeight: "600",
            marginTop: "50px",
          }}
        >
          Our Products
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {pro &&
            pro.map((e) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#e6e6e6",
                    padding: "15px",
                    marginBottom: "20px",
                    padding: "15px",
                  }}
                >
                  <img
                    src={e.img}
                    style={{
                      width: "250px",
                      height: "200px",
                      marginRight: "20px",
                    }}
                    onClick={() => handleRoute(e.name)}
                  ></img>
                  <div>
                    <h4 style={{ textAlign: "center" }}>{e.name}</h4>
                    <h6
                      style={{
                        width: "400px",
                        fontWeight: "500",
                        marginTop: "-1px",
                      }}
                    >
                      {e.desc}
                    </h6>
                    <h5 style={{ marginTop: "-2px" }}>Size: {e.size} Towel</h5>
                    <h5 style={{ marginTop: "-2px" }}>length: {e.length}</h5>
                    <h5 style={{ marginTop: "-2px" }}>Prize: RS.{e.prize}</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "20px",
                    }}
                  >
                   
                    <EditIcon
                      style={{
                        fontSize: "30px",
                        marginBottom: "10px",
                        cursor: "pointer",
                        color:'black'
                      }}
                      onClick={() => editHandler(e.id)}
                    />
                  
                    <DeleteIcon
                      style={{ fontSize: "30px", cursor: "pointer" }}
                      onClick={() => deleteHandler(e.id)}
                    />
                  </div>
                 
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Modifyproduct;
