import "./App.css";
import React, { useState } from "react";
import listData from "./ListData";
import subListData from "./SubData";
import allData from "./AllData";

export default function App() {
  const [favorite, setFavorite] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [data, setData] = useState([
    { id: 1, userId: 1, subName: "Aerobot", description: "No Data" },
    { id: 2, userId: 1, subName: "To Do", description: "No Data" },
    { id: 3, userId: 1, subName: "My Dashboard", description: "No Data" },
    { id: 4, userId: 1, subName: "Messenger", description: "No Data" },
    { id: 5, userId: 1, subName: "Maps", description: "No Data" },
    { id: 6, userId: 1, subName: "Notifications", description: "No Data" },
    { id: 7, userId: 1, subName: "Data Sources", description: "No Data" },
    { id: 8, userId: 1, subName: "Settings", description: "No Data" },
  ],)

  const handleClick2 = (ids) => {
    console.log([...favorite, ids]);
    setFavorite([...favorite, ids]);
    // if (!ids?.some((alreadyFavorite) => alreadyFavorite.userId === ids.userId)) {
    //   // this.setState({
    //   //   favorites: [...this.state.favorites, favorite]
    //   // });
    //   setFavorite([...favorite, ids]);
    // }
  };
const handleClick = () => {
  setToggle(!toggle)
  console.log(toggle)
}
const handleSecond = (e) => {
  console.log(toggle2)
  setToggle2(!toggle2, e)
}
console.log(data)
  return (
    <div className="App">
      <button onClick={() => handleClick()}>Click</button>
      {toggle ? (<div class="first-container">
        <div class="inside-container">
          <ul class="menu-Item">
            <li>Recently Visited</li>
            <li>Favorites</li>
            <hr />
            {allData.map((item, index) => {
              return (
                <li key={index} onClick={(e) => setData(item.subMenu)}>
                  <div class="item_inside">
                    <div>
                      <i class="fa-solid fa-house"></i>
                      <span class="icon-icon">{item.name}</span>
                    </div>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </li>
              );
            })}
          </ul>
          {toggle2 ? (<div class="menu-panel">
            <div class="menu-panel-expand">
              {/* {subListData.map((item, index) => {
                return (
                  <> */}
                    <h4 class="header-name">
                      <i class="fa-solid fa-house"></i>
                      <span class="headerText">{data?.name}</span>
                    </h4>
                    <ul class="menu-Item-Panel">
                      {data?.map((subItem, index) => {
                        return (
                          <li>
                            <div
                              class="header-name header-Tile"
                              // onClick={() => handleClick2(subItem.userId)}
                            >
                              <i
                                // class={
                                //   favorite.includes(subItem.userId) > 0
                                //     ? "fa-solid fa-star"
                                //     : "fa-regular fa-star"
                                // }
                              ></i>
                              <div>
                                <span class="headerText headerBold">
                                  {subItem?.subName}
                                </span>
                                {/* <div class="description">{subItem.description}</div> */}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  {/* </>
                );
              })} */}
            </div>
          </div>
          ):""}
        </div>
      </div>
      ): ""}
    </div>
  );
}
