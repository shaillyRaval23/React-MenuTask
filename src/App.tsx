import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Configurations } from "./components/Configurations";
import { MenuIcon } from "@fluentui/react-icons-northstar";

const dummyData = [
  {
    key: "hamBurger",
    icon: <MenuIcon />,
  },
  {
    key: "Mega Menu 1",
    content: "Child 1",
    on: "hover",
    menu: {
      items: [
        {
          key: "Mega sub menu 1",
          content: "Smi 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "a1.1",
                content: "India",
              },
              {
                key: "s1.2",
                content: "Hello World 1",
              },
            ],
          },
        },
        {
          key: "smi2",
          content: "Sub Menu Item 2",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub2.1",
                content: "Child of child 1",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub2.1.1",
                      content: "Grand child child 2",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    key: "Mega Menu Item 2",
    content: "MegaItem2",
    on: "hover",
    menu: {
      items: [
        {
          key: "subMenu1.1",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub1.1.1",
                content: "Hello World 2.1",
              },
              {
                key: "sub1.1.2",
                content: "Asia",
              },
            ],
          },
        },
        {
          key: "sub1.2.1",
          content: "Mega Sub Menu 2",
        },
      ],
    },
  },
  {
    key: "Mega Menu Item 3",
    content: "MenuItem3",
    on: "hover",
    menu: {
      items: [
        {
          key: "subMegaMenu3",
          content: "Sub Mega Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "Hellow world 3",
              },
              {
                key: "submenuItem3.3",
                content: "Germany",
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.1",
          content: "Sub Menu Item 2",
        },
        {
          key: "submenuItem3.3.2",
          content: "Sub Menu Item 3",
        },
        {
          key: "submenuItem3.3.3",
          content: "Sub Menu Item 3",
        },
      ],
    },
  },
];

if(!JSON.parse(localStorage.getItem("dummyData") as any)) localStorage.setItem("dummyData", JSON.stringify(dummyData))

function App() {
  const [data, setData] = useState( JSON.parse(localStorage.getItem('dummyData') as any) || dummyData);
  const [selectedItem, setSelectedItem] = useState<any>({});

  return (
    <div className="App">
      <div className="topHeader"><Navbar data={data} /></div>

      <Routes>
        <Route
          path={"*"}
          element={<h1>There's no such page you are looking for</h1>}
        />
        <Route
          path={"/"}
          element={
            <Configurations
              setData={setData}
              selectedItem={selectedItem}
              data={data}
              setSelectedItem={setSelectedItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
