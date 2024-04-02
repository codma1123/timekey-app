"use client";

import SlideDown from "@/components/motions/slide-down";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { File, FileDown, X } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const ReportRequestPage = ({ params }: { params: { userId: UUID; id: UUID } }) => {
  const { userId, id: reportId } = params;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [textareaValue, setTextareaValue] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (textareaRef) {
      setTimeout(() => {
        textareaRef.current.focus();
      }, 500);
    }
  }, []);

  return (
    <>
      <SlideDown>
        <div className="text-2xl font-bold mt-3">퇴근 처리 요청</div>
      </SlideDown>
      <SlideDown delay={1}>
        <div className="mt-2 ml-2 text-gray-400">퇴근 처리 요청 사유를 작성 해 주세요</div>
      </SlideDown>

      <Textarea
        ref={textareaRef}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className="w-full mt-2 h-36 bg-content border-box rounded-2xl transition-all duration-400"
      />

      <Label
        htmlFor="file-input"
        className="flex items-center gap-x-1 w-fit p-1 ml-auto"
      >
        파일 첨부
        <FileDown className="h-4 w-4" />
      </Label>

      {selectedFile && (
        <div className="flex">
          <p>{selectedFile.name}</p>
          <button
            className="ml-auto"
            onClick={() => setSelectedFile(null)}
          >
            <X />
          </button>
        </div>
      )}
      <input
        type="file"
        id="file-input"
        className=" hidden"
        onChange={onFileInputChange}
      />

      <button
        className="py-4 w-full mt-auto mb-6 text-xl bg-emerald-400 text-white rounded-2xl"
        onClick={() => {}}
      >
        퇴근 처리 요청
      </button>
    </>
  );
};

export default ReportRequestPage;
