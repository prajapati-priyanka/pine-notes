import "./ColorPallete.css";

const ColorPallete = ({ setColorList, setNoteContent, noteContent }) => {
  const colors = [
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed",
  ];

  const addColorToNote = (color) => {
    setColorList(color);
    setNoteContent({ ...noteContent, color: color });
  };

  return (
    <div className="color-pallete-container">
      <ul className="color-list">
        {colors.map((color, index) => (
          <li
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => addColorToNote(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export { ColorPallete };
