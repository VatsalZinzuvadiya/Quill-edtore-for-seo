import { Quill } from "react-quill";
import { Icon } from "@iconify/react";
import roundUndo from "@iconify/icons-ic/round-undo";
import roundRedo from "@iconify/icons-ic/round-redo";
import PropTypes from "prop-types";
import QuillEditorToolbarStyle from "./QuillEditorToolbarStyle.js";

// Font and Size options
const FONT_FAMILY = ["Arial", "Tahoma", "Georgia", "Impact", "Verdana"];
const FONT_SIZE = [
  "8px", "9px", "10px", "12px", "14px", "16px", "20px", "24px", "32px",
  "42px", "54px", "68px", "84px", "98px"
];
const HEADINGS = [
  "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6"
];

// Registering custom fonts and sizes with Quill
const Size = Quill.import("attributors/style/size");
Size.whitelist = FONT_SIZE;
Quill.register(Size, true);
const Font = Quill.import("attributors/style/font");
Font.whitelist = FONT_FAMILY;
Quill.register(Font, true);

export const formats = [
  "align", "background", "blockquote", "bold", "bullet", "code", "code-block",
  "color", "direction", "font", "formula", "header", "image", "indent", "italic", 
  "link", "list", "script", "size", "strike", "table", "underline", "video"
];

export function undoChange() {
  this.quill.history.undo();
}

export function redoChange() {
  this.quill.history.redo();
}

const QuillEditorToolbar = ({ id, isSimple, ...other }) => {
  return (
    <QuillEditorToolbarStyle {...other}>
      <div id={id}>
        {/* Toolbar components */}
        <div className="ql-formats">
          {!isSimple && (
            <select className="ql-font" defaultValue="">
              <option value="">Font</option>
              {FONT_FAMILY.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          )}
          {!isSimple && (
            <select className="ql-size" defaultValue="16px">
              {FONT_SIZE.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          )}
          <select className="ql-header" defaultValue="">
            {HEADINGS.map((heading, index) => (
              <option key={heading} value={index + 1}>{heading}</option>
            ))}
            <option value="">Normal</option>
          </select>
        </div>
        <div className="ql-formats">
          <button type="button" className="ql-bold" />
          <button type="button" className="ql-italic" />
          <button type="button" className="ql-underline" />
          <button type="button" className="ql-strike" />
        </div>
        {!isSimple && (
          <div className="ql-formats">
            <select className="ql-color" />
            <select className="ql-background" />
          </div>
        )}
        <div className="ql-formats">
          <button type="button" className="ql-list" value="ordered" />
          <button type="button" className="ql-list" value="bullet" />
          {!isSimple && <button type="button" className="ql-indent" value="-1" />}
          {!isSimple && <button type="button" className="ql-indent" value="+1" />}
        </div>
        <div className="ql-formats">
          <button type="button" className="ql-link" />
          <button type="button" className="ql-image" />
          <button type="button" className="ql-video" />
        </div>
        {!isSimple && (
          <div className="ql-formats">
            <button type="button" className="ql-undo">
              <Icon icon={roundUndo} width={18} height={18} />
            </button>
            <button type="button" className="ql-redo">
              <Icon icon={roundRedo} width={18} height={18} />
            </button>
          </div>
        )}
      </div>
    </QuillEditorToolbarStyle>
  );
};

QuillEditorToolbar.propTypes = {
  id: PropTypes.string.isRequired,
  isSimple: PropTypes.bool,
};

export default QuillEditorToolbar;
