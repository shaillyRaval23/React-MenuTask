import { Menu } from "@fluentui/react-northstar";
import { useState } from "react";
import { MenuIcon, MoreIcon } from "@fluentui/react-northstar";

const Navbar = ({ data }: any) => {
  const types = ["Sub Menu Item 1", "Sub Menu Item 2", "Sub Menu Item 3"];
  const [active, setActive] = useState(types[0]);

  return (
    <>
      {/* <Menu defaultActiveIndex={0} items={data} /> */}
      <div className="custom-mega-menu">
        <MenuIcon className="icon"/>
        <ul className="main">
          {data?.map((el: any, index: number) => {
            return (
              <li>
                <a href={`/${el?.content}`} target="blank">{el?.content}</a>
                {el?.menu?.items.length && <div className="submenu">
                  <div className="submenu-inner">
                    <div className="submenu-left">
                      <div className="tabs">
                        <div className="tabs-nav">
                          {el?.menu?.items?.map((type: any) => (
                            <div
                              className={`${
                                active === type?.key
                                  ? "nav-item active"
                                  : "nav-item"
                              }`}
                              id={type}
                              key={type}
                              onMouseOver={() => setActive(type.key)}
                            >
                              {type?.content}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SUB MENU RIGHT */}
                    <div className="submenu-right">
                      <div className="tabs-content" style={{width: "100%"}}>
                        {el?.menu?.items?.map((subMenu: any, ind: number) => {
                          return (
                            <>
                              {active === subMenu.key && (
                                <div className="submenu-right-inner">
                                  {subMenu?.menu?.items?.map(
                                    (subSubMenu: any, i: number) => {
                                      return (
                                        <div className="col-6">
                                          <h3>{subSubMenu?.content}</h3>
                                          <ul>
                                            {
                                              subSubMenu?.menu?.items?.map((subSubSubMenu: any, inde: number) => {
                                                return (
                                                  <li>
                                                    <a href={`/${subSubSubMenu?.content}`} target="blank">{subSubSubMenu?.content}</a>
                                                  </li>
                                                )
                                              })
                                            }
                                          </ul>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>}
                
              </li>
            );
          })}
        </ul>
        <MoreIcon className="icon"/>
      </div>
    </>
  );
};

export default Navbar;
