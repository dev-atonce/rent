import { 
    BsTypeBold,
    BsTypeItalic,
    BsTypeUnderline,
    BsTypeStrikethrough,
    BsEraser,
    BsLink45Deg,
    BsCardImage,
    BsCodeSlash,
    BsTable
} from "react-icons/bs";
import { 
    RiListUnordered,
    RiListOrdered2,
    RiHeading2,
    RiAlignLeft,
    RiAlignCenter,
    RiAlignRight,
    RiAlignJustify 
} from "react-icons/ri";
import { RxCaretDown ,RxFontSize, RxLineHeight, RxDividerHorizontal   } from "react-icons/rx";
import { CgUndo, CgRedo } from "react-icons/cg";

const TextEditor = () => {
    return (
        <>
            <h1>Text Editor</h1>
            <div className="rounded-lg border border-stroke bg-white dark:border-strokedark dark:bg-boxdark h-full overflow-hidden">
                <div className="text-editor">
                    <div className="header">
                        <div className="flex tools p-1">
                            
                            <div className="group border-r pr-1 border-slate-300">
                                <button type="button" title="Undo" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <CgUndo />
                                </button>
                                <button type="button" title="Undo" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <CgRedo />
                                </button>
                            </div>
                            <div className="group border-r px-1 border-slate-300">
                                <button type="button" title="Bold" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsTypeBold />
                                </button>
                                <button type="button" title="Italic" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsTypeItalic />
                                </button>
                                <button type="button" title="Underline" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsTypeUnderline />
                                </button>
                                <button type="button" title="Underline" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsTypeStrikethrough />
                                </button>
                                <button type="button" title="Clear Formatting" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsEraser />
                                </button>
                            </div>
                            <div className="group border-r px-1 border-slate-300">
                                <button type="button" title="Align left" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <RiAlignLeft />
                                </button>
                                <button type="button" title="Align center" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <RiAlignCenter />
                                </button>
                                <button type="button" title="Align right" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <RiAlignRight />
                                </button>
                                <button type="button" title="Align justify" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <RiAlignJustify />
                                </button>
                            </div>
                            <div className="group flex border-r px-1 border-slate-300">
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Unordered" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <RiListUnordered />
                                    </button>
                                    <div title="Unordered" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Ordered" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <RiListOrdered2 />
                                    </button>
                                    <div title="Ordered" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                            </div>
                            <div className="group flex border-r px-1 border-slate-300">
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Font Size" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <RxFontSize />
                                    </button>
                                    <div title="Font Size" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Heading" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <RiHeading2 />
                                    </button>
                                    <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Heading" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <RxLineHeight />
                                    </button>
                                    <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                            </div>
                            <div className="group flex border-r px-1 border-slate-300">
                                <button type="button" title="Horizontal Line" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <RxDividerHorizontal />
                                </button>
                                <div className="tool-item flex items-center overflow-hidden border border-transparent hover:border hover:border-slate-200 cursor-pointer rounded">
                                    <button type="button" title="Heading" className="tools-item hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2">
                                        <BsTable />
                                    </button>
                                    <div title="Heading" className="pointer bg-white hover:bg-slate-200 max-h[32] flex items-center" style={{height:'32px'}}><RxCaretDown /></div>
                                </div>
                                <button type="button" title="Insert Link" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsLink45Deg />
                                </button>
                                <button type="button" title="Insert Image" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                    <BsCardImage />
                                </button>
                            </div>
                            <div className="right">
                                <div className="group flex border-r px-1 border-slate-300">
                                    <button type="button" title="Insert Image" className="tools-item rounded bg-white text-slate-500 hover:bg-slate-200 hover:text-slate-900 p-2">
                                        <BsCodeSlash />
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="body"></div>
                </div>
            </div>
        </>
    )
}
export default TextEditor; 