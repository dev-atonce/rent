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
import { Button } from "@nextui-org/react";
import "../../css/Custom.scss";
import { env, title } from "process";
import { log } from "console";


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
  TextEditor.querySelector(".txt-remark").append(table);
};

// Main Component
const TextEditor = ({ id, dataId, dataType }: any) => {
  const EditorId = id ? id : new Date().getTime();

  
  const [visible, setVisible] = useState<Boolean>(false);
  const [imgVisible, setImgVisible] = useState<Boolean>(false);
  const [row, setRow] = useState<any>();
  const [openDropdown, setOpenDropdown] = useState<String>("");
  const [imgSelect, setImgSelect] = useState<any>([]);
  const [imgCount, setImgCount] = useState<any>(0);
  const [imgTab, setImgTab] = useState<String>("current");
  const [preview, setPreview] = useState<any>('');
  const [alt, setAlt] = useState<any>('');
  const [width, setWidth] = useState<any>('');
  const [height, setHeight] = useState<any>('');
  const [className, setClassName] = useState<any>('');
  const [title, setTitle] = useState<any>('');
  const [selected, setSelected] = useState<any>([]);

  // const { onOpen, onOpenChange} = useDisclosure();

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);
  const closeImgHandler = () => setImgVisible(false);

  const imgModal = (e: any) => {
    setImgVisible(true);
    remark(e.currentTarget);
    const img = e.currentTarget.querySelector('img');
    if(img.getAttribute('alt')) setAlt(img.getAttribute('alt'));
    if(img.getAttribute('width')) setWidth(img.getAttribute('width'));
    if(img.getAttribute('height')) setHeight(img.getAttribute('height'));
    if(img.getAttribute('class')) setClassName(img.getAttribute('class'));
    if(e.target.querySelector('.img-title')) setTitle(e.target.querySelector('.img-title').innerText);
    if(img.getAttribute('src')) setPreview(img.getAttribute('src'));
  };

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
  // select image
  const Select = (el: any) => {
    const current = el.currentTarget;
    if (current.classList.contains("image-select")) {
      current.classList.remove("image-select");
      imgSelect.map((v: any, k: Number) => {
        if (v == current.querySelector("img").getAttribute("src")) {
          imgSelect.splice(k, 1);
        }
      });
      setImgCount(imgCount - 1);
    } else {
      current.classList.add("image-select");
      imgSelect.push(current.querySelector("img").getAttribute("src"));
      setImgCount(imgCount + 1);
    }
    setImgSelect(imgSelect);
  };
  const imgUnselect = () => {
    setImgSelect([]);
    console.log(document.querySelectorAll(".image-select"));
    document.querySelectorAll(".image-select").forEach((v: any) => {
      v.classList.remove("image-select");
    });
  };
  const remark = (e: any) => {
    document.querySelector("img-remark")?.classList.remove("img-remark");
    if (e) e.classList.toggle("img-remark");
  };
  const textRemark = (e: any) => {
    document.querySelector(".txt-remark")?.classList.remove("txt-remark");
    if (e.currentTarget) {
      e.currentTarget.classList.toggle("txt-remark");
      e.currentTarget.focus();
      e.preventDefault();
    }
  };
  const previewImg = (e:any) => {
    const input = e.currentTarget;
    const value = input.value;
    setPreview(value)
  }
  const copyToSelect = () => {
    setImgTab('current');
    imgSelect.map((v: any, k: any) => { setPreview(v) });
  }
  const insertImg = (el:any) => {
    const preview = el.currentTarget.closest('.modal-content').querySelector('.preview');
    const remark = document.querySelector(".img-remark");
    if (remark) {
        remark.querySelectorAll("img")?.forEach((v) => { v.remove() });
      // imgSelect.map((v: any, k: any) => {
        let img = document.createElement("img");
        img.setAttribute("src", preview.src);
        img.setAttribute("class", "w-full h-full");
        if(alt) img.setAttribute("alt", alt);
        if(width) img.setAttribute("width", width);
        if(height) img.setAttribute("height", height);
        if(className) img.setAttribute("class", className);
        if(title) {
            remark.classList.remove(...['flex','justify-center','items-center']);
            remark.querySelector(".img-title")?.remove();
            const newNode = document.createElement("div");
            newNode.classList.add("img-title","text-center");
            newNode.innerText = title;
            remark.append(img,newNode);
        }else{
          remark.append(img);
        }
        // });
        closeImgHandler();
        remark.classList.remove("img-remark");
        setImgSelect([]);
        setPreview('');
      
    }
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
          column.onclick = textRemark;
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
          rowElement.append(column);
        }
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
      const removeBtn = document.createElement("button");
      removeBtn.setAttribute("title", "Remove row");
      removeBtn.setAttribute(
        "class",
        "rounded px-2 py-1 text-slate-800 hover:bg-red hover:text-slate-100"
      );
      removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15 15" height="15px" id="Layer_1" version="1.0" viewBox="0 0 512 512" width="15px" xml:space="preserve"><polygon points="445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 "/></svg>`;
      controlBox.append(removeBtn)
      rowElement.prepend(controlBox);
      editorBody?.append(rowElement);
    }
  };


  const upload = async (e:any) => 
  {
    const setSelectedImage = document.querySelector('.modal-content')?.querySelectorAll('img');
    if(setSelectedImage){
      let formData = new FormData();
      let files = e.currentTarget.closest('.modal-content').querySelector('[type="file"]').files;
      let uploadAmount = files?.length;
      if (files.length>0)
      {
        for (let i = 0; i < files?.length; i++) {
            if (i < uploadAmount) formData.append("image", files?.[i]);
        }
        const request = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/media/${dataType}/${dataId}`, {
            method: 'POST',
            body: formData,
        });   
        const response = await request.json();
        if(uploadAmount == response.image.length){
          alert("Images uploaded successfully");
          Array.from(setSelectedImage).map((el:any)=>el.remove());
          //@ts-ignore
          document.querySelector('.modal-content').querySelector('input[type="file"]').value = null;
        }else{
          alert("Some images not uploaded");
        }

      }
    }
  }
  const removeImage = async (e:any) => 
  {
    if(confirm("Are you sure you want to remove this image?") === true)
    {
      let setSelectedImage = e.currentTarget.closest('.modal-content')?.querySelectorAll('.image-select');
      // let formData = new FormData();
      let removeAmount = setSelectedImage?.length ?? 0;
      let imagePath: any = [];
      if (removeAmount > 0) {
          for (let i = 0; i < removeAmount; i++) {
              // @ts-ignore
              imagePath.push(setSelectedImage[i].querySelector('img').src);
              // formData.append("imagePath", setSelectedImage[i].querySelector('img').src);
          }
          // formData.append("imagePath", imagePath);
          console.log(imagePath);
          const request = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/media`, {
              method: 'DELETE',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify({"imagePath":imagePath})
          });
          if (!request.ok) {
              alert(`${request.status} ${request.statusText}`);
          } else {
            const response = await request.json();
            if (response.status == "success") {
              setSelectedImage?.forEach((c:any)=>c.remove());
            } else {
              alert(`${response.status} ${response.message}`);
            }
          }
             
      }
    }
  }
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
        dataId={dataId}
        select={{
          Select,
          imgSelect,imgUnselect,
          imgCount,setImgCount,
          insertImg,
          imgTab,setImgTab,
          copyToSelect,
          preview,previewImg,
          alt,setAlt,
          width,setWidth,
          height,setHeight,
          className,setClassName,
          title,setTitle,
          upload,removeImage
        }}
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
