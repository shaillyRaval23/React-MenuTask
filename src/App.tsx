import React, {  useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Configurations } from "./components/Configurations";


const dummyData = [
  {
    key: "Mega Menu 1",
    content: "MenuItem 1",
    on: "click",
    menu: {
      items: [
        {
          key: "Mega sub menu 1",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "a1.1",
                content: "Hello World 1",
                menu: {
                  items: [
                    {
                      key: "s1.2.1",
                      content: "HRweb",
                    },
                    {
                      key: "s1.2.2",
                      content: "Benefits",
                    },
                    {
                      key: "s1.2.3",
                      content: "Learning Portal",
                    },
                    {
                      key: "s1.2.4",
                      content: "Internal Jobs",
                    },
                    {
                      key: "s1.2.5",
                      content: "Company Store",
                    },
                  ],
                }
              },
              {
                key: "s1.2",
                content: "Hello World 2",
                menu: {
                  items: [
                    {
                      key: "s1.2.1",
                      content: "HRweb",
                    },
                    {
                      key: "s1.2.2",
                      content: "Benefits",
                    },
                    {
                      key: "s1.2.3",
                      content: "Learning Portal",
                    },
                    {
                      key: "s1.2.4",
                      content: "Internal Jobs",
                    },
                    {
                      key: "s1.2.5",
                      content: "Company Store",
                    },
                  ],
                }
              },
              {
                key: "s1.3",
                content: "Hello World 3",
                menu: {
                  items: [
                    {
                      key: "s1.2.1",
                      content: "HRweb",
                    },
                    {
                      key: "s1.2.2",
                      content: "Benefits",
                    },
                    {
                      key: "s1.2.3",
                      content: "Learning Portal",
                    },
                    {
                      key: "s1.2.4",
                      content: "Internal Jobs",
                    },
                    {
                      key: "s1.2.5",
                      content: "Company Store",
                    },
                  ],
                }
              },
              {
                key: "s1.4",
                content: "Hello World 4",
                menu: {
                  items: [
                    {
                      key: "s1.2.1",
                      content: "HRweb",
                    },
                    {
                      key: "s1.2.2",
                      content: "Benefits",
                    },
                    {
                      key: "s1.2.3",
                      content: "Learning Portal",
                    },
                    {
                      key: "s1.2.4",
                      content: "Internal Jobs",
                    },
                    {
                      key: "s1.2.5",
                      content: "Company Store",
                    },
                  ],
                }
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
                content: "Global warming 1",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub2.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub2.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub2.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub2.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub2.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub2.2",
                content: "Global warming 2",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub2.2.1",
                      content: "Environment",
                    },
                    {
                      key: "sub2.2.2",
                      content: "Trees",
                    },
                    {
                      key: "sub2.2.3",
                      content: "Sun",
                    },
                    {
                      key: "sub2.2.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub2.2.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub2.3",
                content: "Global warming 3",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub2.3.1",
                      content: "Environment",
                    },
                    {
                      key: "sub2.3.2",
                      content: "Trees",
                    },
                    {
                      key: "sub2.3.3",
                      content: "Sun",
                    },
                    {
                      key: "sub2.3.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub2.3.5",
                      content: "Pollution",
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
                content: "Australia",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub1.1.2",
                content: "Asia",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub1.1.3",
                content: "Africa",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub1.1.4",
                content: "Europe",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "sub1.2.1",
          content: "Sub Menu Item 2",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub1.1.1",
                content: "Australia",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "sub1.1.4",
                content: "Europe",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
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
    key: "Mega Menu Item 3",
    content: "MenuItem3",
    on: "hover",
    menu: {
      items: [
        {
          key: "subMegaMenu3",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "Hello World 3",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "Germany",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.1",
          content: "Sub Menu Item 2",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "China",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "South Korea",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "North Korea",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.2",
          content: "Sub Menu Item 3",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "Canada",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "USA",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "UAE",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "Arabia",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.3",
          content: "Sub Menu Item 4",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "India",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.3",
                      content: "Sun",
                    },
                    {
                      key: "sub1.1.4",
                      content: "Glacier",
                    },
                    {
                      key: "sub1.1.5",
                      content: "Pollution",
                    },
                  ],
                },
              },
              {
                key: "submenuItem3.3",
                content: "UK",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub1.1.1",
                      content: "Environment",
                    },
                    {
                      key: "sub1.1.2",
                      content: "Trees",
                    },
                    {
                      key: "sub1.1.3",
                      content: "Sun",
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
];

if (!JSON.parse(localStorage.getItem("dummyData") as any))
  localStorage.setItem("dummyData", JSON.stringify(dummyData));

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dummyData") as any) || dummyData
  );
  const [selectedItem, setSelectedItem] = useState<any>({});

  return (
    <div className="App">
      <div className="topHeader">
        <Navbar data={data} />
      </div>

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
