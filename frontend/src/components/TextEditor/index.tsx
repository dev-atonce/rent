"use client";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsEraser,
  BsLink45Deg,
  BsCardImage,
  BsCodeSlash,
  BsTable,
} from "react-icons/bs";
import {
  RiListUnordered,
  RiListOrdered2,
  RiHeading2,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
  RiAlignJustify,
  RiIndentDecrease,
  RiIndentIncrease,
  RiFullscreenFill,
} from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

import {
  RxCaretDown,
  RxFontSize,
  RxLineHeight,
  RxDividerHorizontal,
} from "react-icons/rx";
import { CgUndo, CgRedo } from "react-icons/cg";
import { useEffect, useState, cloneElement } from "react";
import ModalDialog from "../main/Modal";
import ImageModal from "../main/Modal/ImageModal";
import { Button, useDisclosure } from "@nextui-org/react";
import "../../css/custom.scss";
import { List } from "antd";

const mediaImages = [
  { src: "Rectangle 114.png", alt: "Rectangle 114" },
  { src: "Rectangle 136.png", alt: "Rectangle 136" },
  { src: "Rectangle 137.png", alt: "Rectangle 137" },
  { src: "Rectangle 138.png", alt: "Rectangle 138" },
  { src: "Rectangle 139.png", alt: "Rectangle 139" },
  { src: "Rectangle 147.png", alt: "Rectangle 147" },
];
const fontSize = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
};
const minHeight = "25rem";
const DropdownUnorderedList = () => {
  return (
    <ul
      className="absolute rounded bg-white border z-20 border-slate-200 DropdownUnorderedList"
      style={{ top: "0", marginTop: "33px", width: "max-content" }}
    >
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="">
        Default
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="circle"
      >
        Circle
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="dot">
        Dot
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="square"
      >
        Square
      </li>
    </ul>
  );
};
const DropdownOrderedList = () => {
  return (
    <ul
      className="absolute rounded bg-white border z-20 border-slate-200 DropdownOrderedList"
      style={{ top: "0", marginTop: "33px", width: "max-content" }}
    >
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="decimal"
      >
        Default
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="lower-alpha"
      >
        Lower Alpha
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="lower-greek"
      >
        Lower Greek
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="lower-roman"
      >
        Lower Roman
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="upper-alpha"
      >
        Upper Alpha
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="upper-roman"
      >
        Upper Roman
      </li>
    </ul>
  );
};
const FontSizeList = ({ height }: any) => {
  return (
    <ul
      className="absolute rounded bg-white border z-20 border-slate-200"
      style={{
        top: "0",
        marginTop: "33px",
        width: "max-content",
        height: minHeight,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="8px">
        8px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="9px">
        9px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="10px">
        10px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="11px">
        11px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="12px">
        12px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="14px">
        14px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="16px">
        16px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="24px">
        24px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="30px">
        30px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="36px">
        36px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="48px">
        48px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="60px">
        60px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="72px">
        72px
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-size="96px">
        96px
      </li>
    </ul>
  );
};
const HeadingList = () => {
  return (
    <ul
      className="absolute rounded bg-white border z-20 border-slate-200"
      style={{ top: "0", marginTop: "33px", width: "max-content" }}
    >
      {/* {Array.from(fontSize).map((v)=>(<li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type={v}>Heading 1</li>))} */}
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="p">
        Paragraph
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h1">
        Heading 1
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h2">
        Heading 2
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h3">
        Heading 3
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h4">
        Heading 4
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h5">
        Heading 5
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="h6">
        Heading 6
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="pre">
        Pre
      </li>
      <li
        className="px-4 py-1 text-[14px] hover:bg-slate-100"
        data-type="blockquote"
      >
        Blockquote
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="code">
        Code
      </li>
    </ul>
  );
};
const LineHeightList = () => {
  return (
    <ul
      className="absolute rounded bg-white border z-20 border-slate-200"
      style={{ top: "0", marginTop: "33px", width: "max-content" }}
    >
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1">
        1
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="2">
        2
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1.1">
        1.1
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1.2">
        1.2
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1.3">
        1.3
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1.4">
        1.4
      </li>
      <li className="px-4 py-1 text-[14px] hover:bg-slate-100" data-type="1.5">
        1.5
      </li>
    </ul>
  );
};
const HoverSelect = (el: any) => {
  const current = el.target;
  const rowElement = current.parentNode;
  const parentNode = rowElement.parentNode;
  // const index = parseInt(current.getAttribute('data-index'));
  let x = 0;
  let y = 0;

  parentNode.childNodes.forEach((row: any, i: any) => {
    y = i;
    Array.from(row.children).map((col: any, j: any) => {
      x = j;
      if (current == col) {
        parentNode.childNodes.forEach((v: any, k: any) => {
          Array.from(v.children).map((vc: any, l: any) => {
            if (k <= y && l <= x) (vc as any).classList.add("bg-slate-300");
            else (vc as any).classList.remove("bg-slate-300");
          });
        });
        parentNode.querySelector(".x").innerHTML = x + 1;
        parentNode.querySelector(".y").innerHTML = y + 1;
        return false;
      }
    });
  });
};
// Create a box to select the table. (column x row)
const TableList = ({ btn }: any) => {
  let index = 0;
  return (
    <>
      <div
        className="absolute rounded bg-white border border-slate-200 p-2 z-20"
        style={{ top: "0", marginTop: "33px", width: "max-content" }}
      >
        {Array.from(Array(10).keys()).map((v: any, i: any) => (
          <div className="grid grid-cols-10 gap-1 mb-1" key={i}>
            {Array.from(Array(10).keys()).map((vs: any, j: any) => {
              if (j > 0) index++;
              //@ts-ignore
              return (
                <div
                  key={index}
                  className="border border-slate-200 w-4 h-4"
                  data-index={index}
                  onMouseOver={HoverSelect}
                  onClick={(el) => {
                    CreateTable(el);
                    btn.setOpenDropdown("");
                  }}
                  //   @ts-ignore
                  btn={btn}
                ></div>
              );
            })}
          </div>
        ))}
        <div className="w-full flex justify-center mt-2">
          <span className="mr-2 x">1</span> x <span className="ml-2 y">1</span>
        </div>
      </div>
    </>
  );
};

// Create table in to text content
const CreateTable = (el: any) => {
  const current = el.currentTarget;
  const parentNode = current.parentNode.parentNode;
  const x = parentNode.querySelector(".x").innerHTML;
  const y = parentNode.querySelector(".y").innerHTML;
  const TextEditor = parentNode.closest(".text-editor");
  const colWidth = 100 / x;
  const table = document.createElement("table");
  table.setAttribute("class", "border-collapse border border-slate-200 w-full");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  // thead
  let tr = document.createElement("tr");
  Array.from({ length: x }).map(() => {
    let th = document.createElement("th");
    th.setAttribute("width", `${colWidth}%`);
    th.setAttribute("class", "border border-slate-200 h-10");
    tr.append(th);
  });
  thead.append(tr);
  // tbody
  Array.from({ length: y - 1 }).map(() => {
    let tr = document.createElement("tr");
    Array.from({ length: x }).map(() => {
      let td = document.createElement("td");
      td.setAttribute("class", "border border-slate-200 h-10 p-1");
      tr.append(td);
    });
    tbody.append(tr);
  });
  //
  table.append(thead, tbody);
  TextEditor.querySelector('[contenteditable="true"]').append(table);
};

// Main Component
const TextEditor = ({ id }: any) => {
  const EditorId = id ? id : new Date().getTime();

  const [visible, setVisible] = useState<Boolean>(false);
  const [imgVisible, setImgVisible] = useState<Boolean>(false);
  const [row, setRow] = useState<any>();
  const [openDropdown, setOpenDropdown] = useState<String>("");
  const [height, setHeight] = useState<String>(minHeight);

  // const { onOpen, onOpenChange} = useDisclosure();

  const handler = () => setVisible(true);
  const imgModal = () => setImgVisible(true);
  const closeHandler = () => setVisible(false);
  const closeImgHandler = () => setImgVisible(false);

  const OpenDropdown = (list: String) => {
    if (openDropdown == list) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(list);
    }
  };
  const handleSetSelect = (e: any) => {
    const current = e.target.closest(".grid");
    e.target
      .closest(".bg-stripes-pink")
      .querySelector(".select-row")
      ?.classList.toggle("select-row");
    let selectedRow = current.getAttribute("data-content");
    current.classList.toggle("select-row");
    setRow(selectedRow);
  };

  const createRow = () => {
    if (row) {
      let newRow = JSON.parse(row);
      let editor = document.getElementById(EditorId);
      let editorBody = editor?.querySelector(".editor-body");
      const rowElement = document.createElement("div");
      rowElement.setAttribute(
        "class",
        "grid grid-cols-1 md:grid-cols-12 gap-4 relative pt-6 pb-4"
      );
      newRow.map((v: any, k: any) => {
        let column = document.createElement("div");
        column.setAttribute("class", v.col);
        if (v.content == "text") {
          column.setAttribute("contenteditable", "true");
          column.setAttribute("data-text", "text");
          column.classList.add("col-text");
        }
        if (v.content == "image") {
          column.onclick = imgModal;
          column.classList.add(
            "col-image",
            "bg-slate-100",
            "flex",
            "justify-center",
            "items-center",
            "cursor-pointer"
          );
          column.setAttribute("data-image", "true");
          column.setAttribute("data-text", "image");
        }
        rowElement.append(column);
      });
      const controlBox = document.createElement("div");
      controlBox.setAttribute(
        "class",
        "absolute bg-slate-300 row-panel right-0 top-0 overflow-hidden rounded-lg z-30"
      );
      controlBox.innerHTML = `
            <button class="rounded px-2 py-1 text-slate-800 hover:bg-slate-300" title="Soure code">
            <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-code" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="15"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </button>
            `;
      // <button class="rounded px-2 py-1 text-slate-800 hover:bg-slate-300" title="Move">
      //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" viewBox="0 0 492.001 492.001" xml:space="preserve">
      //         <g>
      //             <g>
      //                 <path d="M487.97,237.06l-58.82-58.82c-5.224-5.228-14.376-5.228-19.592,0l-7.436,7.432c-5.4,5.4-5.4,14.064,0,19.46l21.872,21.74    H265.206V68.396l21.808,22.132c5.224,5.22,14.216,5.22,19.428,0l7.36-7.432c5.404-5.404,5.356-14.196-0.044-19.596L254.846,4.444    c-2.6-2.592-6.088-4.184-9.804-4.184h-0.404c-3.712,0-7.188,1.588-9.784,4.184l-57.688,57.772    c-2.612,2.608-4.052,6.124-4.052,9.836c0,3.704,1.44,7.208,4.052,9.816l7.432,7.444c5.224,5.22,14.612,5.228,19.828,0.004    l22.368-22.132v159.688H67.814l22.14-22.008c2.608-2.608,4.048-6.028,4.048-9.732s-1.44-7.16-4.052-9.76l-7.436-7.42    c-5.22-5.216-14.372-5.2-19.584,0.008L4.034,236.856c-2.672,2.672-4.1,6.244-4.032,9.92c-0.068,3.816,1.356,7.388,4.028,10.056    l57.68,57.692c5.224,5.22,14.38,5.22,19.596,0l7.44-7.44c2.604-2.6,4.044-6.084,4.044-9.788c0-3.716-1.44-7.232-4.044-9.836    l-22.14-22.172H226.79V425.32l-23.336-23.088c-5.212-5.22-14.488-5.22-19.7,0l-7.5,7.44c-2.604,2.6-4.072,6.084-4.072,9.792    c0,3.704,1.424,7.184,4.028,9.792l58.448,58.456c2.596,2.592,6.068,4.028,9.9,4.028c0.024-0.016,0.24,0,0.272,0    c3.712,0,7.192-1.432,9.792-4.028l58.828-58.832c2.6-2.604,4.044-6.088,4.044-9.792c0-3.712-1.44-7.192-4.044-9.796l-7.44-7.44    c-5.216-5.22-14.044-5.22-19.264,0l-21.54,21.868V265.284H425.59l-23.096,23.132c-2.612,2.608-4.048,6.112-4.048,9.82    s1.432,7.192,4.048,9.8l7.44,7.444c5.212,5.224,14.372,5.224,19.584,0l58.452-58.452c2.672-2.664,4.096-6.244,4.028-9.916    C492.07,243.296,490.642,239.728,487.97,237.06z"/>
      //             </g>
      //         </g>
      //     </svg>
      // </button>

      const removeBtn = document.createElement("button");
      removeBtn.setAttribute("title", "Remove row");
      removeBtn.setAttribute(
        "class",
        "rounded px-2 py-1 text-slate-800 hover:bg-red hover:text-slate-100"
      );
      removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15 15" height="15px" id="Layer_1" version="1.0" viewBox="0 0 512 512" width="15px" xml:space="preserve"><polygon points="445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 "/></svg>`;
      controlBox.append(removeBtn);
      rowElement.prepend(controlBox);
      editorBody?.append(rowElement);
    }
  };
  const Heading = (select: String) => {
    document.getSelection();
    if (select != "") {
      document.execCommand("formatBlock", false, `<h1>`);
      // @ts-ignore
      selection.anchorNode.parentNode.setAttribute(
        "class",
        `${fontSize.h1} font-bold`
      );
    } else {
      document.execCommand("formatBlock", false, `<${select}>`);
    }
  };
  const TextBold = () => {
    document.getSelection();
    document.execCommand("bold", false, undefined);
  };
  const TextItalic = () => {
    document.getSelection();
    document.execCommand("italic", false, undefined);
  };

  const deleteRow = (e: any) => {
    e.closest(".grid").remove();
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const colText = e.target;
      // @ts-ignore
      if (colText.nodeName == "th") {
        console.log(colText);
      }
      // @ts-ignore
      const removeRowBtn = e.target.closest(".row-panel");
      if (removeRowBtn) {
        deleteRow(removeRowBtn);
      }
    });
  }, []);

  return (
    <>
      <ModalDialog
        visible={visible}
        closeHandler={closeHandler}
        select={{ row, handleSetSelect, createRow, EditorId }}
        title="Add Row"
      />
      <ImageModal
        imgVisible={imgVisible}
        closeImgHandler={closeImgHandler}
        images={mediaImages}
        title="Image"
      />
      <div
        id={EditorId}
        className="rounded-lg border border-stroke bg-white dark:border-strokedark dark:bg-boxdark h-full overflow-hidden"
      >
        <div className="text-editor">
          <div className="header">
            <div className="tools flex justify-stretch p-1">
              <div className="flex ">
                <div className="group flex border-r pr-1 border-slate-300">
                  <button
                    type="button"
                    title="Undo"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <CgUndo onClick={() => document.execCommand("undo")} />
                  </button>
                  <button
                    type="button"
                    title="Undo"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <CgRedo onClick={() => document.execCommand("redo")} />
                  </button>
                </div>
                <div className="group flex border-r px-1 border-slate-300">
                  <button
                    type="button"
                    title="Bold"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsTypeBold onClick={TextBold} />
                  </button>
                  <button
                    type="button"
                    title="Italic"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsTypeItalic onClick={TextItalic} />
                  </button>
                  <button
                    type="button"
                    title="Underline"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsTypeUnderline
                      onClick={() => {
                        document.execCommand("underline");
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    title="Underline"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsTypeStrikethrough
                      onClick={() => {
                        document.execCommand("strikethrough");
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    title="Clear Formatting"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsEraser />
                  </button>
                </div>
                <div className="group flex border-r px-1 border-slate-300">
                  <button
                    type="button"
                    title="Align left"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiAlignLeft
                      onClick={() => {
                        document.execCommand("justifyLeft");
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    title="Align center"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiAlignCenter
                      onClick={() => {
                        document.execCommand("justifyCenter");
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    title="Align right"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiAlignRight
                      onClick={() => {
                        document.execCommand("justifyRight");
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    title="Align justify"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiAlignJustify
                      onClick={() => document.execCommand("justifyFull")}
                    />
                  </button>
                </div>
                <div className="group flex border-r px-1 border-slate-300">
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Unordered"
                      className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2"
                    >
                      <RiListUnordered
                        onClick={() => {
                          document.execCommand("insertUnorderedList");
                        }}
                      />
                    </button>
                    <div
                      title="Unordered"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("unordered")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "unordered" && <DropdownUnorderedList />}
                  </div>
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Ordered"
                      className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2"
                    >
                      <RiListOrdered2
                        onClick={() => {
                          document.execCommand("insertOrderedList");
                        }}
                      />
                    </button>
                    <div
                      title="Ordered"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("ordered")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "ordered" && <DropdownOrderedList />}
                  </div>
                  <button
                    type="button"
                    disabled={true}
                    title="Decrease Indent"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 disabled:opacity-75 disabled:bg-white disabled:text-slate-300 p-2"
                  >
                    <RiIndentDecrease
                      onClick={() => document.execCommand("outdent")}
                    />
                  </button>
                  <button
                    type="button"
                    title="Increase Indent"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiIndentIncrease
                      onClick={() => {
                        document.execCommand("indent");
                      }}
                    />
                  </button>
                </div>
                <div className="group flex border-r px-1 border-slate-300">
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Font Size"
                      className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2"
                    >
                      <RxFontSize />
                    </button>
                    <div
                      title="Font Size"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("fontSize")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "fontSize" && <FontSizeList />}
                  </div>
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Heading"
                      className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2"
                    >
                      <RiHeading2 />
                    </button>
                    <div
                      title="Heading"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("heading")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "heading" && <HeadingList />}
                  </div>
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Heading"
                      className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2"
                    >
                      <RxLineHeight />
                    </button>
                    <div
                      title="Heading"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("lineHeight")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "lineHeight" && <LineHeightList />}
                  </div>
                </div>
                <div className="group flex border-r px-1 border-slate-300">
                  <button
                    type="button"
                    title="Horizontal Line"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RxDividerHorizontal />
                  </button>
                  <div className="tool-item relative flex items-center border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                    <button
                      type="button"
                      title="Heading"
                      className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2"
                    >
                      <BsTable />
                    </button>
                    <div
                      title="Heading"
                      className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center"
                      style={{ height: "32px" }}
                      onClick={() => OpenDropdown("table")}
                    >
                      <RxCaretDown />
                    </div>
                    {openDropdown == "table" && (
                      <TableList btn={{ setOpenDropdown }} />
                    )}
                  </div>
                  <button
                    type="button"
                    title="Insert Link"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsLink45Deg />
                  </button>
                  <button
                    type="button"
                    title="Insert Image"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsCardImage />
                  </button>
                </div>
                <div className="px-1">
                  <button
                    type="button"
                    title="Exist Full Screen"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <BsCodeSlash />
                  </button>
                </div>
              </div>
              <div className="w-full"></div>
              <div className="flex-none">
                <div className="group flex">
                  <button
                    type="button"
                    title="Full Screen"
                    className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2"
                  >
                    <RiFullscreenFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="editor-body border-t border-slate-300 min-h-100 p-2 focus:outline-none focus-visible:outline-none"
            suppressContentEditableWarning={true}
            contentEditable={false}
            aria-disabled="false"
            tabIndex={-1}
            spellCheck="false"
          >
            <p></p>
          </div>
          <div className="editor-footer p-2 border-slate-200 border-t">
            <div id="output"></div>
            <Button
              onPress={handler}
              className="bg-primary text-white hover:text-slate-200 hover:bg-blue-500 rounded-lg p-2 text-sm font-bold"
            >
              Add row
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextEditor;
