"use client"
import {
  ModalContent,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button
} from "@nextui-org/react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

export default function ImageModal({imgVisible, closeImgHandler, title, select, images}:any){
    const [tab, setTab] = useState<any>('');
    const CurrentTab = () =>{}
    return (
        <>
          {/* <Button onPress={onOpen}>Open Modal</Button> */}
          <Modal 
              id="imgModal"
              isOpen={imgVisible} 
              onOpenChange={closeImgHandler} 
              backdrop="blur"
              className={`rounded-lg bg-white border border-slate-300 z-[2000]`}
              style={{width:"800px",maxWidth:'100vw'}}
              closeButton
            >
            <ModalContent>
              {(onClose) => 
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center">{title}</ModalHeader>
                  <ModalBody>
                    <div className="image-tools flex justify-between border-b border-slate-200 pb-2">
                      <div className="tabs justify-start ">
                        <Button className="bg-slate-50 hover:bg-slate-200 rounded-lg px-3 h-7" onClick={select.setImgTab('upload')}><MdCloudUpload/>Upload</Button>
                      </div>
                      <div className="actions justify-end">
                        <Button 
                          className={`${select.imgCount>0?`bg-slate-400 text-white hover:bg-slate-600`:`bg-slate-100`} rounded-lg px-3 h-7`} 
                          disabled={select.imgCount>0?false:true}
                          onClick={()=>{
                            select.imgUnselect();
                            select.setImgCount(0);
                          }}
                        >
                          Unselect
                        </Button>
                        <Button className={`${select.imgCount>0?`bg-rose-400 text-white hover:bg-red`:`bg-slate-100`} rounded-lg px-3 h-7 ml-2`} disabled={select.imgCount>0?false:true}>
                          Delete
                        </Button>
                      </div>
                    </ div>
                    <div className="images-gallery p-1" style={{height:'500px',maxHeight:'500px',overflowY:'auto'}}>
                      <div className="grid grid-cols-12 gap-4">
                        {Array.from(images).map((v:any, k:any) =>
                          <div 
                            key={k} 
                            className="col-span-2 rounded overflow-hidden bg-slate-100 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={select.select}
                          >
                            <div 
                              className="h-full relative flex align-middle content-center items-center" 
                              // style={{
                              //     position:"relative", display:"flex", height:"100%", alignContent:"center", alignItems: "center"
                              // }}
                            >
                              <img src={`/${v.src}`} alt={v.alt} style={{height:'min-content'}}/>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button 
                      // data-id={select.EditorId}
                      onClick={select.insertImg}
                      // onPress={onClose}
                      className={`bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Select
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onPress={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              }
            </ModalContent>
          </Modal>
        </>
    );
}