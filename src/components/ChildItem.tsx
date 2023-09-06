import { TriangleDownIcon, TriangleEndIcon } from "@fluentui/react-icons-northstar";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ChildItem = ({ items }: any) => {
    const [show, setShow] = useState(false);
    if (items?.menu?.items) {
      return (
        <li>
          <div>
              {show ? <TriangleDownIcon /> : <TriangleEndIcon />}
              {items.content}
              <br />
            {/* </Link> */}
            <ul style={{ display: show ? "block" : "none", paddingLeft: "30px" }}>
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
        <Link to={`/${items.content}`} onClick={() => setShow(!show)}>
          {items.content}
        </Link>
    </li>
    );
  };