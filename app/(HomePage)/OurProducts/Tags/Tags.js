import "./Tags.css";
function Tags({ allText, selectedTag, handleClick, tags }) {
  return (
    <div className="product_tags">
      <div
        onClick={() => handleClick("all")}
        className={`product_tag ${selectedTag === "all" ? "active" : ""}`}
      >
        <p className={` ${selectedTag === "all" ? "active" : ""}`}>{allText}</p>
      </div>

      {tags?.map((tag, index) => (
        <div
          key={index}
          className={`product_tag ${tag.id === selectedTag ? "active" : ""}`}
          onClick={() => handleClick(tag.id)}
        >
          <p className={`${tag.id === selectedTag ? "active" : ""}`}>
            {tag.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
