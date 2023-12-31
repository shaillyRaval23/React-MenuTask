import MainSection from "./ParentComponent";
import { ChildItem } from "./ChildItem";

export const Configurations = ({ selectedItem, setSelectedItem, data, setData }: any) => {
  console.log(data, 'THIS IS DATA')
  return (
    <>
      <div className="container">
        <div className="leftConfigContainer">
          <div className="configNavMain">
            <div className="configNavMain-head">
              <h2>Settings</h2>
              <ol className="settingMegaMenu">
                {data?.map((el: any, index: number) => {
                  return <ChildItem items={el} key={index} />;
                })}
              </ol>
            </div>
          </div>
          <MainSection
            data={data}
            setData={setData}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </>
  );
};
