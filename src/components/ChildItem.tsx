import { TriangleDownIcon, TriangleEndIcon } from "@fluentui/react-icons-northstar";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ChildItem = ({ items }: any) => {
    const [show, setShow] = useState(false);
    if (items?.menu?.items) {
      return (
        <li>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', cursor: "pointer"}}>
              {show ? <span style={{color: "#0d1187"}}><TriangleDownIcon /></span> : <span style={{color: "#0d1187"}}><TriangleEndIcon /></span>}
              <span onClick={() => setShow(!show)}>{items.content}</span>
              </div>
            {/* </Link> */}
            <ul style={{ display: show ? "block" : "none", paddingLeft: show ? "30px" : "0px" }}>
              {items?.menu?.items?.map((elem: any, index: number) => (
                <React.Fragment key={index}>
                  <ChildItem  items={elem} />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </li>
      );
    }
  
    return (
      <li style={{ minHeight: "25px", paddingLeft: "25px" }}>
        <Link to={`/${items.content}`} target="_blank" onClick={() => setShow(!show)}>
          {items.content}
        </Link>
    </li>
    );
  };