import style from "./DraftEditor.module.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const DraftEditor = ({ quillValue, setQuillValue }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
  ];
  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getHTML());
  };
  return (
    <>
      <div className={style.draftEditorContainer}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={quillValue || ""}
          onChange={handleQuillChange}
        />
      </div>
    </>
  );
};

export default DraftEditor;
