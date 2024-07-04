"use client"
import {
  ModalContent,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button
} from "@nextui-org/react";
import { MdDeleteForever } from "react-icons/md";


export default function ImageModal({imgVisible, closeImgHandler, title, select, images}:any){
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
                  <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                  <ModalBody>
                    <div className="image-tools">
                      <button className="bg-slate-100 rounded-lg p-1 hover:bg-slate-200 " disabled={true}>
                        <MdDeleteForever className="text-slate-30009" style={{fontSize:'20px'}}/>
                      </button>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                      {Array.from(images).map((v:any, k:any) =>
                        <div 
                          key={k} 
                          className="col-span-2 rounded overflow-hidden bg-slate-100 hover:ring hover:ring-blue-500 cursor-pointer"
                          onClick={select.selectImage}
                        >
                          <div 
                            className="h-full relative flex align-middle content-center items-center" 
                            // style={{
                            //     position:"relative", display:"flex", height:"100%", alignContent:"center", alignItems: "center"
                            // }}
                          >
                            <img src={`${v.src}`} alt={v.alt} style={{height:'min-content'}}/>
                          </div>
                        </div>
                      )}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button 
                      // data-id={select.EditorId}
                      // onClick={select.createRow}
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