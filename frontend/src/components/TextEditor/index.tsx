"use client"
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
    RiFullscreenFill
} from "react-icons/ri";
import { RxCaretDown ,RxFontSize, RxLineHeight, RxDividerHorizontal   } from "react-icons/rx";
import { CgUndo, CgRedo } from "react-icons/cg";
import { useEffect, useState } from "react";
import ModalDialog from "../main/Modal";
import { Button, useDisclosure} from "@nextui-org/react";
import "../../css/Custom.scss"


const fontSize = {
    "h1":"text-5xl",
    "h2":"text-4xl",
    "h3":"text-3xl",
    "h4":"text-2xl",
    "h5":"text-xl",
    "h6":"text-lg"
};

const TextEditor = () => {
    const [visible, setVisible] = useState<Boolean>(false);
    const [row, setRow] = useState<HTMLElement>();
    // const [output, setOutput] = useState<HTMLElement>( );
    // const { onOpen, onOpenChange} = useDisclosure();

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    // const Status = () => 
        
    //     console.log(document.elementsFromPoint(0, 30))
    //     let elements = document.elementsFromPoint(0, 30);
    //     elements.forEach((elt, i) => {
    //         output.textContent += elt.localName;
    //         if (i < elements.length - 1) {
    //             output.textContent += " < ";
    //         }
    //     });
    // }
    const handleSetSelect = (e) => {
        setRow(e.target);
        e.target.closest('.grid').classList.toggle('select-row');
    }
    const Heading = (select:String) => 
    {
        document.getSelection();
        if(select!='') {
            document.execCommand("formatBlock", false, `<h1>`);
            selection.anchorNode.parentNode.setAttribute("class",`${fontSize.h1} font-bold`);
        }else{
            document.execCommand("formatBlock", false, `<${select}>`);
        }
    }
    const TextBold = () => {
        document.getSelection();
        document.execCommand("bold",false,undefined)
    }
    const TextItalic = () => {
        document.getSelection();
        document.execCommand("italic",false,undefined)
    }
    
    useEffect(() => {

        // document.addEventListener('mouseup',Status)
        // return () => document.removeEventListener('mouseup',Status)    
    })

    return (
    <>
    <ModalDialog visible={visible} closeHandler={closeHandler} select={{row,handleSetSelect}} title="Add Row"/>
    <div className="rounded-lg border border-stroke bg-white dark:border-strokedark dark:bg-boxdark h-full overflow-hidden">
        <div className="text-editor">
            <div className="header">
                <div className="tools flex justify-stretch p-1">
                    <div className="flex ">
                        <div className="group flex border-r pr-1 border-slate-300">
                            <button type="button" title="Undo" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <CgUndo onClick={()=>document.execCommand('undo')}/>
                            </button>
                            <button type="button" title="Undo" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <CgRedo onClick={()=>document.execCommand('redo')}/>
                            </button>
                        </div>
                        <div className="group flex border-r px-1 border-slate-300">
                            <button type="button" title="Bold" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsTypeBold onClick={TextBold}/>
                            </button>
                            <button type="button" title="Italic" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsTypeItalic onClick={TextItalic}/>
                            </button>
                            <button type="button" title="Underline" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsTypeUnderline onClick={()=>{document.execCommand('underline')}}/>
                            </button>
                            <button type="button" title="Underline" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsTypeStrikethrough onClick={()=>{document.execCommand('strikethrough')}}/>
                            </button>
                            <button type="button" title="Clear Formatting" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsEraser />
                            </button>
                        </div>
                        <div className="group flex border-r px-1 border-slate-300">
                            <button type="button" title="Align left" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiAlignLeft onClick={()=>{document.execCommand('justifyLeft')}}/>
                            </button>
                            <button type="button" title="Align center" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiAlignCenter onClick={()=>{document.execCommand('justifyCenter')}}/>
                            </button>
                            <button type="button" title="Align right" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiAlignRight onClick={()=>{document.execCommand('justifyRight')}}/>
                            </button>
                            <button type="button" title="Align justify" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiAlignJustify onClick={()=>document.execCommand('justifyFull')}/>
                            </button>
                        </div>
                        <div className="group flex border-r px-1 border-slate-300">
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button type="button" title="Unordered" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                    <RiListUnordered onClick={()=>{document.execCommand('insertUnorderedList')}}/>
                                </button>
                                <div title="Unordered" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button type="button" title="Ordered" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                    <RiListOrdered2 onClick={()=>{document.execCommand('insertOrderedList')}}/>
                                </button>
                                <div title="Ordered" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                            <button type="button" disabled={true} title="Decrease Indent" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 disabled:opacity-75 disabled:bg-white disabled:text-slate-300 p-2">
                                <RiIndentDecrease onClick={()=>document.execCommand('outdent')} />
                            </button>
                            <button type="button" title="Increase Indent" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiIndentIncrease onClick={()=>{document.execCommand('indent')}} />
                            </button>
                        </div>
                        <div className="group flex border-r px-1 border-slate-300">
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button type="button" title="Font Size" className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2">
                                    <RxFontSize />
                                </button>
                                <div title="Font Size" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button 
                                    type="button" 
                                    title="Heading" 
                                    className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2">
                                    <RiHeading2 />
                                </button>
                                <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button type="button" title="Heading" className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2">
                                    <RxLineHeight />
                                </button>
                                <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                        </div>
                        <div className="group flex border-r px-1 border-slate-300">
                            <button type="button" title="Horizontal Line" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RxDividerHorizontal />
                            </button>
                            <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                <button type="button" title="Heading" className="tools-item hover:bg-slate-200 text-slate-700 hover:text-slate-900 p-2">
                                    <BsTable />
                                </button>
                                <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                            </div>
                            <button type="button" title="Insert Link" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsLink45Deg />
                            </button>
                            <button type="button" title="Insert Image" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsCardImage />
                            </button>
                        </div>
                        <div className="px-1">
                            <button type="button" title="Exist Full Screen" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <BsCodeSlash />
                            </button>
                        </div>   
                    </div>
                    <div className="w-full"></div>
                    <div className="flex-none">
                        <div className="group flex">
                            
                            <button type="button" title="Full Screen" className="tools-item rounded bg-white text-slate-700 hover:bg-slate-200 hover:text-slate-900 p-2">
                                <RiFullscreenFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="editor-body border-t border-slate-300 min-h-100 p-2 focus:outline-none focus-visible:outline-none" 
                suppressContentEditableWarning={true}
                contentEditable={true} 
                aria-disabled="false" 
                tabIndex={-1}  
                spellCheck="false"
            ><p></p></div>
            <div className="editor-footer p-2 border-slate-200 border-t">
                <div id="output"></div>
                <Button onPress={handler}
                    className="bg-primary text-white hover:text-slate-200 hover:bg-blue-500 rounded-lg p-2 text-sm font-bold"
                >Add row</Button>
            </div>
        </div>
    </div>
    </>
    )
}
export default TextEditor; 