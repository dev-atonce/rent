"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import pageStyled from "../../../css/Flipbook.module.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { usePDF } from '@react-pdf/renderer';
// import path from "path";
// import file from  '../../../../public/1.pdf';

// @ts-ignore
export default function Flipbook({ lng, pdf }) {
  const [page, setPage] = useState<number>(0);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const book = useRef();

  const onFlip = useCallback(
    (e: any) => {
      setPage(e.data);
      // console.log('Current page: ' + e.data);
    },
    [page]
  );
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  useEffect(() => {}, []);

  const data = [
    {
      th: "บริษัทเองก็เป็นบริษัทที่ประสบความสำเร็จอย่างมาก เป็นที่ยอมรับกันว่าทางเลือกที่รุนแรงกว่านั้นคือการถูกผลักไส โดยไม่ทำอะไรเลยให้หลุดพ้นจากความปรารถนา",
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur asperiores repellendus optio nihil cupiditate soluta facere beatae perspiciatis iure sapiente ipsum ut autem ex, necessitatibus voluptatum aliquam tenetur neque?",
    },
    {
      th: "บริษัทเองก็เป็นบริษัทที่ประสบความสำเร็จอย่างมาก เป็นที่ยอมรับกันว่าทางเลือกที่รุนแรงกว่านั้นคือการถูกผลักไส โดยไม่ทำอะไรเลยให้หลุดพ้นจากความปรารถนา",
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur asperiores repellendus optio nihil cupiditate soluta facere beatae perspiciatis iure sapiente ipsum ut autem ex, necessitatibus voluptatum aliquam tenetur neque?",
    },
    {
      th: "บริษัทเองก็เป็นบริษัทที่ประสบความสำเร็จอย่างมาก เป็นที่ยอมรับกันว่าทางเลือกที่รุนแรงกว่านั้นคือการถูกผลักไส โดยไม่ทำอะไรเลยให้หลุดพ้นจากความปรารถนา",
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur asperiores repellendus optio nihil cupiditate soluta facere beatae perspiciatis iure sapiente ipsum ut autem ex, necessitatibus voluptatum aliquam tenetur neque?",
    },
  ];
  // const pdfFile = '../../../../public/AW_TH_XADV_2022_Catalog.pdf';
  // const __dirname = path.dirname(pdfFile);

  // console.log(__dirname);

  return (
    <>
      <div className="flex justify-center align-items-center items-center">
        <button
          type="button"
          className="bg-zinc-200 px-3 py-1 rounded-lg"
          //   @ts-ignore
          onClick={() => book.current.pageFlip().flipPrev()}
        >
          &lt; Previous
        </button>
        <p className="mx-2">
          [<span className="mr-2">{page}</span> of{" "}
          <span className="ml-2">{data.length}</span>]
        </p>
        <button
          type="button"
          className="bg-zinc-200 px-3 py-1 rounded-lg"
          //   @ts-ignore
          onClick={() => book.current.pageFlip().flipNext()}
        >
          Next &gt;
        </button>
      </div>
      <div
        className={`flex justify-center align-items-center items-center my-6`}
      >
        {/*  @ts-ignore */}
        <HTMLFlipBook
          // size="stretch"
          onFlip={onFlip}
          width={500}
          height={800}
          maxShadowOpacity={1}
          showCover={true}
          mobileScrollSupport={true}
          // drawShadow={true}
          ref={book}
        >
          <div className={`${pageStyled.page} ${pageStyled.first}`}>
            <h2 className="text-xl mt-6">BOOK TITLE</h2>
          </div>
          {data.map((v, i) => {
            return (
              <div
                className={`flex justify-center relative ${pageStyled.page}`}
                key={i}
              >
                <div className="absolute top-2 right-4">
                  <div
                    className={`relative border-0 border-t-2 border-t-zinc-300/50`}
                  />
                  <small>{i + 1}</small>
                </div>
                {/* @ts-ignore */}
                <p>{v[lng]}</p>
              </div>
            );
          })}
          <div className={`${pageStyled.page}`}></div>
        </HTMLFlipBook>
      </div>
      <div>
        {/* <div ref={containerRef} style={{ height: '100vh' }} /> */}
        <Document
          file={pdf}
          renderMode="canvas"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            // @ts-ignore
            renderAnnotaionLayer={false}
          />
        </Document>
        <p>
          Page {pageNumber} of {numPages || 0}
        </p>
      </div>
    </>
  );
}
