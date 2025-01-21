import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's default styles

const QuillEditor = ({ id, value, onChange, ...other }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],
      ['link']
    ]
  };

  return (
    <div {...other}>
      <ReactQuill
        id={id}
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
      />
    </div>
  );
};

QuillEditor.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuillEditor;
