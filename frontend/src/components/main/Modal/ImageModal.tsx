"use client"
import {
  ModalContent,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button
} from "@nextui-org/react";


export default function ImageModal({imgVisible, closeImgHandler, title, images}:any){
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
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                  <ModalBody>
                    <div className="grid grid-cols-12 gap-4">
                      {Array.from(images).map((v:any, k:any) =>
                        <div key={k} className="col-span-2 rounded-xl overflow-hidden bg-slate-300">
                          <div className="flex justify-center align-middle display-block h-full">
                            <img src={`${v.src}`} alt={v.alt} className="w-full" width="100%"/>
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
              )}
            </ModalContent>
          </Modal>
        </>
    );
}