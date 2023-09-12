import {
  AddIcon,
  Box,
  Header,
  Button,
  Input,
  SearchIcon,
  Text
} from "@fluentui/react-northstar";
import { useCallback, useEffect, useState } from "react";
import { ChildItem } from "./ChildItem";
import { InfoIcon } from "@fluentui/react-northstar";

const ParentComponent = ({ data, setData, selectedItem, setSelectedItem }: any) => {
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [show, setShow] = useState(false);
  const [searchData, setSearchData] = useState(false);
  const [success, setSuccess] = useState(false)

  const recursiveSearch: any = useCallback(
    (array: any, letter: string) =>  {
  
      const result = [];
      for (const obj of array) {
        if (obj.content?.toLowerCase().includes(letter?.toLowerCase())) {
          result.push(obj);
        }
        if (obj.menu?.items.length > 0) {
          result.push(...recursiveSearch(obj.menu?.items, letter));
        }
      }
      return result;
    },
    []
  ) 
  useEffect(() => {
    const arr = recursiveSearch(data, search);
    setSearchedItems(arr);
  }, [data, recursiveSearch, search]);

  const handleSubmit = () => {
    if (Object.keys(selectedItem).length === 0) {
      let dummyArr = [...data];
      dummyArr.push({
        key: "adfa",
        content: search,
        on: "hover",
        id: "2",
      });
      setSearch("")
      setSuccess(true)
      localStorage.setItem("dummyData", JSON.stringify(dummyArr))
      setData(dummyArr);
    } else {
      if (selectedItem.menu === undefined) {
        selectedItem.menu = {};
        selectedItem.menu.items = [];
      }
      selectedItem.menu.items.push({
        key: (Math.random() * 100).toString() ,
        content: search,
        on: "hover",
        id: "202",
      });
      setSelectedItem(selectedItem);
      setSearch("")
      setSuccess(true)
      // localStorage.setItem("dummyData", JSON.stringify(selectedItem))
    }
  };

  useEffect(() => {}, [selectedItem]);

  useEffect(() => {
    if(success){
      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    }
  }, [success])

  return (
    <div className="mainTempContainer">
      {
        success &&
        <div
          style={{
            backgroundColor:"#f1dc86",
            padding:"5px 20px",
            borderRadius:"3px", display:"flex", alignItems:"center", justifyContent:"flex-start", textAlign:"left"
          }}
        >
          <InfoIcon style={{marginRight:"5px", color:"#9d7e00"}}/>
          Child Item added successfully
        </div>
      }
      <Box className="mainTempContainer-head">
        <Header as="h3" content="Configure Navigation" />
        <Text content="The mega menu can be configured here" />
      </Box>
      <Box className="mainTempContainer-subHead">
        <Header as="h4" content="Add Navigation Entries" style={{marginBottom:"5px", marginTop:"0px"}}/>
        <Text content="Here's an example of how a section can be used as group inputs" />
      </Box>
      <Box>
        <Text>
          <b>Selected Mega Menu Item:</b>
          <span style={{ backgroundColor:"#ccc", borderRadius:"5px", marginLeft:"5px"}}>
            {selectedItem.content &&
              selectedItem?.content}
          </span>
        </Text>
      </Box>
      <Box>
        {show ? (
          <div className="mainInput flex" style={{gap:"10px"}}>
            <Input
              type="text"
              placeholder="Enter menu child..."
              onChange={(e: any) => setSearch(e.target.value)}
              value={search}
            />
            <Button
              loader="Bypass firewall"
              primary
              icon={<AddIcon />}
              onClick={() => handleSubmit()}
            />
            <Button
              loader="Bypass firewall"
              primary
              content="Go back"
              onClick={() => {
                setShow(false)
                setSearch("")
              }}
            />
          </div>
        ) : (
          <>
            <div className="flex" style={{gap:"10px"}}>
              <Button
                content={"Create new Menu Item"}
                loader="Bypass firewall"
                primary
                icon={<AddIcon />}
                onClick={() => {
                  setShow(true)
                  setSearch("")
                }}
                iconPosition="before"
              />
              <div className="mainSearchInput">
                <Input
                  type="text"
                  role="search"
                  placeholder="Search Menu Items"
                  onChange={(e: any) => setSearch(e.target.value)}
                  onFocus={() => setSearchData(true)}
                />
                <span className="mainSearchInput-btn">
                  <SearchIcon />
                </span>
                {
                  searchData &&
                  <Box className="mainSearchInput-data">
                    {searchedItems?.map((el: any, index) => {
                      return (
                        <Box
                          key={index}
                          content={el?.content}
                          onClick={() => {
                            setSelectedItem(el);
                            setShow(true);
                            setSearch("")
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      );
                    })}
                  </Box>
                }
              </div>
            </div>
          </>
        )}
      </Box>
    </div>
  );
};

export default ParentComponent;
