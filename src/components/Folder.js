import React, { useState } from "react";

const Folder = ({ itemsList }) => {
  const [visible, setVisible] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [folderData, setFolderData] = useState(itemsList);
  const [isFolder, setIsFolder] = useState("");

  const handleClick = () => {
    setVisible(!visible);
  };

  const showInputField = (value) => {
    setShowInput(!showInput);
    setIsFolder(value);
  };

  const addFolder = (e) => {
    if (e.key === "Enter") {
      let folder = folderData;
      let folderItem = {
        id: new Date(),
        name: e.target.value,
        isFolder: true,
        items: [],
      };
      folder.items.push(folderItem);
      setFolderData(folder);
      setShowInput(false);
      setVisible(true);
    }
  };

  const addFile = (e) => {
    if (e.key === "Enter") {
      let folder = folderData;
      let folderItem = {
        id: new Date(),
        name: e.target.value,
        isFolder: false,
      };
      folder.items.push(folderItem);
      setFolderData(folder);
      setShowInput(false);
      setVisible(true);
    }
  };

  if (itemsList) {
    return (
      <div>
        <div className="folder_name">
          <span onClick={() => handleClick()}>📁{itemsList.name}</span>
          <div>
            <button onClick={() => showInputField("folder")}>Folder+</button>
            <button onClick={() => showInputField("file")}>File+</button>
          </div>
        </div>

        <div>
          {showInput && (
            <input
              className="input_container"
              onKeyDown={(e) => {
                isFolder === "folder" ? addFolder(e) : addFile(e);
              }}
            ></input>
          )}
          {visible &&
            folderData.items.map((item) =>
              item.items ? (
                <div key={item.id} className="folder_items">
                  <Folder itemsList={item} />
                </div>
              ) : (
                <span key={item.id} className="folder_items">
                  📄{item.name}
                </span>
              )
            )}
        </div>
      </div>
    );
  } else return;
};

export default Folder;
